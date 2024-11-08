// app/page.tsx
'use client'

import { useRouter } from 'next/navigation'
import LevelSelect from '@/components/LevelSelect'
import LessonTypeSelect from '@/components/LessonTypeSelect'
import { useState } from 'react'
import { Button } from '@/components/ui/button' // Ensure you have a Button component

const HomePage = () => {
  const router = useRouter()
  const [level, setLevel] = useState<string>('A1')
  const [lessonType, setLessonType] = useState<string>('listening')

  const handleNavigation = () => {
    router.push(`/levels/${level}/lessons/${lessonType}`)
  }

  return (
    <div className='p-6 flex'>
      <h1 className='text-2xl font-bold mb-4'>Language Learning App</h1>
      <div className='mb-4 flex  space-y-4'>
        <LevelSelect onChange={setLevel} />
        <LessonTypeSelect onChange={setLessonType} />
      </div>
      <Button onClick={handleNavigation} className='mt-4'>
        Go to {level} {lessonType} Lessons
      </Button>
    </div>
  )
}

export default HomePage
