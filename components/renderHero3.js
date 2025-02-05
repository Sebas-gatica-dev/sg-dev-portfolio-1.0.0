export function renderHero3() {
    return `
       <div class="bg-black border border-collapse border-black relative items-center h-[30rem] w-full bg-cover bg-center bg-no-repeat" style="background-image: url('/computer-img-1.jpg');">
           <div class="relative z-10 flex items-center  w-full h-full px-5 mx-auto lg:px-24">
               <div class="absolute top-10 left-0  md:relative text-start lg:text-left max-w-full">
                   <p class="text-white font-light text-xs md:text-lg lg:text-xl tracking-tight leading-7 opacity-90">
                       <!-- Texto animado -->
                       <div 
                          x-data="{
                              text: '',
                              textArray: ['development.', 'maintenance.', 'support.'],
                              textIndex: 0,
                              charIndex: 0,
                              typeSpeed: 92,
                              cursorSpeed: 900,
                              pauseEnd: 1000, // Pausa al final antes de borrar
                              pauseStart: 300, // Pausa antes de empezar una nueva palabra
                              direction: 'forward', // Comienza escribiendo
                          }"
                          x-init="$nextTick(() => {
                              let typingInterval = setInterval(startTyping, $data.typeSpeed);
                              
                              function startTyping() {
                                  let current = $data.textArray[$data.textIndex];
                                  
                                  if ($data.direction === 'forward') {
                                      // Escribe caracter por caracter
                                      $data.text = current.substring(0, $data.charIndex);
                                      $data.charIndex += 1;
                                      if ($data.charIndex > current.length) {
                                          $data.direction = 'backward';
                                          clearInterval(typingInterval);
                                          setTimeout(() => {
                                              typingInterval = setInterval(startTyping, $data.typeSpeed);
                                          }, $data.pauseEnd);
                                      }
                                  } else {
                                      // Borra caracter por caracter
                                      $data.charIndex -= 1;
                                      $data.text = current.substring(0, $data.charIndex);
                                      if ($data.charIndex <= 0) {
                                          $data.direction = 'forward';
                                          clearInterval(typingInterval);
                                          setTimeout(() => {
                                              // Cambia a la siguiente palabra
                                              $data.textIndex = ($data.textIndex + 1) % $data.textArray.length;
                                              $data.charIndex = 0; // Reinicia el índice para escribir
                                              typingInterval = setInterval(startTyping, $data.typeSpeed);
                                          }, $data.pauseStart);
                                      }
                                  }
                              }
                              
                              // Cursor parpadeante
                              setInterval(() => {
                                  if ($refs.cursor.classList.contains('hidden')) {
                                      $refs.cursor.classList.remove('hidden');
                                  } else {
                                      $refs.cursor.classList.add('hidden');
                                  }
                              }, $data.cursorSpeed);
                          })"
                          class="flex items-start md:items-center md:justify-center ml-10 text-center max-w-7xl">
                           <div class="relative flex place-items-start md:items-center md:justify-center h-auto">
                               <span class="text-xs md:text-lg lg:text-2xl sm:text-sm text-white leading-tight">
                                    Thanks for coming, surely you will find, <br/> 
                                    <div class="flex relative ">
                                        <span class="text-xs md:text-lg lg:text-2xl sm:text-sm text-white leading-tight">
                                          what you are looking for 
                                        </span>
                                        <p class="inline-block text-xs md:text-lg lg:text-2xl sm:text-sm text-white leading-tight pl-2" x-text="text"></p>
                                        <!-- Cursor -->
                                        <span class="inline-block w-1 md:w-2 -mr-2 bg-white h-3 lg:h-6 hidden" x-ref="cursor"></span>
                                    </div>
                               </span>
                           </div>
                       </div>
                   </p>
               </div>
           </div>
       </div>
    `;
}