import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-blue-600 p-4 text-white">
    <nav>
      <ul className="flex gap-4 justify-center">
        <li><Link to="/">Home</Link></li>
        {/* <li><Link to="/home">View Products</Link></li> */}
      </ul>
    </nav>
  </header>
);

export default Header;
