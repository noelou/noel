<script setup>
import { projects } from '../data/resume.js'

function hostname(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch (e) {
    return url
  }
}
</script>

<template>
  <section id="projects" class="section">
    <div class="container container--wide">
      <p class="section__eyebrow" v-reveal>Projects</p>
      <h2 class="section__title" v-reveal="60">
        Things I've shipped — all with live demos
      </h2>

      <ul class="projects">
        <li
          v-for="(project, i) in projects"
          :key="project.name"
          class="project"
          v-reveal="80 + i * 90"
        >
          <div class="project__top">
            <span class="project__kind" :data-kind="project.kind">{{
              project.kind
            }}</span>
            <a
              :href="project.url"
              target="_blank"
              rel="noopener noreferrer"
              class="project__demo"
            >
              Live demo
              <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 17 17 7M8 7h9v9"
                />
              </svg>
            </a>
          </div>

          <h3 class="project__name">{{ project.name }}</h3>
          <p class="project__summary">{{ project.summary }}</p>

          <ul class="project__points">
            <li v-for="point in project.points" :key="point">{{ point }}</li>
          </ul>

          <div class="project__foot">
            <ul class="project__stack">
              <li v-for="tech in project.stack" :key="tech">{{ tech }}</li>
            </ul>
            <a
              :href="project.url"
              target="_blank"
              rel="noopener noreferrer"
              class="project__url"
              >{{ hostname(project.url) }}</a
            >
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 24rem), 1fr));
  gap: 1.5rem;
}

.project {
  display: flex;
  flex-direction: column;
  padding: 1.75rem;
  border-radius: var(--radius-lg);
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
  position: relative;
  overflow: hidden;
  transition: transform 0.4s var(--spring), box-shadow 0.4s var(--spring),
    border-color 0.4s var(--spring);
}

.project::before {
  content: '';
  position: absolute;
  inset: 0 0 auto 0;
  height: 3px;
  background: var(--gradient);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.45s var(--spring);
}

.project:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: var(--border-strong);
}

.project:hover::before {
  transform: scaleX(1);
}

.project__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.project__kind {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
}

.project__kind[data-kind='Professional'] {
  color: var(--grad-a);
  background: color-mix(in srgb, var(--grad-a) 12%, transparent);
}

.project__kind[data-kind='Personal'] {
  color: var(--grad-b);
  background: color-mix(in srgb, var(--grad-b) 12%, transparent);
}

.project__demo {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.85rem;
  font-weight: 600;
}

.project__name {
  font-size: 1.35rem;
  margin-bottom: 0.5rem;
}

.project__summary {
  color: var(--text-muted);
  font-size: 0.98rem;
  margin-bottom: 1rem;
}

.project__points {
  display: grid;
  gap: 0.4rem;
  margin-bottom: 1.5rem;
}

.project__points li {
  position: relative;
  padding-left: 1.3rem;
  font-size: 0.92rem;
  color: var(--text-muted);
}

.project__points li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--grad-b);
  font-weight: 700;
}

.project__foot {
  margin-top: auto;
  padding-top: 1.1rem;
  border-top: 1px solid var(--border);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.project__stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.project__stack li {
  font-size: 0.78rem;
  font-weight: 500;
  padding: 0.2rem 0.55rem;
  border-radius: var(--radius-sm);
  background: var(--bg-sunken);
  border: 1px solid var(--border);
  color: var(--text-muted);
}

.project__url {
  font-size: 0.82rem;
  color: var(--text-faint);
  font-family: var(--font-serif);
  font-style: italic;
}

.project__url:hover {
  color: var(--accent);
}
</style>
