import React from 'react'
import PYTHON from "../assets/python.png"
import JAVA from "../assets/java.png"
import JS from "../assets/js.png"
import HTML from "../assets/html.png"
import CSS from "../assets/css.png"
import REACT from "../assets/react.png"
import ANGULAR from "../assets/angular.png"
import BOOTSTRAP from "../assets/bootstrap.png"
import MONGODB from "../assets/mongodb.png"
import TAILWINDCSS from "../assets/tailwind-css.svg"
import GIT from "../assets/git.png"
import GITHUB from "../assets/github.png"

const Knowledge = () => {
    return (

        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Meus conhecimentos</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Foram conhecimentos que desenvolvi tanto na faculdade quanto em cursos online.</p>
                </div>
                <div class="flex flex-wrap -m-2">
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={PYTHON} />
                            <div class="flex-grow">
                                <h2 class="text-gray-900 title-font font-medium">Python</h2>

                            </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={JAVA} />
                            <div class="flex-grow">
                                <h2 class="text-gray-900 title-font font-medium">Java</h2>
                            </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={JS} />
                            <div class="flex-grow">
                                <h2 class="text-gray-900 title-font font-medium">JavaScript</h2>
                            </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={HTML} />
                            <div class="flex-grow">
                                <h2 class="text-gray-900 title-font font-medium">HTML</h2>
                            </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={CSS} />
                            <div class="flex-grow">
                                <h2 class="text-gray-900 title-font font-medium">CSS</h2>
                            </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={REACT} />
                            <div class="flex-grow">
                                <h2 class="text-gray-900 title-font font-medium">React</h2>

                            </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={ANGULAR} />
                            <div class="flex-grow">
                                <h2 class="text-gray-900 title-font font-medium">Angular</h2>
                            </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={BOOTSTRAP} />
                            <div class="flex-grow">
                                <h2 class="text-gray-900 title-font font-medium">Bootstrap</h2>
                            </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={MONGODB} />
                            <div class="flex-grow">
                                <h2 class="text-gray-900 title-font font-medium">MongoDB</h2>
                            </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={TAILWINDCSS} />
                            <div class="flex-grow">
                                <h2 class="text-gray-900 title-font font-medium">TailwindCSS</h2>
                            </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={GIT} />
                            <div class="flex-grow">
                                <h2 class="text-gray-900 title-font font-medium">Git</h2>
                            </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={GITHUB} />
                            <div class="flex-grow">
                                <h2 class="text-gray-900 title-font font-medium">Github</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Knowledge