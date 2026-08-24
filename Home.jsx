import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"

const popularSkills = [
  {
    name: "Java",
    category: "Programming",
    students: 124
  },
  {
    name: "React",
    category: "Web Development",
    students: 98
  },
  {
    name: "UI/UX Design",
    category: "Design",
    students: 76
  },
  {
    name: "Python",
    category: "Programming",
    students: 145
  },
  {
    name: "Video Editing",
    category: "Creative",
    students: 54
  },
  {
    name: "Public Speaking",
    category: "Communication",
    students: 63
  }
]

function Home() {

  return (

    <div className="min-h-screen bg-gray-950 text-white">

      <Navbar />

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="max-w-4xl">

          <p className="text-blue-500 font-semibold tracking-widest">
            CAMPUS SKILL EXCHANGE
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-5 leading-tight">

            Learn from students.

            <br />

            <span className="text-blue-500">
              Share what you know.
            </span>

          </h1>

          <p className="text-gray-400 text-lg md:text-xl mt-7 max-w-2xl">

            Find students who can teach you the skills
            you want to learn, while sharing the skills
            you already know.

          </p>

          <div className="flex gap-4 mt-9">

            <Link
              to="/skills"
              className="bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-lg font-semibold"
            >
              Find a Skill
            </Link>

            <Link
              to="/register"
              className="border border-gray-700 hover:bg-gray-900 px-7 py-3 rounded-lg font-semibold"
            >
              Join the Community
            </Link>

          </div>

        </div>

      </section>


      {/* SEARCH */}

      <section className="max-w-5xl mx-auto px-6 pb-20">

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-7">

          <h2 className="text-xl font-semibold">
            What do you want to learn?
          </h2>

          <div className="flex flex-col md:flex-row gap-3 mt-5">

            <input
              type="text"
              placeholder="Search Java, React, Photoshop..."
              className="flex-1 bg-gray-950 border border-gray-700 rounded-lg px-5 py-3 outline-none focus:border-blue-500"
            />

            <Link
              to="/skills"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold text-center"
            >
              Search
            </Link>

          </div>

        </div>

      </section>


      {/* POPULAR SKILLS */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold">
          Popular Skills
        </h2>

        <p className="text-gray-400 mt-2">
          Skills students are currently sharing.
        </p>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

          {popularSkills.map((skill) => (

            <div
              key={skill.name}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-7 hover:border-blue-500 transition"
            >

              <div className="w-12 h-12 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center text-xl font-bold">
                {skill.name.charAt(0)}
              </div>

              <p className="text-blue-500 text-sm mt-6">
                {skill.category}
              </p>

              <h3 className="text-xl font-semibold mt-2">
                {skill.name}
              </h3>

              <p className="text-gray-500 mt-2">
                {skill.students} students
              </p>

              <Link
                to="/skills"
                className="inline-block mt-6 text-blue-500 hover:text-blue-400"
              >
                Explore →
              </Link>

            </div>

          ))}

        </div>

      </section>


      {/* HOW IT WORKS */}

      <section className="border-y border-gray-800 bg-gray-900/40">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="text-center">

            <p className="text-blue-500 font-semibold">
              SIMPLE PROCESS
            </p>

            <h2 className="text-4xl font-bold mt-3">
              How it works
            </h2>

          </div>


          <div className="grid md:grid-cols-3 gap-10 mt-14">

            <Step
              number="01"
              title="Create your profile"
              description="Add the skills you know and the skills you want to learn."
            />

            <Step
              number="02"
              title="Find your match"
              description="Discover students who can teach the skills you're looking for."
            />

            <Step
              number="03"
              title="Exchange knowledge"
              description="Send a request and start learning together."
            />

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="bg-blue-600 rounded-3xl text-center px-8 py-16">

          <h2 className="text-4xl font-bold">
            Have something to teach?
          </h2>

          <p className="text-blue-100 mt-4 text-lg">
            Your knowledge could help another student.
          </p>

          <Link
            to="/register"
            className="inline-block mt-8 bg-white text-blue-600 px-7 py-3 rounded-lg font-semibold"
          >
            Start Sharing
          </Link>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between">

          <p className="text-gray-500">
            © 2026 SkillExchange
          </p>

          <p className="text-gray-500">
            Learn • Teach • Exchange
          </p>

        </div>

      </footer>

    </div>
  )
}


function Step({ number, title, description }) {

  return (

    <div className="text-center">

      <div className="text-5xl font-bold text-blue-500">
        {number}
      </div>

      <h3 className="text-xl font-semibold mt-5">
        {title}
      </h3>

      <p className="text-gray-400 mt-3">
        {description}
      </p>

    </div>

  )
}

export default Home