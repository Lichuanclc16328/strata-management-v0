"use client"
import { useEffect, useState } from "react"

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState([])

  useEffect(() => {
    fetch("/api/announcements")
      .then(res => res.json())
      .then(data => setAnnouncements(data.announcements))
  }, [])

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Community Announcements</h1>
      <ul className="space-y-2">
        {announcements.map((item, index) => (
          <li key={index} className="border p-4 rounded shadow">
            <h2 className="font-semibold">{item.title}</h2>
            <p>{item.message}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}