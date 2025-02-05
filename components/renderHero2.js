export function renderHero2() {
    return `
      <div 
        class="bg-black relative w-full h-[30rem] rounded-md overflow-hidden pt-10 pb-48 lg:px-24 max-w-7xl mx-auto px-5"
        style="
          background-image: url('https://cdn.devdojo.com/images/february2022/hero-bg-02.jpeg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        "
      >
        <!-- Texto visible en móviles -->
        <div class="block md:hidden relative z-30 text-center mt-10">
          <p class="text-xs sm:text-sm text-white font-light leading-tight">
            There are doors that if you cross them... <br /> There is no turning back. <br />
            Programming that makes a difference, making a better reality.
          </p>
        </div>

        <!-- Texto arriba a la izquierda (visible en md y lg) -->
        <div class="hidden md:block absolute z-30 top-10 left-10 lg:top-16 lg:left-16">
          <p class="w-80 text-sm md:text-xl lg:text-2xl text-white font-light leading-tight">
            There are doors that if you cross them... there is no turning back.
          </p>
        </div>

        <!-- Texto abajo a la derecha (visible en md y lg) -->
        <div class="hidden md:block absolute z-30 bottom-10 right-10 lg:bottom-16 lg:right-16">
          <p class="w-80 text-sm md:text-xl lg:text-2xl text-white font-light leading-tight">
            Technology makes every business or project grow exponentially.
          </p>
        </div>

        <!-- Degradado de fondo -->
      </div>
    `;
}
