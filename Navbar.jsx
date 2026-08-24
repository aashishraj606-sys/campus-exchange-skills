import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="border-b border-gray-800 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <Link
          to="/"
          className="text-2xl font-bold text-white"
        >
          Skill<span className="text-blue-500">Exchange</span>
        </Link>

        <div className="hidden md:flex gap-8 text-gray-400">

          <Link to="/" className="hover:text-white">
            Home
          </Link>

          <Link to="/skills" className="hover:text-white">
            Find Skills
          </Link>

          <Link to="/requests" className="hover:text-white">
            Requests
          </Link>

        </div>

        <div className="flex items-center gap-3">

          <Link
            to="/login"
            className="px-4 py-2 text-gray-300 hover:text-white"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700"
          >
            Get Started
          </Link>

        </div>

      </div>
    </nav>
  )
}

export default Navbar