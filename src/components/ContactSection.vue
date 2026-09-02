<script setup>
import { ref } from 'vue'
import { profile } from '../data/resume.js'

const telHref = 'tel:+63' + profile.phone.replace(/^0/, '').replace(/\s+/g, '')

const copied = ref(false)
let resetTimer

// Copy the address on click so the action always gives feedback, even when the
// visitor has no mail client to handle the mailto: link. The mailto: still fires
// for those who do.
async function copyEmail() {
  try {
    await navigator.clipboard.writeText(profile.email)
    copied.value = true
    clearTimeout(resetTimer)
    resetTimer = setTimeout(() => (copied.value = false), 2200)
  } catch (e) {
    /* clipboard blocked (insecure context / permissions) — mailto: still runs */
  }
}
</script>

<template>
  <section id="contact" class="section">
    <div class="container contact">
      <div class="contact__blob" aria-hidden="true"></div>

      <p class="section__eyebrow" v-reveal>Contact</p>
      <h2 class="contact__title" v-reveal="60">
        Let's build something
        <span class="gradient-text">clean and accessible</span>.
      </h2>
      <p class="contact__lede" v-reveal="120">
        I'm open to front-end work and collaborations. The fastest way to reach
        me is email — I usually reply within a day.
      </p>

      <ul class="contact__list" v-reveal="180">
        <li>
          <span class="contact__k">Email</span>
          <a
            :href="`mailto:${profile.email}`"
            class="link-underline"
            title="Click to copy"
            @click="copyEmail"
            ><span aria-live="polite">{{
              copied ? 'copied to clipboard ✓' : profile.email
            }}</span></a
          >
        </li>
        <li>
          <span class="contact__k">Phone</span>
          <a :href="telHref" class="link-underline">{{ profile.phone }}</a>
        </li>
        <li>
          <span class="contact__k">Location</span>
          <span>{{ profile.location }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.contact {
  position: relative;
  text-align: center;
  padding-block: clamp(3rem, 8vw, 5rem);
}

.contact__blob {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 30rem;
  height: 30rem;
  max-width: 90%;
  border-radius: 50%;
  background: radial-gradient(circle, var(--grad-b), transparent 68%);
  filter: blur(90px);
  opacity: 0.28;
  pointer-events: none;
}

.contact > *:not(.contact__blob) {
  position: relative;
  z-index: 1;
}

.section__eyebrow {
  justify-content: center;
}

.contact__title {
  font-size: clamp(1.9rem, 6vw, 3rem);
  max-width: 22ch;
  margin: 0 auto 1.25rem;
}

.contact__lede {
  max-width: 38rem;
  margin: 0 auto 2.5rem;
  color: var(--text-muted);
}

.contact__list {
  display: inline-grid;
  gap: 0.75rem;
  text-align: left;
}

.contact__list li {
  display: grid;
  grid-template-columns: 6rem 1fr;
  align-items: baseline;
  gap: 1rem;
  padding: 0.5rem 0;
}

.contact__k {
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-faint);
}

@media (max-width: 30rem) {
  .contact__list li {
    grid-template-columns: 1fr;
    gap: 0.15rem;
  }
}
</style>
