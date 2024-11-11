import { NextPage } from 'next'
import Template1 from '@/components/lessonTemplates/template1'

const Telephoning1: NextPage = () => {
  const lessonData = {
    title: 'Business Telephoning Lesson',
    objectives: [
      'Learn how to introduce yourself on the phone.',
      'Practice asking for and leaving messages.',
      'Understand how to answer the phone politely.',
    ],
    intro:
      'In this lesson, we will learn the basics of answering and making business phone calls in English.',
    readingOrListening:
      'Listen to the following dialogue between a receptionist and a customer. Identify key phrases used in business telephoning.',
    comprehensionQuestions: [
      'Who is calling?',
      'What is the caller asking for?',
      'How does the receptionist respond?',
    ],
    controlledPractice: [
      'Practice calling a colleague and asking them to take a message.',
      'Role-play leaving a voicemail for a colleague.',
    ],
    languageReference:
      "Key phrases include: 'Can I speak to [Name]?', 'I’m sorry, [Name] is unavailable.', and 'Please leave a message.'",
    practiceSuggestions: [
      'Listen to recordings of business phone calls.',
      'Practice making and receiving phone calls with a partner.',
    ],
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <Template1 {...lessonData} />
    </div>
  )
}

export default Telephoning1
