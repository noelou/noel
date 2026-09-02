<script setup>
import { about, education, languages } from '../data/resume.js'
import trailRun from '../assets/trail-run-2.jpg'
</script>

<template>
  <section id="about" class="section">
    <div class="container">
      <p class="section__eyebrow" v-reveal>About</p>
      <h2 class="section__title" v-reveal="60">
        A little more about how I work
      </h2>

      <div class="about__lead">
        <div class="about__intro" v-reveal="120">
          <p v-for="(line, i) in about.intro" :key="i">{{ line }}</p>
        </div>

        <figure class="about__photo" v-reveal="200">
          <img
            :src="trailRun"
            width="800"
            height="1200"
            loading="lazy"
            decoding="async"
            alt="Noel mid trail run, stepping through a green jungle stream in a Mapawa Trail Marathon jersey"
          />
          <figcaption>
            When I'm not shipping components, I'm somewhere on a trail. 🏃
          </figcaption>
        </figure>
      </div>

      <ul class="about__grid">
        <li
          v-for="(item, i) in about.focus"
          :key="item.title"
          class="about__card"
          v-reveal="150 + i * 90"
        >
          <span class="about__num">0{{ i + 1 }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.body }}</p>
        </li>
      </ul>

      <div class="about__meta" v-reveal="120">
        <div class="about__meta-block">
          <h3>Education</h3>
          <p class="about__meta-primary">{{ education.school }}</p>
          <p class="about__meta-secondary">
            {{ education.degree }} · {{ education.schoolLocation }}
          </p>
          <p class="about__meta-secondary">
            {{ education.start }} – {{ education.end }}
          </p>
        </div>
        <div class="about__meta-block">
          <h3>Languages</h3>
          <div class="about__langs">
            <span v-for="lang in languages" :key="lang" class="pill">{{
              lang
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__lead {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: start;
  gap: clamp(1.5rem, 5vw, 3.5rem);
}

.about__intro {
  font-size: 1.15rem;
  color: var(--text-muted);
  display: grid;
  gap: 1rem;
  align-content: start;
}

.about__photo {
  margin: 0;
  width: clamp(11rem, 24vw, 15rem);
  flex-shrink: 0;
}

.about__photo img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-md);
  transform: rotate(2deg);
  transition: transform 0.4s var(--spring-back);
}

.about__photo:hover img {
  transform: rotate(0);
}

.about__photo figcaption {
  margin-top: 0.9rem;
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 0.92rem;
  color: var(--text-faint);
  line-height: 1.5;
}

@media (max-width: 44rem) {
  .about__lead {
    grid-template-columns: 1fr;
  }
  .about__photo {
    width: min(15rem, 60vw);
  }
}

.about__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 1.25rem;
  margin-block: 3rem;
}

.about__card {
  padding: 1.6rem;
  border-radius: var(--radius-lg);
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
  transition: transform 0.35s var(--spring), box-shadow 0.35s var(--spring),
    border-color 0.35s var(--spring);
}

.about__card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--border-strong);
}

.about__num {
  font-family: var(--font-serif);
  font-size: 0.95rem;
  font-weight: 600;
  background: var(--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.about__card h3 {
  font-size: 1.2rem;
  margin: 0.5rem 0 0.6rem;
}

.about__card p {
  font-size: 0.98rem;
  color: var(--text-muted);
  margin: 0;
}

.about__meta {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 2rem;
  padding-top: 2.5rem;
  border-top: 1px solid var(--border);
}

.about__meta-block h3 {
  font-size: 0.82rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-faint);
  font-family: var(--font-sans);
  margin-bottom: 0.75rem;
}

.about__meta-primary {
  font-weight: 600;
  margin: 0;
}

.about__meta-secondary {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin: 0;
}

.about__langs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>
