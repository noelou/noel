<script setup>
import { skills } from '../data/resume.js'
</script>

<template>
  <section id="skills" class="section section--sunken">
    <div class="container container--wide">
      <p class="section__eyebrow" v-reveal>Skills</p>
      <h2 class="section__title" v-reveal="60">The toolbox</h2>

      <div class="skills">
        <div
          v-for="(group, i) in skills"
          :key="group.group"
          class="skills__group"
          v-reveal="80 + i * 80"
        >
          <h3 class="skills__label">{{ group.group }}</h3>
          <ul class="skills__list">
            <li v-for="item in group.items" :key="item" class="skills__chip">
              <span class="skills__spark" aria-hidden="true"></span>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section--sunken {
  background: var(--bg-sunken);
}

.skills {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 2rem;
}

.skills__label {
  font-family: var(--font-sans);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-faint);
  margin-bottom: 1rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid var(--border);
}

.skills__list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.skills__chip {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.65rem 0.9rem;
  border-radius: var(--radius);
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  font-size: 0.95rem;
  font-weight: 500;
  transition: transform 0.3s var(--spring-back), border-color 0.3s var(--spring);
}

.skills__chip:hover {
  transform: translateX(5px);
  border-color: var(--accent);
}

.skills__spark {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--gradient);
  flex-shrink: 0;
}
</style>
