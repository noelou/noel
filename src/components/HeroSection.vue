<script setup>
import { profile } from '../data/resume.js'
import headshot from '../assets/headshot.jpg'

const years = new Date().getFullYear() - profile.codingSince
</script>

<template>
  <section class="hero">
    <div class="hero__blob hero__blob--1" aria-hidden="true"></div>
    <div class="hero__blob hero__blob--2" aria-hidden="true"></div>

    <div class="container container--wide hero__inner">
      <div class="hero__text">
        <p class="hero__hi" v-reveal>Hi, I'm</p>

        <h1 class="hero__name" v-reveal="80">
          <span class="gradient-text">{{ profile.name }}</span>
        </h1>

        <p class="hero__role" v-reveal="150">
          A {{ profile.role.toLowerCase() }} based in
          <span class="hero__place">{{ profile.location }}</span>
        </p>

        <p class="hero__lede" v-reveal="220">
          I've been coding since {{ profile.codingSince }} — that's
          {{ years }}+ years of building responsive, accessible websites with
          HTML, CSS, JavaScript, and Vue.js. I like turning ideas into clean,
          functional interfaces, and I'm always up for learning something new
          <span class="hero__paren">(patience included, especially when fixing
            bugs)</span>.
        </p>

        <div class="hero__actions" v-reveal="300">
          <a href="#projects" class="btn btn--primary">See my work</a>
          <a href="#contact" class="btn btn--ghost">Get in touch</a>
        </div>
      </div>

      <div class="hero__portrait" v-reveal="180">
        <span class="hero__ring" aria-hidden="true"></span>
        <img
          class="hero__photo"
          :src="headshot"
          width="440"
          height="440"
          decoding="async"
          :alt="`Portrait of ${profile.name}`"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  min-height: min(82vh, 46rem);
  padding-block: clamp(3.5rem, 10vh, 6rem);
}

.hero__inner {
  width: 100%;
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  column-gap: clamp(2.5rem, 9vw, 6.5rem);
  row-gap: 2.5rem;
}

.hero__portrait {
  position: relative;
  width: clamp(10rem, 24vw, 15rem);
  aspect-ratio: 1;
  flex-shrink: 0;
}

.hero__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  border-radius: 50%;
  border: 4px solid var(--bg);
  box-shadow: var(--shadow-lg);
  position: relative;
  z-index: 1;
}

.hero__ring {
  position: absolute;
  inset: -10px;
  border-radius: 50%;
  background: var(--gradient);
  background-size: 200% auto;
  animation: gradient-pan 8s linear infinite;
  opacity: 0.9;
}

.hero__ring::after {
  content: '';
  position: absolute;
  inset: -22px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--grad-b), transparent 68%);
  opacity: 0.3;
  filter: blur(24px);
}

@media (max-width: 54rem) {
  .hero {
    min-height: 0;
  }
  .hero__inner {
    grid-template-columns: 1fr;
  }
  .hero__portrait {
    order: -1;
    justify-self: start;
    width: clamp(9rem, 38vw, 12rem);
  }
}

.hero__blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
  opacity: 0.5;
  pointer-events: none;
}

.hero__blob--1 {
  width: 34rem;
  height: 34rem;
  top: -14rem;
  right: -10rem;
  background: radial-gradient(circle, var(--grad-a), transparent 70%);
}

.hero__blob--2 {
  width: 26rem;
  height: 26rem;
  bottom: -12rem;
  left: -12rem;
  background: radial-gradient(circle, var(--grad-b), transparent 70%);
  opacity: 0.35;
}

.hero__hi {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 1.3rem;
  color: var(--text-muted);
  margin-bottom: 0.4rem;
}

.hero__name {
  font-size: clamp(2.7rem, 9vw, 4.75rem);
  margin-bottom: 1rem;
}

.hero__role {
  font-size: clamp(1.15rem, 3.5vw, 1.5rem);
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.hero__place {
  color: var(--text);
  font-weight: 600;
  text-decoration: underline;
  text-decoration-color: var(--grad-b);
  text-underline-offset: 4px;
  text-decoration-thickness: 2px;
}

.hero__lede {
  max-width: 40rem;
  color: var(--text-muted);
  font-size: 1.075rem;
}

.hero__paren {
  color: var(--text-faint);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 2rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.4rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.98rem;
  border: 1px solid transparent;
  transition: transform 0.3s var(--spring-back), box-shadow 0.3s var(--spring),
    background 0.3s var(--spring);
}

.btn--primary {
  background: var(--gradient);
  background-clip: padding-box;
  color: #fff;
  border-color: color-mix(in srgb, var(--grad-a) 55%, #000 8%);
  box-shadow: var(--shadow-md), inset 0 0 0 1px rgba(255, 255, 255, 0.18);
}

.btn--primary:hover {
  transform: translateY(-3px) scale(1.02);
  border-color: color-mix(in srgb, var(--grad-a) 70%, #000 12%);
  box-shadow: var(--shadow-lg), inset 0 0 0 1px rgba(255, 255, 255, 0.22);
}

.btn--ghost {
  background: var(--bg-elevated);
  border-color: var(--border-strong);
  color: var(--text);
}

.btn--ghost:hover {
  transform: translateY(-3px);
  border-color: var(--accent);
}

</style>
