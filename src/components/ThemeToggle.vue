<script setup>
import { computed } from 'vue'
import { useTheme } from '../composables/useTheme.js'

const { theme, toggle } = useTheme()
const isDark = computed(() => theme.value === 'dark')
const label = computed(() =>
  isDark.value ? 'Switch to light theme' : 'Switch to dark theme',
)
</script>

<template>
  <button
    class="toggle"
    type="button"
    :aria-label="label"
    :title="label"
    :aria-pressed="isDark"
    @click="toggle"
  >
    <span class="toggle__track">
      <span class="toggle__thumb" :class="{ 'toggle__thumb--dark': isDark }">
        <svg
          v-if="isDark"
          viewBox="0 0 24 24"
          width="14"
          height="14"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-8.54-8.54C12.92 3.04 12.46 3 12 3Z"
          />
        </svg>
        <svg v-else viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
          <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
            <path
              d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
            />
          </g>
        </svg>
      </span>
    </span>
  </button>
</template>

<style scoped>
.toggle {
  --w: 58px;
  --h: 30px;
  --pad: 3px;
  width: var(--w);
  height: var(--h);
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 999px;
}

.toggle__track {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 999px;
  background: var(--bg-sunken);
  border: 1px solid var(--border-strong);
  position: relative;
  transition: background 0.4s var(--spring);
}

.toggle__thumb {
  position: absolute;
  top: var(--pad);
  left: var(--pad);
  width: calc(var(--h) - var(--pad) * 2 - 2px);
  height: calc(var(--h) - var(--pad) * 2 - 2px);
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--gradient);
  color: #fff;
  box-shadow: var(--shadow-sm);
  transition: transform 0.45s var(--spring-back);
}

.toggle__thumb--dark {
  transform: translateX(calc(var(--w) - var(--h)));
}
</style>
