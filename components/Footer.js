export function renderFooter(){
    return `
       <section class="py-10 bg-black">
    <div class="px-10 mx-auto max-w-7xl">
        <div class="flex flex-col items-center md:flex-row md:justify-between">
            <a href="#_" class=" p-6 flex items-center justify-center w-10 h-10 mr-3 rounded-lg mb-7 bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-500 rounded-xxl">
                <span class="text-white text-xs m-2 font-bold">Sg.dev</span>
            </a>

            <div class="flex flex-row justify-center mb-4 -ml-4 -mr-4"> 
            
            <a href="https://github.com/Sebas-gatica-dev" target="_blank" class="p-4 text-gray-700 hover:text-gray-400 h-4 w-4"> 
                <i class="fa-brands fa-github"></i>
            </a>
                    
            <a href="https://www.linkedin.com/in/sebastian-gatica-dev/" target="_blank" class="p-4 text-gray-700 hover:text-gray-400"> 
                <i class="fa-brands fa-linkedin"></i>
            </a>

        
            
            
            </div>
        </div>
        <div class="flex flex-col justify-between text-center md:flex-row">
            <p class="order-last text-sm leading-tight text-gray-500 md:order-first"> Built by Sebastián Gatica Developer. </p>
            <ul class="flex flex-row justify-center pb-3 -ml-4 -mr-4 text-sm">
                <li> <a href="#/projects" class="px-4 text-gray-500 hover:text-white">Projects</a> </li>
                <li> <a href="#/components" class="px-4 text-gray-500 hover:text-white">Features</a> </li>
                <li> <a href="#/contact" class="px-4 text-gray-500 hover:text-white">Contact</a> </li>
                <li> <a href="#/products" class="px-4 text-gray-500 hover:text-white">Products</a></li>
            </ul>
        </div>
    </div>
</section>

    `;
}


