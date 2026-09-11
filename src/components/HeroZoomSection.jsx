'use client'

import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { VERTEX_SHADER, FRONT_FRAGMENT_SHADER } from './DissolveTransition.jsx'
import { cld } from '../lib/cloudinary.js'

/* ════════════════════════════════════════════
 HERO ZOOM + DISSOLVE — 3 phases fusionnées dans un seul
 pin/canvas, pour un passage petit-cadre → plein écran →
 dissolve vers l'image suivante SANS rupture visuelle :
   1. clip-path resserré (30/35) + scale 1.3 → plein écran
   2. léger palier — l'image tient à pleine résolution
   3. dissolve WebGL (shaders repris de DissolveTransition.jsx,
      exportés depuis ce fichier) : hero-bg.webp → about-1.webp
 Le canvas Three.js est monté dès le départ (au lieu d'un
 <img> qui basculerait vers un <canvas> séparé au moment du
 dissolve) : c'est le zoom CSS (clip-path + scale) qui joue
 sur ce même canvas, donc aucune bascule DOM ni flash quand
 le dissolve prend le relais — juste la suite du même scrub.
 Absorbe l'ex-<DissolveTransition id="hero-dissolve" /> qui
 suivait directement dans le rendu (voir plus bas).
 ════════════════════════════════════════════ */
function HeroZoomSection() {
  const pinRef = useRef(null)
  const containerRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const pin = pinRef.current
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!pin || !container || !canvas) return

    let destroyed = false
    let texture = null

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    if ('outputColorSpace' in renderer) renderer.outputColorSpace = THREE.SRGBColorSpace

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
    camera.position.z = 1
    const scene = new THREE.Scene()
    const geometry = new THREE.PlaneGeometry(2, 2)

    const uniforms = {
      uTexture: { value: null },
      uResolution: { value: new THREE.Vector2() },
      uImageResolution: { value: new THREE.Vector2(1, 1) },
      uDissolve: { value: 0 },
      uCenter: { value: new THREE.Vector2(0.5, 0.5) },
      uGrayscale: { value: 0 },
      uEdgeIntensity: { value: 0 },
      uEdgeBrightness: { value: 1 },
    }

    const material = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRONT_FRAGMENT_SHADER,
      uniforms,
      transparent: true,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    function render() {
      if (destroyed) return
      renderer.render(scene, camera)
    }

    function resize() {
      const w = window.innerWidth
      const h = window.innerHeight
      renderer.setSize(w, h, false)
      uniforms.uResolution.value.set(w, h)
      render()
    }

    const loader = new THREE.TextureLoader()
    loader.load(cld('/assets/images/about-1.webp'), tex => {
      if (destroyed) { tex.dispose(); return }
      if ('colorSpace' in tex) tex.colorSpace = THREE.SRGBColorSpace
      texture = tex
      uniforms.uTexture.value = tex
      uniforms.uImageResolution.value.set(tex.image.width, tex.image.height)
      render()
    })

    resize()
    window.addEventListener('resize', resize)

    /* État initial */
    gsap.set(container, { clipPath: 'inset(30% 35% 30% 35%)' })
    gsap.set(canvas, { scale: 1.3 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pin,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    })
      /* Petit cadre vers plein écran */
      .to(container, { clipPath: 'inset(0% 0% 0% 0%)', ease: 'none', duration: 1 }, 0)
      .to(canvas, { scale: 1, ease: 'none', duration: 1 }, 0)

    return () => {
      destroyed = true
      window.removeEventListener('resize', resize)
      tl.scrollTrigger?.kill()
      tl.kill()
      geometry.dispose()
      material.dispose()
      texture?.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <section id="hero-zoom-section" className="hzx-section">
      <div ref={pinRef} className="hzx-pin">
        <div className="hzx-sticky">
          <div ref={containerRef} className="hzx-container">
            <canvas
              ref={canvasRef}
              className="hzx-canvas"
              role="img"
              aria-label="Joseph Dehazounde — Portrait et présentation"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroZoomSection
