

export function renderJavaStack() {
    return `
         <div class="p-8">
        <h1 class="mb-4 text-3xl text-white">Habilidades en Java</h1>
        <p class="mb-4 text-white">Estos componentes open source son desarrollados con AlpineJS y TailwindCSS.</p>
        <span>Si sos un desarrollador y te gustaria utilizar con alguno de estos componentes, te invitamos a hacerlo.</span>
        
           <div x-data="{ 
        activeAccordion: '', 
        setActiveAccordion(id) { 
            this.activeAccordion = (this.activeAccordion == id) ? '' : id 
        } 
    }" class="relative w-full mx-auto overflow-hidden text-sm text-white font-normal bg-gray-700 border border-gray-600 divide-y divide-gray-600 rounded-md">

    <div x-data="{ id: $id('accordion') }" :class="{ 'border-neutral-200/60 text-gray-200' : activeAccordion==id, 'border-transparent text-white hover:text-gray-200' : activeAccordion!=id }" class="duration-200 ease-out relative w-full mx-auto overflow-hidden text-sm text-white font-normal bg-gray-700 border border-gray-600 divide-y divide-gray-600 rounded-md" x-cloak>
        <button @click="setActiveAccordion(id)" class="flex items-center justify-between w-full px-5 py-4 font-semibold text-left select-none">
            <span>What is Pines?</span>
            <div :class="{ 'rotate-90': activeAccordion==id }" class="relative flex items-center justify-center w-2.5 h-2.5 duration-300 ease-out">
                <div class="absolute w-0.5 h-full bg-gray-300 group-hover:bg-neutral-800 rounded-full"></div>
                <div :class="{ 'rotate-90': activeAccordion==id }" class="absolute w-full h-0.5 ease duration-500 bg-gray-300 group-hover:bg-neutral-800 rounded-full"></div>
            </div>
        </button>
        <div x-show="activeAccordion==id"  x-transition:enter="transition ease-out duration-200"
           x-transition:enter-start="opacity-0 transform translate-y-4"
           x-transition:enter-end="opacity-100 transform translate-y-0"
           x-transition:leave="transition ease-in duration-150"
           x-transition:leave-start="opacity-100 transform translate-y-0"
           x-transition:leave-end="opacity-0 transform translate-y-4"
           x-cloak>
            <div class="p-5 pt-0 opacity-70">
                Pines is a UI library built for AlpineJS and TailwindCSS.
            </div>
        </div>
    </div>
    <div x-data="{ id: $id('accordion') }" :class="{ 'border-neutral-200/60 text-white' : activeAccordion==id, 'border-transparent text-white hover:text-gray-200' : activeAccordion!=id }" class="duration-200 ease-out relative w-full mx-auto overflow-hidden text-sm text-white font-normal bg-gray-700 border border-gray-600 divide-y divide-gray-600 rounded-md" x-cloak>
        <button @click="setActiveAccordion(id)" class="flex items-center justify-between w-full px-5 py-4 font-semibold text-left select-none">
            <span>How do I install Pines?</span>
            <div :class="{ 'rotate-90': activeAccordion==id }" class="relative flex items-center justify-center w-2.5 h-2.5 duration-300 ease-out">
                <div class="absolute w-0.5 h-full bg-gray-300 group-hover:bg-neutral-800 rounded-full"></div>
                <div :class="{ 'rotate-90': activeAccordion==id }" class="absolute w-full h-0.5 ease duration-500 bg-gray-300 group-hover:bg-neutral-800 rounded-full"></div>
            </div>
        </button>
        <div x-show="activeAccordion==id"  x-transition:enter="transition ease-out duration-200"
           x-transition:enter-start="opacity-0 transform translate-y-4"
           x-transition:enter-end="opacity-100 transform translate-y-0"
           x-transition:leave="transition ease-in duration-150"
           x-transition:leave-start="opacity-100 transform translate-y-0"
           x-transition:leave-end="opacity-0 transform translate-y-4"
           x-cloak>
            <div class="p-5 pt-0 opacity-70">
                Add AlpineJS and TailwindCSS to your page and then copy and paste any of these elements into your project.
            </div>
        </div>
    </div>
    <div x-data="{ id: $id('accordion') }" :class="{ 'border-neutral-200/60 text-gray-200' : activeAccordion==id, 'border-transparent text-white hover:text-gray-200' : activeAccordion!=id }" class="duration-200 ease-out relative w-full mx-auto overflow-hidden text-sm text-white font-normal bg-gray-700 border border-gray-600 divide-y divide-gray-600 rounded-md" x-cloak>
        <button @click="setActiveAccordion(id)" class="flex items-center justify-between w-full px-5 py-4 font-semibold text-left select-none">
            <span>Can I use Pines with other libraries or frameworks?</span>
            <div :class="{ 'rotate-90': activeAccordion==id }" class="relative flex items-center justify-center w-2.5 h-2.5 duration-300 ease-out">
                <div class="absolute w-0.5 h-full bg-gray-300 group-hover:bg-neutral-800 rounded-full"></div>
                <div :class="{ 'rotate-90': activeAccordion==id }" class="absolute w-full h-0.5 ease duration-500 bg-gray-300 group-hover:bg-neutral-800 rounded-full"></div>
            </div>
        </button>
        <div x-show="activeAccordion==id"  x-transition:enter="transition ease-out duration-200"
           x-transition:enter-start="opacity-0 transform translate-y-4"
           x-transition:enter-end="opacity-100 transform translate-y-0"
           x-transition:leave="transition ease-in duration-150"
           x-transition:leave-start="opacity-100 transform translate-y-0"
           x-transition:leave-end="opacity-0 transform translate-y-4"
           x-cloak>
            <div class="text-white p-5 pt-0 opacity-70">
                Absolutely! Pines works with any other library or framework. Pines works especially well with the TALL stack.
            </div>
        </div>
    </div>
</div>
  
  
  
      </div>












    
      `;
  }
  