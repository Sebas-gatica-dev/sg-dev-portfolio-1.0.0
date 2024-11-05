import Alpine from 'alpinejs';
import { renderHeader } from './components/Header.js';
import { renderHero } from './components/Hero.js';
import { renderHero2 } from './components/Hero-2.js';
import { renderHero3 } from './components/Hero-3.js';
import { renderFooter } from './components/Footer.js';
import { renderProducts } from './components/Products/Products.js';
import { renderContact } from './components/Contact/Contact.js';

window.Alpine = Alpine;
Alpine.start();
AOS.init();

// Manejador de rutas
function router() {
  const hash = window.location.hash || '#/'; // Por defecto carga la página de inicio
  const app = document.querySelector('#app');

  switch (hash) {
    case '#/projects':
      app.innerHTML = `
        <section class="overflow-hidden relative h-auto bg-black">
          ${renderHeader()}
          ${renderProducts()} 
          ${renderFooter()}
        </section>
      `;
      break;

    case '#/components':
      app.innerHTML = `
        <section class="overflow-hidden relative h-auto bg-black">
          ${renderHeader()}
          ${renderProducts()} 
          ${renderFooter()}
        </section>
      `;
      break;

    case '#/contact':
      app.innerHTML = `
        <section class="overflow-hidden relative h-auto bg-black">
          ${renderHeader()}
          ${renderContact()} 
          ${renderFooter()}
        </section>
      `;
      break;

    case '#/products':
      app.innerHTML = `
        <section class="overflow-hidden relative h-auto bg-black">
          ${renderHeader()}
          ${renderProducts()} 
          ${renderFooter()}
        </section>
      `;
      break;

    case '#/getStarted':
      app.innerHTML = `
        <section class="overflow-hidden relative h-auto bg-black">
          ${renderHeader()}
          ${renderProducts()} 
          ${renderFooter()}
        </section>
      `;
      break;

    default:
      // Página de inicio (Welcome)
      app.innerHTML = `
        <section class="overflow-hidden relative h-auto bg-black">
          <div class="lg:p-8 xl:max-w-7xl mx-auto">
            <div data-aos="fade-left" data-aos-duration="1000" style="background-image: radial-gradient(140% 107.13% at 50% 10%, transparent 37.41%, #63e 69.27%, #fff 100%);" class="rounded-2xl lg:rounded-[3rem] overflow-hidden relative">
              ${renderHeader()}
              ${renderHero()}
            </div>
            <div  class="mt-10 rounded-2xl lg:rounded-[3rem] overflow-hidden relative" style="background-image: radial-gradient(140% 107.13% at 50% 10%, transparent 37.41%, #63e 69.27%, #fff 100%);">
              ${renderHero2()}
            </div>
            <div class="mt-10 rounded-2xl lg:rounded-[3rem] overflow-hidden relative" style="background-image: radial-gradient(140% 107.13% at 50% 10%, transparent 37.41%, #63e 69.27%, #fff 100%);">
              ${renderHero3()}
            </div>
          </div>
        </section>
        ${renderFooter()}
      `;
      break;
  }

  // Re-inicializa completamente AOS después de actualizar el contenido del DOM
  AOS.init();  // Reinicializa AOS para detectar y aplicar animaciones a los nuevos elementos
}

// Llamar al router cuando se carga la página o se cambia el hash
window.addEventListener('hashchange', router);
window.addEventListener('load', router);
