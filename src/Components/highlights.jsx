import React from 'react'
import Carousel from './carousell'

const Highlights = () => {
    return (
        <>

            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Destaques</h1>
                    </div>
                    <Carousel />

                    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Faitec 2023</h2>
                            <p class="leading-relaxed text-base">2º Lugar com o projeto "EduClass"</p>
                            <a href="https://educlass-psi.vercel.app/" target="_blank" class="mt-3 text-indigo-500 inline-flex items-center">Saiba mais
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                        <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sm:w-16 sm:h-16 w-10 h-10">
                                <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="20" font-weight="">2º</text>
                            </svg>
                        </div>
                    </div>
                    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sm:w-16 sm:h-16 w-10 h-10">
                                <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="20" font-weight="">1º</text>
                            </svg>
                        </div>
                        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Faitec 2022</h2>
                            <p class="leading-relaxed text-base">1º Lugar com o projeto "ASTRO"</p>
                            <a href="https://astro-iota-three.vercel.app/" target='_blank' class="mt-3 text-indigo-500 inline-flex items-center">Saiba mais
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">19ª edição da Maratona de programação da FAI - 2023</h2>
                            <p class="leading-relaxed text-base">1º lugar </p>
                            <a href="https://www.fai-mg.br/portal/eventos/eventos-academicos" target='_blank' class="mt-3 text-indigo-500 inline-flex items-center">Saiba mais
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                        <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sm:w-16 sm:h-16 w-10 h-10">
                                <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="20" font-weight="">1º</text>
                            </svg>
                        </div>
                    </div>
                    <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
                        <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sm:w-16 sm:h-16 w-10 h-10">
                                <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="20" font-weight="">3º</text>
                            </svg>
                        </div>
                        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">18ª edição da Maratona de programação da FAI - 2022</h2>
                            <p class="leading-relaxed text-base">3º lugar</p>
                            <a href="https://maratona.sbc.org.br/sobre/index.html" target="_blank" class="mt-3 text-indigo-500 inline-flex items-center">Saiba mais
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default Highlights