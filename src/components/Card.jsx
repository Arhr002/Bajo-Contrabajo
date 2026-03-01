import { Link } from 'react-router-dom';

function Card({ id, image, title }) {
  return (
    <div className="grid grid-cols-1 gap-5 p-4">
      <div className="group relative w-90 h-140 shadow card overflow-hidden rounded-[6%]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 flex justify-center items-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
          <Link to={`/details/${id}`} className="bg-purple-600 text-white px-5 py-2 rounded-full font-semibold"><span>Explorar</span></Link>
        </div>
        <h3 className="absolute bottom-6 left-6 text-white text-3xl font-bold">{title}</h3>
      </div>
    </div>
  );
}

export default Card;