import { useState } from "react"
import { Link } from "react-router-dom"

function Register() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    college: "",
    teachSkill: "",
    learnSkill: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleRegister = (e) => {
    e.preventDefault()

    console.log("Student Data:", formData)

    alert("Registration successful!")
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6 py-12">

      <div className="w-full max-w-lg">

        {/* Header */}

        <div className="text-center mb-8">

          <Link to="/" className="text-3xl font-bold">
            Skill<span className="text-blue-500">Exchange</span>
          </Link>

          <h1 className="text-3xl font-bold mt-8">
            Create your account
          </h1>

          <p className="text-gray-400 mt-2">
            Join your campus skill community
          </p>

        </div>


        {/* Form */}

        <form
          onSubmit={handleRegister}
          className="bg-gray-900 border border-gray-800 rounded-2xl p-8"
        >

          {/* Name */}

          <label className="block text-sm text-gray-300 mb-2">
            Full Name
          </label>

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Enter your name"
            required
            className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />


          {/* Email */}

          <label className="block text-sm text-gray-300 mb-2 mt-5">
            Email
          </label>

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="you@example.com"
            required
            className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />


          {/* College */}

          <label className="block text-sm text-gray-300 mb-2 mt-5">
            College
          </label>

          <input
            name="college"
            value={formData.college}
            onChange={handleChange}
            type="text"
            placeholder="Enter your college"
            required
            className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />


          {/* Teach Skill */}

          <label className="block text-sm text-gray-300 mb-2 mt-5">
            Skill You Can Teach
          </label>

          <input
            name="teachSkill"
            value={formData.teachSkill}
            onChange={handleChange}
            type="text"
            placeholder="Example: Java"
            required
            className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />


          {/* Learn Skill */}

          <label className="block text-sm text-gray-300 mb-2 mt-5">
            Skill You Want To Learn
          </label>

          <input
            name="learnSkill"
            value={formData.learnSkill}
            onChange={handleChange}
            type="text"
            placeholder="Example: React"
            required
            className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />


          {/* Password */}

          <label className="block text-sm text-gray-300 mb-2 mt-5">
            Password
          </label>

          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            placeholder="Create a password"
            required
            className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />


          {/* Submit */}

          <button
            type="submit"
            className="w-full mt-7 bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition"
          >
            Create Account
          </button>


          <p className="text-center text-gray-400 mt-6">

            Already have an account?{" "}

            <Link
              to="/login"
              className="text-blue-500 hover:text-blue-400"
            >
              Login
            </Link>

          </p>

        </form>

      </div>

    </div>
  )
}

export default Register