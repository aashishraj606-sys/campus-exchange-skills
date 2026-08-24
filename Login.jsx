import { useState } from "react"
import { Link } from "react-router-dom"

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e) => {
    e.preventDefault()

    console.log("Email:", email)
    console.log("Password:", password)

    alert("Login button clicked!")
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md">

        <div className="text-center mb-8">

          <Link
            to="/"
            className="text-3xl font-bold"
          >
            Skill<span className="text-blue-500">Exchange</span>
          </Link>

          <h1 className="text-3xl font-bold mt-8">
            Welcome back
          </h1>

          <p className="text-gray-400 mt-2">
            Login to your SkillExchange account
          </p>

        </div>


        <form
          onSubmit={handleLogin}
          className="bg-gray-900 border border-gray-800 rounded-2xl p-8"
        >

          {/* Email */}

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>


          {/* Password */}

          <div className="mt-5">

            <label className="block text-sm text-gray-300 mb-2">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />

          </div>


          <button
            type="submit"
            className="w-full mt-7 bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold"
          >
            Login
          </button>


          <p className="text-center text-gray-400 mt-6">

            Don't have an account?{" "}

            <Link
              to="/register"
              className="text-blue-500 hover:text-blue-400"
            >
              Register
            </Link>

          </p>

        </form>

      </div>

    </div>
  )
}

export default Login