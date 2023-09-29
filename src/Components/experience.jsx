import React from 'react'

const Experience = () => {
    return (

        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">Minha experiência</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">A seguir, apresento minhas experiências profissionais e acadêmicas em destaque.</p>
                </div>
                <div class="flex flex-wrap -m-4">
                    {/* <div class="p-4 lg:w-1/2">
                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="Furukawa" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="./src/assets/furukawa.png" />
                            <div class="flex-grow sm:pl-8">
                                <h2 class="title-font font-medium text-lg text-gray-900">Furukawa Electric Latan</h2>
                                <h3 class="text-gray-500 mb-3">2021 - atual</h3>
                                <p class="mb-4">Técnico em Eletrônica</p>

                            </div>
                        </div>
                    </div> */}
                    <div class="p-4 lg:w-1/2">
                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="FAI" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="./src/assets/furukawa.png" />
                            <div class="flex-grow sm:pl-8">
                                <h2 class="title-font font-medium text-lg text-gray-900">Furukawa Industrial Optoeletrônica Ltda</h2>
                                <h3 class="text-gray-500 mb-3">2022 - 2025 (previsto)</h3>
                                <p class="mb-4">Sistemas de Informação</p>

                            </div>
                        </div>
                    </div>

                    <div class="p-4 lg:w-1/2">
                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="FAI" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="./src/assets/FAI.png" />
                            <div class="flex-grow sm:pl-8">
                                <h2 class="title-font font-medium text-lg text-gray-900">FAI Centro de Ensino Superior em Gestão, Tecnologia e Educação-</h2>
                                <h3 class="text-gray-500 mb-3">2022 - 2025 (previsto)</h3>
                                <p class="mb-4">Sistemas de Informação</p>

                            </div>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/2">
                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="./src/assets/sisvoo.png" />
                            <div class="flex-grow sm:pl-8">
                                <h2 class="title-font font-medium text-lg text-gray-900">MBM (Sisvôo – Sistemas Eletrônicos Ltda.)</h2>
                                <h3 class="text-gray-500 mb-3">2021</h3>
                                <p class="mb-4">Técnico em Eletrônica</p>

                            </div>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/2">
                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="./src/assets/ETE.png" />
                            <div class="flex-grow sm:pl-8">
                                <h2 class="title-font font-medium text-lg text-gray-900">Escola Técnica de Eletrônica “Francisco Moreira da Costa”</h2>
                                <h3 class="text-gray-500 mb-3">2014 - 2016</h3>
                                <p class="mb-4">Curso técnico de Eletrônica</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience