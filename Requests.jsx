import { useState } from "react"
import Navbar from "../components/Navbar"

function Requests() {

  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "Manas prakash",
      skill: "React",
      message: "I can teach you React. Can you teach me Java?",
      status: "Pending"
    },
    {
      id: 2,
      name: "Anant raj",
      skill: "UI/UX Design",
      message: "I want to learn JavaScript from you.",
      status: "Pending"
    },
    {
     id: 3,
     name: "Shubham singh",
     skill:"python",
     message:"i want ot learn c++ from you",
     status:"pending"
    }
  ])

  const acceptRequest = (id) => {
    setRequests(
      requests.map((request) =>
        request.id === id
          ? { ...request, status: "Accepted" }
          : request
      )
    )
  }

  const rejectRequest = (id) => {
    setRequests(
      requests.map((request) =>
        request.id === id
          ? { ...request, status: "Rejected" }
          : request
      )
    )
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-12">

        <h1 className="text-4xl font-bold">
          Exchange Requests
        </h1>

        <p className="text-gray-400 mt-2">
          Manage students who want to exchange skills with you.
        </p>

        <div className="mt-10 space-y-5">

          {requests.map((request) => (

            <div
              key={request.id}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6"
            >

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-lg font-bold">
                    {request.name.charAt(0)}
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold">
                      {request.name}
                    </h2>

                    <p className="text-gray-400 text-sm">
                      Wants to exchange skills
                    </p>
                  </div>

                </div>

                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    request.status === "Accepted"
                      ? "bg-green-500/10 text-green-400"
                      : request.status === "Rejected"
                      ? "bg-red-500/10 text-red-400"
                      : "bg-yellow-500/10 text-yellow-400"
                  }`}
                >
                  {request.status}
                </span>

              </div>

              <div className="mt-5">

                <p className="text-gray-400 text-sm">
                  Skill
                </p>

                <p className="text-lg font-semibold mt-1">
                  {request.skill}
                </p>

              </div>

              <p className="text-gray-300 mt-4">
                "{request.message}"
              </p>

              {request.status === "Pending" && (

                <div className="flex gap-3 mt-6">

                  <button
                    onClick={() => acceptRequest(request.id)}
                    className="px-5 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold"
                  >
                    Accept
                  </button>

                  <button
                    onClick={() => rejectRequest(request.id)}
                    className="px-5 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold"
                  >
                    Reject
                  </button>

                </div>

              )}

            </div>

          ))}

        </div>

      </main>

    </div>
  )
}

export default Requests