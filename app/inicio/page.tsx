'use client'

import Navbar from '../components/navbar/Navbar'
import Image from 'next/image'
import Counter from '../counter'
import BannerCarousel from '../components/complementos/BannerCarousel'
import IndexTimeline from '../components/aboutme/IndexTimeline'
import IndexProjects from '@/app/projects/IndexProjects'
import IndexSocialBox from '../components/social/IndexSocialBox'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
      <Navbar />

      {/*  BODY*/}
      <div id='body-page'>
        {/*  PARTE UNO */}
        <div className='my-10'>
          <section>
            <BannerCarousel />
          </section>
        </div>

        {/*  PARTE DOS */}
        <div className='mb-10 mt-20 py-5 border-b border-t border-gray-700'>
          <h1 className='text-xl font-bold my-5'>UN TEXTO DE TITULO</h1>
          <article>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et non veniam quod corporis facilis mollitia porro pariatur nostrum impedit, <br></br> voluptate tempore animi eius esse odit reiciendis velit aperiam accusantium eum.</p>
          </article>
        </div>

        {/*  PARTE TRES */}
        <div className='my-10 py-5 border-b border-gray-700'>

          <h1 className='text-xl font-bold my-5'>Proyectos destacados</h1>
          <section>
            <IndexProjects></IndexProjects>
          </section>
        </div>

        {/*  PARTE CUATRO */}
        <div className='my-10 py-5 border-b border-gray-700'>
          <h1 className='text-xl font-bold my-5'>Desarrollo Web</h1>
          <section>

          </section>
        </div>

        {/*  PARTE CINCO */}
        <div className='my-10 py-5 border-b border-gray-700'>
          <h1 className='text-xl font-bold my-5'>Experiencia laboral</h1>
          <section>

          </section>
        </div>

        {/*  PARTE SEIS */}
        <div className='my-10 py-5 border-b border-gray-700'>
          <h1 className='text-xl font-bold my-5'>Educación y certificados</h1>
          <section>

          </section>
        </div>
        {/*  PARTE SIETE */}
        <div className='my-10 py-5 border-b border-gray-700'>
          <h1 className='text-xl font-bold my-5'>Listado de habilidades y tecnologías que utilizo</h1>
          <section>

          </section>
        </div>

        {/*  PARTE ocho */}
        <div className='my-10 py-5 border-b border-gray-700'>
          <h1 className='text-2xl font-bold my-5'>Acerca de mí</h1>
          <section>
            <IndexTimeline />
          </section>
        </div>

        {/*  PARTE SIETE REDES SOCIALES*/}
        <div className='my-10 py-5 border-b border-gray-700'>
          <section>
            <IndexSocialBox />
          </section>
        </div>

        {/*  PARTE SIETE */}
        <div className='my-10 py-5 border-b border-gray-700'>
          <h1 className='text-xl font-bold my-5'>Testimonios o recomendaciones</h1>
          <section>

          </section>
        </div>

      </div>


      <footer className='w-full bg-gray-950 py-20 border-t border-gray-900'>
        <div className='px-10'>
          <p>Footer</p>
        </div>

      </footer>



    </main>
  )
}
