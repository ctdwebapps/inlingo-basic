import React from 'react'

// Define the types for the lesson props
type LessonProps = {
  title: string
  objectives: string[]
  intro: string
  readingOrListening: string
  comprehensionQuestions: string[]
  controlledPractice: string[]
  languageReference: string
  practiceSuggestions: string[]
}

const Template1: React.FC<LessonProps> = ({
  title,
  objectives,
  intro,
  readingOrListening,
  comprehensionQuestions,
  controlledPractice,
  languageReference,
  practiceSuggestions,
}) => {
  return (
    <div className='max-w-4xl mx-auto p-6 space-y-8'>
      <header className='text-center'>
        <h1 className='text-3xl font-bold text-gray-900'>{title}</h1>
      </header>

      <section className='bg-gray-100 p-6 rounded-lg shadow-md'>
        <h2 className='text-2xl font-semibold text-gray-800'>
          Lesson Objectives
        </h2>
        <ul className='list-disc pl-5 space-y-2'>
          {objectives.map((objective, index) => (
            <li key={index} className='text-gray-700'>
              {objective}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className='text-2xl font-semibold text-gray-800'>Introduction</h2>
        <p className='text-gray-700'>{intro}</p>
      </section>

      <section>
        <h2 className='text-2xl font-semibold text-gray-800'>
          Reading/Listening Activity
        </h2>
        <p className='text-gray-700'>{readingOrListening}</p>
      </section>

      <section className='bg-gray-100 p-6 rounded-lg shadow-md'>
        <h2 className='text-2xl font-semibold text-gray-800'>
          Comprehension Questions
        </h2>
        <ul className='list-disc pl-5 space-y-2'>
          {comprehensionQuestions.map((question, index) => (
            <li key={index} className='text-gray-700'>
              {question}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className='text-2xl font-semibold text-gray-800'>
          Controlled Practice
        </h2>
        <ul className='list-disc pl-5 space-y-2'>
          {controlledPractice.map((activity, index) => (
            <li key={index} className='text-gray-700'>
              {activity}
            </li>
          ))}
        </ul>
      </section>

      <section className='bg-gray-100 p-6 rounded-lg shadow-md'>
        <h2 className='text-2xl font-semibold text-gray-800'>
          Language Reference
        </h2>
        <p className='text-gray-700'>{languageReference}</p>
      </section>

      <section>
        <h2 className='text-2xl font-semibold text-gray-800'>
          Suggestions for Practice
        </h2>
        <ul className='list-disc pl-5 space-y-2'>
          {practiceSuggestions.map((suggestion, index) => (
            <li key={index} className='text-gray-700'>
              {suggestion}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Template1
