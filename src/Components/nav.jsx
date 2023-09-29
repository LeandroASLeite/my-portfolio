// import React from 'react';
// import { AiOutlineLaptop } from "react-icons/ai";

// const Nav = () => {
//     return (
//         <header className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md text-gray-600 body-font">
//             <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//                 <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//                     <AiOutlineLaptop className='h-10 w-10' />
//                     <span className="ml-3 text-xl">Leandro Leite</span>
//                 </a>
//                 <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
//                     <a className="mr-5 hover:text-gray-900">Home</a>
//                     <a className="mr-5 hover:text-gray-900">Sobre</a>
//                     <a className="mr-5 hover:text-gray-900">Experiência</a>
//                     <a className="mr-5 hover:text-gray-900">Conhecimento</a>
//                 </nav>
//             </div>
//         </header>
//     )
// }

// export default Nav;
// import React from 'react';
// import { AiOutlineLaptop } from "react-icons/ai";

// const Nav = () => {
//     return (
//         <header className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md text-gray-600 body-font">
//             <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//                 <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//                     <AiOutlineLaptop className='h-10 w-10' />
//                     <span className="ml-3 text-xl">Leandro Leite</span>
//                 </a>
//                 <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
//                     <a href="#home" className="mr-5 hover:text-gray-900">Home</a>
//                     <a href="#sobre" className="mr-5 hover:text-gray-900">Sobre</a>
//                     <a href="#experiencia" className="mr-5 hover:text-gray-900">Experiência</a>
//                     <a href="#conhecimento" className="mr-5 hover:text-gray-900">Conhecimento</a>
//                 </nav>
//             </div>
//         </header>
//     )
// }

// export default Nav;

import React from 'react';
import { AiOutlineLaptop } from "react-icons/ai";

const Nav = () => {
    const scrollToSection = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <AiOutlineLaptop className='h-10 w-10' />
                    <span className="ml-3 text-xl">Leandro Leite</span>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center cursor-pointer">
                    <a onClick={() => scrollToSection('#home')} className="mr-5 hover:text-gray-900">Home</a>
                    <a onClick={() => scrollToSection('#sobre')} className="mr-5 hover:text-gray-900">Sobre</a>
                    <a onClick={() => scrollToSection('#experiencia')} className="mr-5 hover:text-gray-900">Experiência</a>
                    <a onClick={() => scrollToSection('#conhecimento')} className="mr-5 hover:text-gray-900">Conhecimento</a>
                </nav>
            </div>
        </header>
    )
}

export default Nav;
