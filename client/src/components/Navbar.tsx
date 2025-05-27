import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex gap-4">
      <Link to="/" className="font-semibold">Home</Link>
      <Link to="/services" className="font-semibold">Services</Link>
    </nav>
  );
}
