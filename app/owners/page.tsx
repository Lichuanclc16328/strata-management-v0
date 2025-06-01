// app/owners/page.tsx
'use client'
import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'

const supabase = createClient(
  'https://vmueeybtjxkqumzftldv.supabase.co',
  '你的 anon key'
)

export default function OwnersPage() {
  const [owners, setOwners] = useState<any[]>([])

  useEffect(() => {
    async function fetchOwners() {
      const { data, error } = await supabase.from('owners').select()
      if (error) console.error(error)
      else setOwners(data)
    }

    fetchOwners()
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Owners List</h1>
      <ul>
        {owners.map((owner) => (
          <li key={owner.email}>{owner.name} ({owner.email})</li>
        ))}
      </ul>
    </div>
  )
}
