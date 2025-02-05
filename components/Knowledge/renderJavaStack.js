

export function renderJavaStack() {
    return `
         <div class="p-8">
        <h1 class="mb-4 text-3xl text-white underline underline-offset-3 decoration-double decoration-2 decoration-gray-800">Habilidades en Java</h1>
        <p class="mb-4 text-white ">Desarroll de Api Rest con Java SpringBoot.</p>
        <span>Conocimientos en framework SpringBoot.</span>
        
           <div x-data="{ 
        activeAccordion: '', 
        setActiveAccordion(id) { 
            this.activeAccordion = (this.activeAccordion == id) ? '' : id 
        } 
    }" class="relative w-full mx-auto overflow-hidden text-sm text-white font-normal bg-gray-700 border border-gray-600 divide-y divide-gray-600 rounded-md">

    <div x-data="{ id: $id('accordion-springboot') }"  class="duration-200 ease-out relative w-full mx-auto overflow-hidden text-sm text-white font-normal bg-gray-700 border border-gray-600 divide-y divide-gray-600 rounded-md" x-cloak>
        <button @click="setActiveAccordion(id)" class="flex items-center justify-between w-full px-5 py-4 font-semibold text-left select-none">
             <div class="flex gap-x-2">
                    <span class="text-white">SpringBoot</span>

        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 128 128">
            <path d="M116.452 6.643a59.104 59.104 0 01-6.837 12.136A64.249 64.249 0 0064.205-.026C28.984-.026 0 28.982 0 64.242a64.316 64.316 0 0019.945 46.562l2.368 2.1a64.22 64.22 0 0041.358 15.122c33.487 0 61.637-26.24 64.021-59.683 1.751-16.371-3.051-37.077-11.24-61.7zM29.067 111.17a5.5 5.5 0 01-4.269 2.034c-3.018 0-5.487-2.484-5.487-5.502 0-3.017 2.485-5.501 5.487-5.501 1.25 0 2.485.433 3.452 1.234 2.351 1.9 2.718 5.384.817 7.735zm87.119-19.238c-15.843 21.122-49.68 14.003-71.376 15.02 0 0-3.852.234-7.721.867 0 0 1.45-.617 3.335-1.334 15.226-5.301 22.43-6.335 31.685-11.086 17.427-8.869 34.654-28.274 38.24-48.463-6.637 19.422-26.75 36.11-45.077 42.895-12.557 4.635-35.238 9.136-35.238 9.136l-.917-.484c-15.442-7.518-15.91-40.977 12.157-51.78 12.291-4.735 24.048-2.134 37.323-5.302 14.175-3.367 30.568-14.004 37.238-27.874 7.471 22.19 16.46 56.932.35 78.405z" fill="#77bc1f"/>
        </svg>
        </div>
            <div :class="{ 'rotate-90': activeAccordion==id }" class="relative flex items-center justify-center w-2.5 h-2.5 duration-300 ease-out">
                <div class="absolute w-0.5 h-full bg-gray-300 group-hover:bg-gray-400 rounded-full"></div>
                <div :class="{ 'rotate-90': activeAccordion==id }" class="absolute w-full h-0.5 ease duration-500 bg-gray-300 group-hover:bg-gray-400 rounded-full"></div>
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
   
    <div x-data="{ id: $id('accordion-hibernate') }"  class="duration-200 ease-out relative w-full mx-auto overflow-hidden text-sm text-white font-normal bg-gray-700 border border-gray-600 divide-y divide-gray-600 rounded-md" x-cloak>
        <button @click="setActiveAccordion(id)" class="flex items-center justify-between w-full px-5 py-4 font-semibold text-left select-none">
            <div class="flex gap-x-2">
                <span>Hibernate</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 128 128">
                    <path fill="#59666c" d="m29.246 3.766 23.168 40.129-23.18 40.19-23.156-40.19Zm69.508 120.468L75.586 84.105l23.18-40.19 23.156 40.19Zm0 0"/>
                    <path fill="#bcae79" d="M75.594 3.766H29.258L52.43 43.898h46.35ZM52.406 124.23H98.75L75.594 84.102H29.219Zm0 0"/>
                </svg>
            </div>
          

            <div :class="{ 'rotate-90': activeAccordion==id }" class="relative flex items-center justify-center w-2.5 h-2.5 duration-300 ease-out">
                <div class="absolute w-0.5 h-full bg-gray-300 group-hover:bg-neutral-800 rounded-full"></div>
                <div :class="{ 'rotate-90': activeAccordion==id }" class="absolute w-full h-0.5 ease duration-500 bg-gray-300 group-hover:bg-gray-400 rounded-full"></div>
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
  