'use client'

import Navbar from '../components/navbar/Navbar'
import BannerCarousel from '../components/complementos/BannerCarousel'
import IndexTimeline from '../components/aboutme/IndexTimeline'
import IndexProjects from '@/app/components/projects/IndexProjects'
import IndexSocialBox from '../components/social/IndexSocialBox'
import ProyectoWeb from '../components/desarrolloWeb/proyectoWeb'
import Experiencia from '../components/experienciaLaboral/indexExperienciaLaboral'
import Tecnologias from '../components/tecnologias/IndexTecnologias'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
      <Navbar />

      {/*  BODY*/}
      <div id='Home' className=' px-20 mx-20'>
        {/*  PARTE UNO */}
        <div className='my-10'>
          <section>
            <BannerCarousel />
          </section>
        </div>

        {/*  PARTE DOS */}
        <div className='mb-10 mt-20 py-5 border-b border-t border-gray-700'>
          <h1 className='text-xl font-bold my-5 '>Leonel Navarro</h1>
          <article>
            <p>Como ingeniero y desarrollador de software, tengo experiencia trabajando con una amplia variedad de tecnologías, <br />
              incluyendo JavaScript, NodeJS, TypeScript, NestJS, C# y .NET. También tengo habilidades en Docker y Docker-compose, Mssql y Sequelize, <br />
              MongoDB y Mongoose, y conocimientos básicos de HTML5 y CSS. Además, tengo conocimientos básicos en ReactJS, Linux y Bootstrap. Tambien tengo manejo <br />
              de las herramientas como Git y Trello. <br />
              He diseñado y desarrollado APIs REST y aplicaciones web mobile first, lo que me ha permitido obtener un profundo conocimiento de las mejores prácticas <br />
              en el desarrollo de software. Estoy comprometido con la mejora continua y siempre busco aprender nuevas tecnologías y técnicas para seguir<br />
              evolucionando como profesional.
              Aunque tengo un nivel de inglés B2, necesito práctica para mejorar mis habilidades.</p>
          </article>
        </div>

        {/*  PARTE TRES */}
        <div id='Destacados' className='my-10 py-5 border-b border-gray-700'>

          <h1 className='text-xl font-bold my-5'>Proyectos destacados</h1>
          <section>
            <IndexProjects></IndexProjects>
          </section>
        </div>

        {/*  PARTE CUATRO */}
        <div className='my-10 py-5 border-b border-gray-700'>
          <h1 className='text-xl font-bold my-5'>Desarrollo Web</h1>
          <section>
            <ProyectoWeb></ProyectoWeb>
          </section>
        </div>

        {/*  PARTE CINCO */}
        <div id='Experience' className='my-10 py-5 border-b border-gray-700'>
          <h1 className='text-xl font-bold my-5'>Experiencia laboral</h1>
          <section>
            <Experiencia></Experiencia>
          </section>
        </div>

        {/*  PARTE SEIS */}
        <div id='' className='my-10 py-5 border-b border-gray-700'>
          <h1 className='text-xl font-bold my-5'>Educación y certificados</h1>
          <section>

          </section>
        </div>
        {/*  PARTE SIETE */}
        <div id='Tecnologies' className='my-10 py-5 border-b border-gray-700'>
          <h1 className='text-xl font-bold my-5'>Listado de herramientas y tecnologías que utilizo</h1>
          <section>
    <Tecnologias></Tecnologias>
          </section>
        </div>

        {/*  PARTE ocho */}
        <div id='Aboutme' className='my-10 py-5 border-b border-gray-700'>
          <section>
            <IndexTimeline />
          </section>
        </div>

        {/*  PARTE SIETE REDES SOCIALES*/}
        <div id='Contact' className='my-10 py-5 border-b border-gray-700'>
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


      <footer className='w-full bg-gray-950 py-20 border-t border-gray-900 text-center text-gray-500'>
        <div className='px-10'>
        
          <p>Created by Lena Designs</p>
        </div>

      </footer>



    </main>
  )
}
