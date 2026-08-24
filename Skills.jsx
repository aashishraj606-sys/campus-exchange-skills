import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"

const students = [
  {
    id: 1,
    name: "Manas prakash",
    college: "SMIT",
    skill: "Linux",
    category: "Programming",
    level: "Advanced",
    rating: 5,
    students: 18,
  },
  {
    id: 2,
    name: "Anushka Singh",
    college: "SMIT",
    skill: "React",
    category: "Web Development",
    level: "Intermediate",
    rating: 4.6,
    students: 12,
  },
  {
    id: 3,
    name: "Anant Raj Joshi",
    college: "SMIT",
    skill: "java",
    category: "Programming",
    level: "Advanced",
    rating: 4.9,
    students: 24,
  },
  {
    id: 4,
    name: "Shubham singh",
    college: "SMIT",
    skill: "UI/UX Design",
    category: "Design",
    level: "intermediate",
    rating: 3.4,
    students: 15,
  },
  {
    id: 5,
    name: "Romio gupta",
    college: "SMIT",
    skill: "JavaScript",
    category: "Web Development",
    level: "Advanced",
    rating: 4.5,
    students: 10,
  },
  {
    id: 6,
    name: "Neha Verma",
    college: "SMIT",
    skill: "Video Editing",
    category: "Creative",
    level: "Intermediate",
    rating: 4.4,
    students: 8,
  },
]

function Skills() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [level, setLevel] = useState("All")

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchesSearch =
        student.name.toLowerCase().includes(search.toLowerCase()) ||
        student.skill.toLowerCase().includes(search.toLowerCase())

      const matchesCategory =
        category === "All" || student.category === category

      const matchesLevel =
        level === "All" || student.level === level

      return matchesSearch && matchesCategory && matchesLevel
    })
  }, [search, category, level])

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-12">

        {/* Header */}

        <div>
          <p className="text-blue-500 font-semibold">
            DISCOVER
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            Find a Skill
          </h1>

          <p className="text-gray-400 mt-3">
            Find students who can teach you something new.
          </p>
        </div>

        {/* Search + Filters */}

        <div className="mt-10 bg-gray-900 border border-gray-800 rounded-2xl p-6">

          <div className="flex flex-col lg:flex-row gap-4">

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by skill or student..."
              className="flex-1 bg-gray-950 border border-gray-700 rounded-lg px-5 py-3 outline-none focus:border-blue-500"
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-gray-950 border border-gray-700 rounded-lg px-5 py-3 outline-none"
            >
              <option value="All">All Categories</option>
              <option value="Programming">Programming</option>
              <option value="Web Development">Web Development</option>
              <option value="Design">Design</option>
              <option value="Creative">Creative</option>
            </select>

            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="bg-gray-950 border border-gray-700 rounded-lg px-5 py-3 outline-none"
            >
              <option value="All">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>

          </div>

        </div>

        {/* Results */}

        <div className="flex items-center justify-between mt-10 mb-6">

          <h2 className="text-xl font-semibold">
            {filteredStudents.length} students found
          </h2>

          {(search || category !== "All" || level !== "All") && (
            <button
              onClick={() => {
                setSearch("")
                setCategory("All")
                setLevel("All")
              }}
              className="text-blue-500 hover:text-blue-400"
            >
              Clear filters
            </button>
          )}

        </div>

        {/* Cards */}

        {filteredStudents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredStudents.map((student) => (
              <StudentCard
                key={student.id}
                student={student}
              />
            ))}

          </div>
        ) : (
          <div className="border border-gray-800 rounded-2xl p-16 text-center">

            <div className="text-5xl mb-5">
              🔍
            </div>

            <h3 className="text-xl font-semibold">
              No students found
            </h3>

            <p className="text-gray-400 mt-2">
              Try changing your search or filters.
            </p>

          </div>
        )}

      </main>
    </div>
  )
}

function StudentCard({ student }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500 transition">

      {/* Avatar */}

      <div className="flex items-center gap-4">

        <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold">
          {student.name.charAt(0)}
        </div>

        <div>
          <h3 className="font-semibold text-lg">
            {student.name}
          </h3>

          <p className="text-gray-500 text-sm">
            {student.college}
          </p>
        </div>

      </div>

      {/* Skill */}

      <div className="mt-6">

        <p className="text-gray-500 text-sm">
          Offers
        </p>

        <div className="flex items-center justify-between mt-2">

          <h4 className="text-xl font-semibold">
            {student.skill}
          </h4>

          <span className="text-xs bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full">
            {student.level}
          </span>

        </div>

        <p className="text-gray-500 text-sm mt-2">
          {student.category}
        </p>

      </div>

      {/* Rating */}

      <div className="flex items-center gap-2 mt-5">

        <span className="text-yellow-400">
          ★
        </span>

        <span>
          {student.rating}
        </span>

        <span className="text-gray-500">
          · {student.students} learners
        </span>

      </div>

      {/* Button */}

      <Link
        to={`/profile/${student.id}`}
        className="block text-center mt-6 bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition"
      >
        View Profile
      </Link>

    </div>
  )
}

export default Skills