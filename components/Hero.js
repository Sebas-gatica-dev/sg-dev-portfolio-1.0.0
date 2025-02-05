export function renderHero() {
    return `
    <div class="items-center h-[30rem] relative w-full z-20 pt-40 pb-48 lg:px-24 max-w-7xl md:px-12 mx-auto px-5">
        <div class="items-center w-full relative col-span-8 gap-12 z-30 -translate-y-5 lg:inline-flex m-auto">
            <div class="max-w-full lg:text-left sm:text-center">
                <h1 class="font-semibold pb-2 md:text-5xl xl:text-8xl xl:leading-none xl:tracking-tightest tracking-tight text-3xl inline-block bg-clip-text bg-gradient-to-r text-transparent from-gray-300 via-white to-gray-500">Sebastián Gatica Developer </h1>
                <p class="text-white font-light lg:text-xl tracking-tight lg:leading-7 opacity-90 max-w-xl sm:mx-auto lg:mx-0 mt-4 text-lg">  <div 
    x-data="{
        text: '',
        textArray : [ 'Welcome to mi Portfolio.', 'Here you can know more about my habilities.', 'My experience and my projects.'],
        textIndex: 0,
        charIndex: 0,
        typeSpeed: 52,
        cursorSpeed: 950,
        pauseEnd: 1000,
        pauseStart: 20,
        direction: 'forward',
    }" 
    x-init="$nextTick(() => {
        let typingInterval = setInterval(startTyping, $data.typeSpeed);
    
        function startTyping(){
            let current = $data.textArray[ $data.textIndex ];
            
            // check to see if we hit the end of the string
            if($data.charIndex > current.length){
                    $data.direction = 'backward';
                    clearInterval(typingInterval);
                    
                    setTimeout(function(){
                        typingInterval = setInterval(startTyping, $data.typeSpeed);
                    }, $data.pauseEnd);
            }   
                
            $data.text = current.substring(0, $data.charIndex);
            
            if($data.direction == 'forward')
            {
                $data.charIndex += 1;
            } 
            else 
            {
                if($data.charIndex == 0)
                {
                    $data.direction = 'forward';
                    clearInterval(typingInterval);
                    setTimeout(function(){
                        $data.textIndex += 1;
                        if($data.textIndex >= $data.textArray.length)
                        {
                            $data.textIndex = 0;
                        }
                        typingInterval = setInterval(startTyping, $data.typeSpeed);
                    }, $data.pauseStart);
                }
                $data.charIndex -= 1;
            }
        }
                    
        setInterval(function(){
            if($refs.cursor.classList.contains('hidden'))
            {
                $refs.cursor.classList.remove('hidden');
            } 
            else 
            {
                $refs.cursor.classList.add('hidden');
            }
        }, $data.cursorSpeed);

    })"
    class="relative flex items-center justify-center mx-auto text-center max-w-7xl">
    <div class="absolute left-0 top-4">
       <div class="relative flex items-center justify-center h-auto">
        <p class="text-2xl text-white  leading-tight" x-text="text"></p>
        <span class="absolute right-0 w-2 -mr-2 bg-white h-3/4" x-ref="cursor"></span>
        </div>
    </div>
 
</div>

</p>
            </div>
        </div>
        <img src="https://cdn.devdojo.com/images/february2023/header-svg.svg" class="h-96 absolute right-0 z-30 bottom-0 opacity-0 w-auto" />
        <div class="bg-gradient-to-r from-transparent via-trasnparent w-1/2 h-full opacity-20 right-0 to-black absolute bottom-0 z-20"></div>
        <img alt="hero" class="w-full absolute bottom-0 right-0 z-0 mx-auto translate-y-20 md:translate-y-56 scale-110 lg:-translate-x-10 drop-shadow-xl opacity-100 lg:ml-auto" src="https://cdn.devdojo.com/images/february2023/liquid-img.png" />
      
    </div>`;
}
