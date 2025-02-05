export function renderPythonStack() {
    return `
      <div class="p-8">
        <!-- Main Title -->
        <h1 class="mb-4 text-3xl text-white underline underline-offset-3 decoration-double decoration-2 decoration-gray-800">
          Python and Machine Learning Skills
        </h1>

        <!-- Brief Introduction -->
        <p class="mb-4 text-white">
          Developing advanced solutions using Python, MLOps, and modern Machine Learning tools.
        </p>

        <!-- Accordion with Details -->
        <div x-data="{ 
            activeAccordion: '', 
            setActiveAccordion(id) { 
                this.activeAccordion = (this.activeAccordion == id) ? '' : id 
            } 
        }" class="relative w-full mx-auto overflow-hidden text-sm text-white font-normal bg-gray-700 border border-gray-600 divide-y divide-gray-600 rounded-md">

          <!-- Section 1: Python and Essential Libraries -->
          <div x-data="{ id: $id('accordion-python') }" class="duration-200 ease-out relative w-full mx-auto overflow-hidden text-sm text-white font-normal bg-gray-700 border border-gray-600 divide-y divide-gray-600 rounded-md" x-cloak>
            <button @click="setActiveAccordion(id)" class="flex items-center justify-between w-full px-5 py-4 font-semibold text-left select-none">
              <div class="flex gap-x-2">
                <span>Python and Libraries</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <div :class="{ 'rotate-90': activeAccordion==id }" class="relative flex items-center justify-center w-2.5 h-2.5 duration-300 ease-out">
                >
              </div>
            </button>
            <div x-show="activeAccordion==id" x-transition:enter="transition ease-out duration-200"
                 x-transition:enter-start="opacity-0 transform translate-y-4"
                 x-transition:enter-end="opacity-100 transform translate-y-0"
                 x-transition:leave="transition ease-in duration-150"
                 x-transition:leave-start="opacity-100 transform translate-y-0"
                 x-transition:leave-end="opacity-0 transform translate-y-4"
                 x-cloak>
              <div class="p-5 pt-0 opacity-70">
                <ul class="list-disc pl-5 mt-4">
                  <li>Experience in developing scripts and applications in Python.</li>
                  <li> Intermediate knowledge of libraries such as:
                    <ul class="list-disc pl-5">
                      <li><strong>Selenium</strong>: Web browser automation.</li>
                      <li><strong>BeautifulSoup (bs4)</strong>: Web scraping and HTML/XML parsing.</li>
                      <li><strong>Requests</strong>: HTTP request handling.</li>
                      <li><strong>Flask</strong>: RESTful API and web application creation.</li>
                    </ul>
                  </li>
                  <li>Experience integrating Python with databases using SQLAlchemy.</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Section 2: MLOps and Machine Learning -->
          <div x-data="{ id: $id('accordion-mlops') }" class="duration-200 ease-out relative w-full mx-auto overflow-hidden text-sm text-white font-normal bg-gray-700 border border-gray-600 divide-y divide-gray-600 rounded-md" x-cloak>
            <button @click="setActiveAccordion(id)" class="flex items-center justify-between w-full px-5 p-4 font-semibold text-left select-none">
              <div class="flex gap-x-2">
                <span>MLOps and Machine Learning</span>
                <span class="mt-1 mr-8 lg:mt-0 lg:mr-6 w-8 h-8"> <i class="fa-solid fa-brain"></i></span>
              </div>
              <div :class="{ 'rotate-90': activeAccordion==id }" class="relative flex items-center justify-center w-2.5 h-2.5 duration-300 ease-out">
                >
              </div>
            </button>
            <div x-show="activeAccordion==id" x-transition:enter="transition ease-out duration-200"
                 x-transition:enter-start="opacity-0 transform translate-y-4"
                 x-transition:enter-end="opacity-100 transform translate-y-0"
                 x-transition:leave="transition ease-in duration-150"
                 x-transition:leave-start="opacity-100 transform translate-y-0"
                 x-transition:leave-end="opacity-0 transform translate-y-4"
                 x-cloak>
              <div class="p-5 pt-0 opacity-70">
                <ul class="list-disc pl-5 mt-4">
                  <li>Implementation of Machine Learning pipelines using tools like:
                    <ul class="list-disc pl-5">
                      <li><strong>Airflow</strong>: Workflow orchestration.</li>
                      <li><strong>MLflow</strong>: ML model lifecycle management.</li>
                      <li><strong>DBT</strong>: Data transformation.</li>
                    </ul>
                  </li>
                  <li>Optimization of ML models for improved latency, memory, and performance.</li>
                  <li>Deployment of ML models in production following MLOps best practices.</li>
                  <li>Continuous monitoring and testing of models in production.</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Section 3: Modern Data Tools -->
          <div x-data="{ id: $id('accordion-modern-data-stack') }" class="duration-200 ease-out relative w-full mx-auto overflow-hidden text-sm text-white font-normal bg-gray-700 border border-gray-600 divide-y divide-gray-600 rounded-md" x-cloak>
            <button @click="setActiveAccordion(id)" class="flex items-center justify-between w-full px-5 py-4 font-semibold text-left select-none">
              <div class="flex gap-x-2">
                <span>Modern Data Tools</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
              <div :class="{ 'rotate-90': activeAccordion==id }" class="relative flex items-center justify-center w-2.5 h-2.5 duration-300 ease-out">
                >
              </div>
            </button>
            <div x-show="activeAccordion==id" x-transition:enter="transition ease-out duration-200"
                 x-transition:enter-start="opacity-0 transform translate-y-4"
                 x-transition:enter-end="opacity-100 transform translate-y-0"
                 x-transition:leave="transition ease-in duration-150"
                 x-transition:leave-start="opacity-100 transform translate-y-0"
                 x-transition:leave-end="opacity-0 transform translate-y-4"
                 x-cloak>
              <div class="p-5 pt-0 opacity-70">
                <ul class="list-disc pl-5 mt-4">
                  <li>Familiarity with modern data tools such as:
                    <ul class="list-disc pl-5">
                      <li><strong>Kafka</strong>: Real-time data streaming.</li>
                      <li><strong>DuckDB</strong>: Lightweight analytical database engine.</li>
                      <li><strong>Apache Pinot</strong>: Real-time analytics platform.</li>
                    </ul>
                  </li>
                  <li>Experience with cloud AI services:
                    <ul class="list-disc pl-5">
                      <li><strong>AWS Sagemaker</strong>: Building and deploying ML models.</li>
                      <li><strong>GCP Vertex AI</strong>: Training and managing ML models.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
}