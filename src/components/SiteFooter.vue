<script setup>
import { profile } from '../data/resume.js'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container container--wide footer__inner">
      <p class="footer__made">Built by {{ profile.name }}</p>
      <p class="footer__meta">
        © {{ year }} · Cagayan de Oro, Philippines ·
        <a href="#top" class="link-underline">Back to top ↑</a>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  background: var(--bg-sunken);
  padding-block: 2.5rem;
}

.footer__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.footer__made,
.footer__meta {
  font-size: 0.85rem;
  color: var(--text-faint);
}
</style>
