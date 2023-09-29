import React, { useState } from 'react';
import ContatoModal from './ContatoModal';


const About = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    const openPDF = () => {
        window.open('./src/assets/LeandroLeite.pdf', '_blank');
    };

    return (

        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                {/* <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-full" alt="hero" src="./src/assets/me.jpeg" /> */}
                <img class="lg:w-1/5 md:w-1/5  object-cover object-center rounded-lg mb-10" alt="hero" src="./src/assets/me.jpeg" />

                <div class="text-center lg:w-2/3 w-full">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Sobre mim</h1>
                    <p class="mb-8 leading-relaxed">Olá, sou Técnico em Eletrônica e atualmente estou cursando Sistemas de Informação. Com muito foco e dedicação estou me preparando para atuar na área de Técnologia da Informação (TI), e futuramente estarei capacitado para atuar como Analista de Sistemas, Desenvolvedor de Software, Administrador de TI ou Gerente de Projetos.</p>
                    <div class="flex justify-center">
                        <div>
                            <button onClick={openModal} class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                Contato
                            </button>
                            <ContatoModal isOpen={modalOpen} onClose={closeModal} />
                        </div>
                        <button class="ml-4 inline-flex text-gray-700 bg-gray-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg" onClick={openPDF}>Currículo</button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About