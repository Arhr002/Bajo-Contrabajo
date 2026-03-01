import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import instruments from '../data/instruments.json';
import Footer from '../components/footer';

function Details() {
  const { id } = useParams();
  const instrument = instruments.find(item => item.id === parseInt(id));
  const bgImage = instrument ? instrument.image.replace('.webp', '-bg.webp') : '';

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  if (!instrument) {
    return <div>Instrumento no encontrado</div>;
  }

  return (
    <div ref={ref} className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 max-w-[100%]">

        <div className="flex flex-col items-start justify-center gap-10 bg-[#171835] w-full h-15 p-10 fixed opacity-90 z-20">
            <Link to="/" className="flex items-center text-white text-2xl font-semibold hover:text-[#d75ddd] transition-colors">
                <i className="fas fa-arrow-left mr-2 mt-1"></i>
                <span>Volver</span>
            </Link>
        </div>

        <div className="text-center p-4">
            <h1 className="text-5xl text-white font-bold mt-50">{instrument.name}</h1>
            <motion.img 
                src={bgImage} 
                alt={`Imagen de ${instrument.name}`}
                className="w-100 max-w-2xl mx-auto"
                style={{ y, opacity }}
            />
        </div>
        <div className="p-10 text-white bg-[#171835] bg-opacity-80 mx-auto mt-10 w-100%">
            <div className="bg-[#151f33d1] bg-opacity-[] p-6 rounded-lg mb-8 border border-purple-500 relative z-10">
                <h2 className="text-3xl font-bold mb-4 text-purple-400">Descripción</h2>
                <p className="text-lg">{instrument.description}</p>
            </div>
            <div className="bg-[#151f33d1] bg-opacity-20 p-6 rounded-lg mb-8 border border-purple-500">
                <h2 className="text-3xl font-bold mb-4 text-purple-400">Historia</h2>
                <p className="text-lg">{instrument.history}</p>
            </div>
            <div className="bg-[#151f33d1] bg-opacity-20 p-6 rounded-lg border border-purple-500">
                <h2 className="text-3xl font-bold mb-4 text-purple-400">Características</h2>
                <ul className="list-disc list-inside text-lg marker:text-[#AD46FF]">
                    {instrument.characteristics.map((char, index) => (
                        <li key={index}>{char}</li>
                    ))}
                </ul>
            </div>  
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 mt-5">
                <h2 className="text-3xl font-bold mb-4 text-purple-400">Dato Curioso</h2>
                <p className="text-lg">{instrument.datoCurioso}</p>
            </div>
        </div>
    <Footer />
    </div>
  );
}

export default Details;