import React from 'react'
import HomeImage from '../assets/main.jpg'

function calcularIdade(dataNascimento) {
    const dataNascimentoArray = dataNascimento.split('-');
    const anoNascimento = parseInt(dataNascimentoArray[0]);
    const mesNascimento = parseInt(dataNascimentoArray[1]) - 1;
    const diaNascimento = parseInt(dataNascimentoArray[2]);
    const hoje = new Date();
    let idade = hoje.getFullYear() - anoNascimento;
    if (
        hoje.getMonth() < mesNascimento ||
        (hoje.getMonth() === mesNascimento && hoje.getDate() < diaNascimento)
    ) {
        idade--;
    }

    return idade;
}

const MyIdade = calcularIdade('1998-08-19');


const Main = () => {
    return (

        <div class="text-gray-600 body-font mt-16">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Olá, Meu nome é Leandro Leite
                        <br class="hidden lg:inline-block" />
                    </h1>
                    <p class="mb-8 leading-relaxed">Tenho {MyIdade} anos, nasci em Monsenhor Paulo- MG.<br /> Sou Técnico em Eletrônica e estudante de Sistemas de Informação. </p>

                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img class="object-cover object-center rounded-full" alt="hero" src={HomeImage}></img>
                </div>
            </div>

        </div>

    )
}

export default Main