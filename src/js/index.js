import screenGRABorder from './components/recorder';
import ThemeToggler from './components/themeToggler';
import { handleMobileUsers } from './utils/handleMobileUsers';
import { initializeUIEnhancements } from './utils/uiEnhancements';

window.addEventListener('load', () => {
  handleMobileUsers();

  // Inicializar mejoras de UI/UX después de que cargue la página
  setTimeout(() => {
    initializeUIEnhancements();
  }, 100);
});

const screenGRAB = {};

// Instancias
screenGRAB.recorder = screenGRABorder.getInstance();
screenGRAB.theme = ThemeToggler.getInstance();

// Inicialización
screenGRAB.recorder.init();
screenGRAB.theme.init();

// Añadir smooth scroll para mejor UX
document.documentElement.style.scrollBehavior = 'smooth';

// Añadir clase para detectar si JavaScript está habilitado
document.documentElement.classList.add('js-enabled');
