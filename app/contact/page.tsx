"use client"
import { useState } from "react"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thank you, ${name}! We’ll contact you at ${email}.`)
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} className="border p-2 w-full" required />
        <input type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} className="border p-2 w-full" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">Submit</button>
      </form>
    </main>
  )
}