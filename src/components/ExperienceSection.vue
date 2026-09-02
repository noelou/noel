<script setup>
import { experience } from '../data/resume.js'
</script>

<template>
  <section id="experience" class="section section--sunken">
    <div class="container">
      <p class="section__eyebrow" v-reveal>Experience</p>
      <h2 class="section__title" v-reveal="60">Where I've been building</h2>

      <ol class="xp">
        <li
          v-for="(job, i) in experience"
          :key="job.company"
          class="xp__item"
          v-reveal="80 + i * 80"
        >
          <div class="xp__marker" aria-hidden="true">
            <span class="xp__dot"></span>
          </div>

          <div class="xp__body">
            <div class="xp__head">
              <h3 class="xp__role">
                {{ job.role }}
                <span class="xp__at">at</span>
                <span class="xp__company">{{ job.company }}</span>
              </h3>
              <span class="xp__period">{{ job.start }} – {{ job.end }}</span>
            </div>
            <p class="xp__where">{{ job.companyLocation }}</p>
            <p class="xp__blurb">{{ job.blurb }}</p>
            <ul class="xp__points">
              <li v-for="point in job.points" :key="point">{{ point }}</li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.section--sunken {
  background: var(--bg-sunken);
}

.xp {
  display: grid;
  gap: 0.5rem;
}

.xp__item {
  display: grid;
  grid-template-columns: 28px 1fr;
  gap: 1.25rem;
  padding-bottom: 2.25rem;
}

.xp__marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6px;
}

.xp__dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--gradient);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--grad-a) 20%, transparent);
  flex-shrink: 0;
}

.xp__item:not(:last-child) .xp__marker::after {
  content: '';
  flex: 1;
  width: 2px;
  margin-top: 8px;
  background: linear-gradient(var(--border-strong), transparent);
}

.xp__body {
  padding: 1.4rem 1.6rem;
  border-radius: var(--radius-lg);
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
  transition: transform 0.35s var(--spring), box-shadow 0.35s var(--spring);
}

.xp__body:hover {
  transform: translateX(4px);
  box-shadow: var(--shadow-md);
}

.xp__head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem 1rem;
}

.xp__role {
  font-size: 1.2rem;
}

.xp__at {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 400;
  color: var(--text-faint);
  margin-inline: 0.25rem;
}

.xp__company {
  background: var(--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.xp__period {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-faint);
  white-space: nowrap;
}

.xp__where {
  font-size: 0.85rem;
  color: var(--text-faint);
  margin: 0.15rem 0 0.75rem;
}

.xp__blurb {
  color: var(--text-muted);
  margin: 0 0 0.9rem;
}

.xp__points {
  display: grid;
  gap: 0.45rem;
}

.xp__points li {
  position: relative;
  padding-left: 1.4rem;
  color: var(--text-muted);
  font-size: 0.97rem;
}

.xp__points li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.65em;
  width: 7px;
  height: 7px;
  border-radius: 2px;
  background: var(--grad-b);
  transform: rotate(45deg);
}

@media (max-width: 44rem) {
  .xp__item {
    grid-template-columns: 1fr;
    gap: 0;
    padding-bottom: 1.5rem;
  }
  .xp__marker {
    display: none;
  }
  .xp__body {
    padding: 1.25rem 1.3rem;
  }
}
</style>
