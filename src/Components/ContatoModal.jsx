import React from 'react';
import Modal from 'react-modal';
import { AiFillGithub, AiFillLinkedin, AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineMail, AiOutlineCloseCircle } from "react-icons/ai";
Modal.setAppElement('#root');

function ContatoModal({ isOpen, onClose }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Modal de Contato"
            className="modal-content"
            overlayClassName="modal-overlay"
        >
            {/* <button
                className="absolute top-2 right-2 text-gray-600 hover:text-red-500 "
                onClick={onClose}
            >
                <AiOutlineCloseCircle />
            </button>
            <div class='flex flex-row'>
                <div className='flex flex-col'>
                    <div class='flex flex-col items-center justify-center m-3'><a href="https://github.com/LeandroASLeite" target="_blank"><AiFillGithub class='h-10 w-10 hover:text-blue-950 ' /></a><label >GitHub</label></div>
                    <div class='flex flex-col items-center justify-center m-3'><a href="https://www.linkedin.com/in/leandro-leite-760931186/" target="_blank"><AiFillLinkedin class='h-10 w-10 hover:text-cyan-700' /></a><label >LinkedIn</label></div>
                    <div class='flex flex-col items-center justify-center m-3'><a href="mailto:leandroleite.ll25@proton.me" ><AiOutlineMail class='h-10 w-10 hover:text-amber-300' /></a><label >E-mail</label></div>
                </div>
                <div className='flex flex-col'>
                    <div class='flex flex-col items-center justify-center m-3'><a href="https://www.facebook.com/leandro.leite.330" target="_blank"><AiOutlineFacebook class='h-10 w-10 hover:text-blue-600' /></a><label >Facebook</label></div>
                    <div class='flex flex-col items-center justify-center m-3'><a href="https://www.instagram.com/leandro.leite.330/" target="_blank"><AiOutlineInstagram class='h-10 w-10 hover:text-pink-400' /></a><label >Instagram</label></div>
                    <div class='flex flex-col items-center justify-center m-3'><a href="https://api.whatsapp.com/send?phone=5535992058832" target="_blank"><AiOutlineWhatsApp class='h-10 w-10 hover:text-green-500' /></a><label >Whatsapp</label></div>

                </div>
            </div> */}

            {/* <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
            <button class="absolute top-2 right-2 text-gray-600 hover:text-red-500" onClick={onClose}><AiOutlineCloseCircle class='h-10 w-10' /></button>
            <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                <div class="p-2 sm:w-1/2 w-full">
                    <a href="https://github.com/LeandroASLeite" target="_blank">
                        <div class="bg-gray-100 rounded flex flex-row p-4 h-full items-center hover:bg-slate-800 hover:text-white">
                            <AiFillGithub class='h-10 w-10  ' />
                            <span class="title-font font-medium">GitHub</span>
                        </div>
                    </a>
                </div>
                <div class="p-2 sm:w-1/2 w-full">
                    <a href="https://www.linkedin.com/in/leandro-leite-760931186/" target="_blank">
                        <div class="bg-gray-100 rounded flex flex-row p-4 h-full items-center hover:text-white hover:bg-blue-800">
                            <AiFillLinkedin class='h-10 w-10  ' />
                            <span class="title-font font-medium">LinkedIn</span>
                        </div>
                    </a>
                </div>
                <div class="p-2 sm:w-1/2 w-full">
                    <a href="mailto:leandroleite.ll25@proton.me" target="_blank">
                        <div class="bg-gray-100 rounded flex flex-row p-4 h-full items-center  hover:text-white hover:bg-amber-400">
                            <AiOutlineMail class='h-10 w-10 hover:text-white ' />
                            <span class="title-font font-medium">E-mail</span>
                        </div>
                    </a>
                </div>
                <div class="p-2 sm:w-1/2 w-full">
                    <a href="https://www.facebook.com/leandro.leite.330" target="_blank">
                        <div class="bg-gray-100 rounded flex flex-row p-4 h-full items-center  hover:text-white hover:bg-blue-950">
                            <AiOutlineFacebook class='h-10 w-10  ' />
                            <span class="title-font font-medium">Facebook</span>
                        </div>
                    </a>
                </div>
                <div class="p-2 sm:w-1/2 w-full">
                    <a href="https://www.instagram.com/leandro.leite.330/" target="_blank">
                        <div class="bg-gray-100 rounded flex flex-row p-4 h-full items-center  hover:text-white hover:bg-pink-500">
                            <AiOutlineInstagram class='h-10 w-10 hover:text-white ' />
                            <span class="title-font font-medium">Instagram</span>
                        </div>
                    </a>
                </div>
                <div class="p-2 sm:w-1/2 w-full">
                    <a href="https://api.whatsapp.com/send?phone=5535992058832" target="_blank">
                        <div class="bg-gray-100 rounded flex flex-row p-4 h-full items-center  hover:text-white hover:bg-green-500">
                            <AiOutlineWhatsApp class='h-10 w-10 hover:text-white ' />
                            <span class="title-font font-medium">Whatsapp</span>
                        </div>
                    </a>
                </div>
            </div>




        </Modal >
    );
}

export default ContatoModal;
