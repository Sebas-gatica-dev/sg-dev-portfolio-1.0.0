import { projects } from '../../resources/projects.js'

export function renderProjects(){


 
    return `
    
    <div class="container mx-auto p-4">
      <h1 class="text-3xl text-white">Proyectos</h1>
      <table class="table-auto w-full mt-4">
        <thead>
          <tr class="bg-gray-800">
            <th class="px-4 py-2"></th>
            <th class="px-4 py-2">Nombre</th>
            <th class="px-4 py-2">Descripcion</th>
            <th class="px-4 py-2">Tags</th>
          </tr>
        </thead>
        <tbody>
           <tr> 
          
            <td class="border px-4 py-2">Proyecto 1</td>
            <td class="border px-4 py-2">proyecto 2</td>
            <td class="border px-4 py-2">Proyecto 3</td>
          </tr>
        </tbody>
      </table>
    </div>
    `
}


export { projects };