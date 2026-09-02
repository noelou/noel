<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import ThemeToggle from './ThemeToggle.vue'
import { profile } from '../data/resume.js'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

const scrolled = ref(false)
const menuOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 12
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="nav" :class="{ 'nav--scrolled': scrolled }">
    <div class="nav__inner container container--wide">
      <a href="#top" class="nav__brand" @click="closeMenu">
        <span class="nav__name">{{ profile.nickname }}</span
        ><span class="nav__dot">.</span>
      </a>

      <button
        class="nav__burger"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="nav-menu"
        @click="menuOpen = !menuOpen"
      >
        <span class="visually-hidden">Menu</span>
        <span class="nav__burger-bar" :class="{ 'is-open': menuOpen }"></span>
      </button>

      <nav id="nav-menu" class="nav__menu" :class="{ 'nav__menu--open': menuOpen }">
        <ul>
          <li v-for="link in links" :key="link.href">
            <a :href="link.href" class="link-underline" @click="closeMenu">{{
              link.label
            }}</a>
          </li>
        </ul>
        <ThemeToggle />
      </nav>
    </div>
  </header>
  <span id="top" aria-hidden="true"></span>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  transition: background 0.3s var(--spring), border-color 0.3s var(--spring);
  border-bottom: 1px solid transparent;
}

.nav--scrolled {
  background: color-mix(in srgb, var(--bg) 82%, transparent);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom-color: var(--border);
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-block: 0.9rem;
}

.nav__brand {
  display: inline-flex;
  align-items: baseline;
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 600;
}

.nav__name {
  background: var(--gradient);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  transition: background-position 0.5s var(--spring);
}

.nav__brand:hover .nav__name {
  background-position: 100% center;
}

.nav__dot {
  color: var(--grad-c);
}

.nav__menu {
  display: flex;
  align-items: center;
  gap: 1.75rem;
}

.nav__menu ul {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav__menu a {
  font-size: 0.95rem;
}

.nav__burger {
  display: none;
  width: 40px;
  height: 40px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: var(--bg-elevated);
  cursor: pointer;
  position: relative;
}

.nav__burger-bar,
.nav__burger-bar::before,
.nav__burger-bar::after {
  content: '';
  position: absolute;
  left: 50%;
  width: 18px;
  height: 2px;
  border-radius: 2px;
  background: var(--text);
  transform: translateX(-50%);
  transition: transform 0.3s var(--spring), opacity 0.2s linear;
}

.nav__burger-bar {
  top: 50%;
  margin-top: -1px;
}

.nav__burger-bar::before {
  top: -6px;
}
.nav__burger-bar::after {
  top: 6px;
}

.nav__burger-bar.is-open {
  background: transparent;
}
.nav__burger-bar.is-open::before {
  transform: translateX(-50%) translateY(6px) rotate(45deg);
}
.nav__burger-bar.is-open::after {
  transform: translateX(-50%) translateY(-6px) rotate(-45deg);
}

@media (max-width: 40rem) {
  .nav__burger {
    display: block;
  }

  .nav__menu {
    position: absolute;
    top: calc(100% + 1px);
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 1.25rem;
    padding: 1.5rem clamp(1.25rem, 5vw, 2rem) 2rem;
    background: var(--bg-elevated);
    border-bottom: 1px solid var(--border);
    box-shadow: var(--shadow-lg);
    transform: translateY(-12px);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.3s var(--spring), opacity 0.3s var(--spring);
  }

  .nav__menu--open {
    transform: none;
    opacity: 1;
    pointer-events: auto;
  }

  .nav__menu ul {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}
</style>
