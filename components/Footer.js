export function renderFooter(){
    return `
       <section class="py-10 bg-black">
    <div class="px-10 mx-auto max-w-7xl">
        <div class="flex flex-col items-center md:flex-row md:justify-between">
            <a href="#_" class=" p-6 flex items-center justify-center w-10 h-10 mr-3 rounded-lg mb-7 bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-500 rounded-xxl">
                <span class="text-white text-xs m-2 font-bold">Sg.dev</span>
            </a>

            <div class="flex flex-row justify-center mb-4 -ml-4 -mr-4"> 
            
            <a href="#" class="p-4 rounded-full h-4 w-4"> <img  src="https://www.svgrepo.com/show/439171/github.svg" /> </a>
                    
            <a href="#" class="p-4 text-gray-700 hover:text-gray-400"> <svg class="fill-current" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <circle cx="12.145" cy="3.892" r="1"></circle>
                            <path d="M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"></path>
                            <path d="M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z"></path>
                        </g>
                    </svg> 
                    
            </a>

            <i class="fa-brands fa-x-twitter"></i>
            
            
            
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


