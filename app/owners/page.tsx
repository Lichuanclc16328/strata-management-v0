// app/owners/page.tsx
'use client'
import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'

const supabase = createClient(
  'https://vmueeybtjxkqumzftldv.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtdWVleWJ0anhrbXVtemZ0bGR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2ODg2MzMsImV4cCI6MjA2NDI2NDYzM30.g6TLb1Z2cOjghSxYs2GIGUxL7cwqGFNY2vVIO0tn2QI'
)

export default function OwnersPage() {
  const [owners, setOwners] = useState<any[]>([])

  useEffect(() => {
    async function fetchOwners() {
      const { data, error } = await supabase.from('owners').select()

      console.log("📦 fetched data:", data)
      console.log("⚠️ fetch error:", error)

      if (error) console.error(error)
      else setOwners(data)
    }

    fetchOwners()
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Owners List</h1>
      <ul>
        {owners.length === 0 ? (
          <li>No owners found.</li>
        ) : (
          owners.map((owner) => (
            <li key={owner.email}>{owner.name} ({owner.email})</li>
          ))
        )}
      </ul>
    </div>
  )
}

