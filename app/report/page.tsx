"use client"
import { useState } from "react"

export default function ReportPage() {
  const [username, setUsername] = useState("")
  const [desc, setDesc] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch("/api/report-issue", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, description: desc })
    })
    const data = await res.json()
    alert(data.message)
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Report an Issue</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input type="text" placeholder="Your Name" value={username} onChange={e => setUsername(e.target.value)} className="border p-2 w-full" required />
        <textarea placeholder="Describe the issue..." value={desc} onChange={e => setDesc(e.target.value)} className="border p-2 w-full" required />
        <button type="submit" className="bg-red-600 text-white px-4 py-2">Submit Report</button>
      </form>
    </main>
  )
}