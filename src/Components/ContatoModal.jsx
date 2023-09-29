
import React from 'react';
import Modal from 'react-modal';
import { AiFillGithub, AiFillLinkedin, AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
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
            <button
                className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
                onClick={onClose}
            >
                Fechar
            </button>
            <div className='flex flex-row'>
                <div class='flex flex-col items-center justify-center m-3'><a href="https://github.com/LeandroASLeite" target="_blank"><AiFillGithub class='h-10 w-10 hover:text-blue-950 ' /></a><label >GitHub</label></div>
                <div class='flex flex-col items-center justify-center m-3'><a href="https://www.linkedin.com/in/leandro-leite-760931186/" target="_blank"><AiFillLinkedin class='h-10 w-10 hover:text-cyan-700' /></a><label >LinkedIn</label></div>
                <div class='flex flex-col items-center justify-center m-3'><a href="https://www.facebook.com/leandro.leite.330" target="_blank"><AiOutlineFacebook class='h-10 w-10 hover:text-blue-600' /></a><label >Facebook</label></div>
                <div class='flex flex-col items-center justify-center m-3'><a href="https://www.instagram.com/leandro.leite.330/" target="_blank"><AiOutlineInstagram class='h-10 w-10 hover:text-pink-400' /></a><label >Instagram</label></div>
            </div>
        </Modal>
    );
}

export default ContatoModal;
