// app/levels/[level]/lessons/[lessonType]/page.tsx
import LessonCard from '@/components/LessonCard'

interface LessonPageProps {
  params: { level: string; lessonType: string }
}

const LessonPage = ({ params }: LessonPageProps) => {
  const { level, lessonType } = params

  // Sample data; ideally fetched from a CMS or database
  const lessons = [
    {
      title: 'Basic Greetings',
      description: 'Learn how to greet people in simple sentences.',
    },
    {
      title: 'Asking Directions',
      description: 'Learn phrases for asking directions.',
    },
  ]

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold mb-4'>
        {lessonType} Lessons - {level.toUpperCase()}
      </h1>
      {lessons.map((lesson, index) => (
        <LessonCard
          key={index}
          title={lesson.title}
          description={lesson.description}
        />
      ))}
    </div>
  )
}

export default LessonPage
