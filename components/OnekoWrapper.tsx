
'use client'

import { useEffect, useState } from 'react'
import OnekoCat from './OnekoCat'


export default function OnekoWrapper() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth > 768) {
      setShow(true)
    }
  }, [])

  if (!show) return null

  return (
    <div className="fixed bottom-2 right-2 z-50">
      <OnekoCat />
    </div>
  )
}
