

export function renderJsStack() {
    return `
         <div class="p-8">
        <h1 class="mb-4 text-3xl text-white">Habilidades en javascript</h1>
        <p class="mb-4 text-white">
        Ademas de utilizar js dentro del entorno de laravel a traves de AlpineJS, 
        tambien tengo experiencia desarrollando utilizando aplicaicones de js puro, React,
        y por otro lado poseo conocimeintos en framework Express para desarrollar api rest.
        </p>
        <span>Todando en cuenta que .</span>



        
          <div x-data="{ 
        activeAccordion: '', 
        setActiveAccordion(id) { 
            this.activeAccordion = (this.activeAccordion == id) ? '' : id 
        } 
    }" class="relative w-full mx-auto overflow-hidden text-sm text-white font-normal bg-gray-700 border border-gray-600 divide-y divide-gray-600 rounded-md">
    <div x-data="{ id: $id('accordion') }" :class="{ 'text-neutral-900': activeAccordion==id, 'text-neutral-600 hover:text-neutral-900': activeAccordion!=id }" class="cursor-pointer group">
        <button @click="setActiveAccordion(id)" class="flex items-center justify-between w-full p-4 pb-1 text-left select-none">
            <div class="flex gap-x-2">
                          <span class="text-white">AlpineJS</span>
                          <img class="w-6 h-6 " src="../public/alpinejs-logo-icon.svg" />
                      </div>
            <svg class="text-gray-300 w-5 h-5 duration-300 ease-out" :class="{ '-rotate-[45deg]': activeAccordion==id }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" /></svg>
        </button>
        <div x-show="activeAccordion==id" x-transition:enter="transition ease-out duration-200"
           x-transition:enter-start="opacity-0 transform translate-y-4"
           x-transition:enter-end="opacity-100 transform translate-y-0"
           x-transition:leave="transition ease-in duration-150"
           x-transition:leave-start="opacity-100 transform translate-y-0"
           x-transition:leave-end="opacity-0 transform translate-y-4"
           x-cloak>
            <div class=" text-gray-300 p-4 pt-2 opacity-70">
                Pines is a UI library built for AlpineJS and TailwindCSS.
            </div>
        </div>
    </div>
    <div x-data="{ id: $id('accordion') }" :class="{ 'text-neutral-900': activeAccordion==id, 'text-neutral-600 hover:text-neutral-900': activeAccordion!=id }" class="cursor-pointer group">
        <button @click="setActiveAccordion(id)" class="flex items-center justify-between w-full p-4 pb-1 text-left select-none">
            <div class="flex gap-x-2">
                          <span class="text-white">AlpineJS</span>
                          <img class="w-6 h-6 " src="../public/alpinejs-logo-icon.svg" />
                      </div>
            <svg class="text-gray-300 w-5 h-5 duration-300 ease-out" :class="{ '-rotate-[45deg]': activeAccordion==id }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" /></svg>
        </button>
        <div x-show="activeAccordion==id"  x-transition:enter="transition ease-out duration-200"
           x-transition:enter-start="opacity-0 transform translate-y-4"
           x-transition:enter-end="opacity-100 transform translate-y-0"
           x-transition:leave="transition ease-in duration-150"
           x-transition:leave-start="opacity-100 transform translate-y-0"
           x-transition:leave-end="opacity-0 transform translate-y-4"
           x-cloak>
            <div class=" text-gray-300 p-4 pt-2 opacity-70">
                Add AlpineJS and TailwindCSS to your page and then copy and paste any of these elements into your project.
            </div>
        </div>
    </div>
    <div x-data="{ id: $id('accordion') }" :class="{ 'text-neutral-900': activeAccordion==id, 'text-neutral-600 hover:text-neutral-900': activeAccordion!=id }" class="cursor-pointer group">
        <button @click="setActiveAccordion(id)" class="flex items-center justify-between w-full p-4 pb-1 text-left select-none">
             <div class="flex gap-x-2">
                          <span class="text-white">AlpineJS</span>
                          <img class="w-6 h-6 " src="../public/alpinejs-logo-icon.svg" />
                      </div>
            <svg class="text-gray-300 w-5 h-5 duration-300 ease-out" :class="{ '-rotate-[45deg]': activeAccordion==id }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" /></svg>
        </button>
        <div x-show="activeAccordion==id"  x-transition:enter="transition ease-out duration-200"
           x-transition:enter-start="opacity-0 transform translate-y-4"
           x-transition:enter-end="opacity-100 transform translate-y-0"
           x-transition:leave="transition ease-in duration-150"
           x-transition:leave-start="opacity-100 transform translate-y-0"
           x-transition:leave-end="opacity-0 transform translate-y-4"
           x-cloak>
            <div class=" text-gray-300 p-4 pt-2 opacity-70">
                Absolutely! Pines works with any other library or framework. Pines works especially well with the TALL stack.
            </div>
        </div>
    </div>
</div>
  




  
  
      </div>

















     
      `;
  }
  