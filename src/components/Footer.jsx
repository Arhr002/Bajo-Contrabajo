import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="w-full py-10 bg-[#020618]">
      <div className="text-center">
        <Link to="/" className="text-purple-400 hover:text-purple-300 transition-colors text-lg font-semibold">
          <i className="fas fa-arrow-left mr-2"></i>
          Explorar otros instrumentos
        </Link>
      </div>
    </footer>
  );
}

export default Footer;