export function renderHero3(){
    return `
       <div class="relative items-center h-[30rem] w-full bg-cover bg-center bg-no-repeat" style="background-image: url('/computer-img-1.jpg');">
           <div class="relative z-10 flex items-center justify-center w-full h-full px-5 mx-auto lg:px-24">
               <div class="text-center lg:text-left max-w-full">
                   <p class="text-white font-light text-lg lg:text-xl tracking-tight leading-7 opacity-90">
                       <!-- Texto animado -->
                       <div 
                           x-data="{
                               text: '',
                               textArray : [ 'I started following a passion...', 'Programming that makes a difference', 'Making a better reality.'],
                               textIndex: 0,
                               charIndex: 0,
                               typeSpeed: 42,
                               cursorSpeed: 900,
                               pauseEnd: 1000,
                               pauseStart: 20,
                               direction: 'forward',
                           }" 
                           x-init="$nextTick(() => {
                               let typingInterval = setInterval(startTyping, $data.typeSpeed);
                               
                               function startTyping(){
                                   let current = $data.textArray[ $data.textIndex ];
                                   if($data.charIndex > current.length){
                                       $data.direction = 'backward';
                                       clearInterval(typingInterval);
                                       
                                       setTimeout(function(){
                                           typingInterval = setInterval(startTyping, $data.typeSpeed);
                                       }, $data.pauseEnd);
                                   }   
                                       
                                   $data.text = current.substring(0, $data.charIndex);
                                   
                                   if($data.direction == 'forward') {
                                       $data.charIndex += 1;
                                   } else {
                                       if($data.charIndex == 0) {
                                           $data.direction = 'forward';
                                           clearInterval(typingInterval);
                                           setTimeout(function(){
                                               $data.textIndex += 1;
                                               if($data.textIndex >= $data.textArray.length) {
                                                   $data.textIndex = 0;
                                               }
                                               typingInterval = setInterval(startTyping, $data.typeSpeed);
                                           }, $data.pauseStart);
                                       }
                                       $data.charIndex -= 1;
                                   }
                               }
                                           
                               setInterval(function(){
                                   if($refs.cursor.classList.contains('hidden')) {
                                       $refs.cursor.classList.remove('hidden');
                                   } else {
                                       $refs.cursor.classList.add('hidden');
                                   }
                               }, $data.cursorSpeed);
                           })"
                           class="flex items-center justify-center ml-10 text-center max-w-7xl">
                           <div class="relative flex items-center justify-center h-auto">
                               <p class="text-2xl text-white leading-tight" x-text="text"></p>
                               <span class="absolute right-0 w-2 -mr-2 bg-white h-3/4" x-ref="cursor"></span>
                           </div>
                       </div>
                   </p>
               </div>
           </div>
       </div>
    `;
}
