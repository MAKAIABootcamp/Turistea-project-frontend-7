import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SobreNosotros = () => {

    return (
        <>
            <div className="bg-white py-24 sm:py-20">
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-primary-color font-title sm:text-4xl">Conoce nuestro equipo</h2>
                        <p className="mt-6 text-lg leading-8 font-body">
                            Turistea surgió como solución a los problemas relacionados con la planificación de viajes en diversos aspectos. Comparte tus experiencias de viaje de manera auténtica y conecta con otros apasionados viajeros. Conoce a nuestro equipo de desarrolladores front-end, junto con Betek, quienes hicieron esto posible.

                        </p>
                    </div>

                </div>
            </div>
            <ul role="list" className="grid gap-x-10 px-10 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">

                <li>
                    <div className="flex items-center gap-x-6">
                        <img className="h-25 w-25 rounded-full" src="https://media.licdn.com/dms/image/D4E03AQGvtOcnaghACg/profile-displayphoto-shrink_200_200/0/1696366124716?e=2147483647&v=beta&t=vTzTTQneEXzxP-861kkXP_rn5tc_MnDb1_ECcYIyKBw" alt="" />
                        <div>
                            <h3 className="text-base font-semibold leading-9 tracking-tight text-primary-color font-body">Valentina Cedano Useche </h3>
                            <p className="text-sm font-semibold leading-6 text-black">Desarrolladora Front End  <br></br> Estudiante del Pregrado de Astronomía.<br></br> Universidad de Antioquia</p>
                            <div className='flex flex-row gap-x-2'>
                                <a href="https://www.linkedin.com/in/valentina-cedano-useche-59b23b129/" target="_blank">

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"  width="30" height="30">
                                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                                </a>
                                <a href="https://github.com/ValenCedano " target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="30" height="30">
                                <path d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z"/></svg>
                                </a>
                           
                            </div>
                            
                           
                        </div>


                    </div>
                </li>

                <li>
                    <div className="flex items-center gap-x-6">
                        <img className="h-25 w-25 rounded-full" src="data:image/jpeg;base64,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" alt="" />
                        <div>
                            <h3 className="text-base font-semibold leading-9 tracking-tight text-primary-color font-body"> Sara Patiño Rojas   </h3>
                            <p className="text-sm font-semibold leading-6 text-black">Desarrolladora Front End <br></br> Estudiante de pregrado Ingeniería informática.<br></br> Universidad Autónoma Latinoamericana  </p>
                            <div className='flex flex-row gap-x-2'>
                                <a href="https://www.linkedin.com/in/sara-patiño-rojas-913614205/" target="_blank">

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"  width="30" height="30">
                                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                                </a>
                                <a href="https://github.com/Sweet17n" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="30" height="30">
                                <path d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z"/></svg>
                                </a>
                           
                            </div>
                            
                           
                        </div>


                    </div>
                </li>

            </ul>
        </>

    )

}
export default SobreNosotros;