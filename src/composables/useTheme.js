import { ref, watch } from 'vue'

// Theme is applied to <html data-theme> before paint by an inline script in
// index.html. This composable just keeps a reactive mirror and persists changes.

function currentTheme() {
  if (typeof document === 'undefined') return 'light'
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

const theme = ref(currentTheme())

watch(theme, (value) => {
  document.documentElement.dataset.theme = value
  try {
    localStorage.setItem('theme', value)
  } catch (e) {
    /* private mode / storage disabled — non-fatal */
  }
})

export function useTheme() {
  const toggle = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }
  return { theme, toggle }
}
