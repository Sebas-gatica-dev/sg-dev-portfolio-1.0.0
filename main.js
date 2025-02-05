import Alpine from 'alpinejs';
import { renderHeader } from './components/Header.js';
import { renderHero } from './components/Hero.js';
import { renderHero2 } from './components/renderHero2.js';
import { renderHero3 } from './components/renderHero3.js';
import { renderFooter } from './components/Footer.js';
import { renderTallStack } from './components/Knowledge/renderTallStack.js';
import { renderContact } from './components/Contact/Contact.js';
import { renderJsStack } from './components/Knowledge/renderJsStack.js';
import { renderJavaStack } from './components/Knowledge/renderJavaStack.js';
import { renderPythonStack } from './components/Knowledge/renderPythonStack.js';
import { renderProjects} from './components/Components/renderProjects.js';
import Atropos from 'atropos';



window.Alpine = Alpine;
Alpine.start();
AOS.init();





// Manejador de rutas
function router() {
  const hash = window.location.hash || '#/';
  const app = document.querySelector('#app');

  switch (hash) {
    case '#/projects':
      app.innerHTML = `
        <section class="overflow-hidden relative h-auto bg-black">
          ${renderProjects()} 
          ${renderFooter()}
        </section>
      `;
      break;

    case '#/components':
      app.innerHTML = `
        <section class="overflow-hidden relative h-auto bg-black">
          ${renderTallStack()} 
          ${renderPythonStack()}
          ${renderJsStack()}
          ${renderJavaStack()}
          ${renderFooter()}
        </section>
      `;
      break;

    case '#/contact':
      app.innerHTML = `
        <section class="overflow-hidden relative h-auto mt-0 bg-black">
          ${renderContact()} 
          ${renderFooter()}
        </section>
      `;
      break;

    case '#/products':
      app.innerHTML = `
        <section class="overflow-hidden relative h-auto bg-black">
          ${renderProducts()} 
          ${renderFooter()}
        </section>
      `;
      break;

    case '#/getStarted':
      app.innerHTML = `
        <section class="overflow-hidden relative h-auto bg-black">
          ${renderProjects()} 
          ${renderFooter()}
        </section>
      `;
      break;

    default:
      app.innerHTML = `
        <section class="overflow-hidden relative h-auto bg-black">
          <div class="lg:p-8 xl:max-w-7xl mx-auto">
            <div data-aos="fade-left" data-aos-duration="1000" style="background-image: radial-gradient(140% 107.13% at 50% 10%, transparent 37.41%, #63e 69.27%, #fff 100%);" class="rounded-2xl lg:rounded-[3rem] overflow-hidden relative">
              ${renderHero()}
            </div>
            <div class="contenedor derecha mt-10 rounded-2xl lg:rounded-[3rem] overflow-hidden relative" style="background-image: radial-gradient(140% 107.13% at 50% 10%, transparent 37.41%, #63e 69.27%, #fff 100%);">
              ${renderHero2()}
            </div>
            <div class="contenedor izquierda mt-10 rounded-2xl lg:rounded-[3rem] overflow-hidden relative" style="background-image: radial-gradient(140% 107.13% at 50% 10%, transparent 37.41%, #63e 69.27%, #fff 100%);">
              ${renderHero3()}
            </div>
          </div>
        </section>
        ${renderFooter()}
      `;
      break;
  }



  // Re-inicializa Alpine.js después de cambiar el DOM
  // Alpine.initTree(document.body);

  // Re-inicializa AOS
  AOS.init();
}


// Llamar al router cuando se carga la página o se cambia el hash
window.addEventListener('hashchange', router);
window.addEventListener('load', router);
