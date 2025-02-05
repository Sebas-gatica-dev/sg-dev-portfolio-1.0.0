export function renderHero2() {
    return `
      <div class="bg-black items-center h-[30rem] rounded rounded-md flex relative w-full z-20 pt-10 pb-48 lg:px-24 max-w-7xl md:px-12 mx-auto px-5">
        <!-- Contenedor principal -->
        <div class="relative w-full z-30 -translate-y-5 lg:inline-flex m-auto">
          <div class="max-w-full lg:text-left sm:text-center">
            <p class="mt-10 text-white font-light lg:text-xl tracking-tight lg:leading-7 opacity-90 max-w-xl sm:mx-auto lg:mx-0 mt-4 text-lg">
              <div class="flex items-center justify-center mx-auto text-center max-w-7xl">
                <div class="relative flex content-end md:items-center items-center justify-center h-auto">
                  <p class="text-xs xs:text-sm sm:text-base md:text-3xl lg:text-2xl text-white leading-tight">
                    There are doors that if you cross them... There is no turning back. <br />
                    Programming that makes a difference, making a better reality.
                  </p>
                </div>
              </div>
            </p>
          </div>
        </div>
  
        <!-- Imagen decorativa -->
        <img src="https://cdn.devdojo.com/images/february2023/header-svg.svg" class="h-96 absolute right-0 z-30 top-0 opacity-0 w-auto" />
  
        <!-- Degradado de fondo -->
        <div class="bg-gradient-to-r from-transparent via-transparent w-1/2 h-full opacity-20 right-0 to-black absolute bottom-0 z-20"></div>
  
        <!-- Imagen principal -->
        <img 
          alt="hero" 
          class="w-full absolute bottom-0 right-0 z-0 mx-auto translate-y-20 md:translate-y-56 scale-110 lg:-translate-x-10 drop-shadow-xl opacity-100 lg:ml-auto border-4 border-black rounded-md object-cover" 
          src="https://cdn.devdojo.com/images/february2022/hero-bg-02.jpeg" 
        />
      </div>
    `;
  }