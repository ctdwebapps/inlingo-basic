import { NextPage } from 'next'
import Template1 from '@/components/lessonTemplates/template1'

const Email1: NextPage = () => {
  const lessonData = {
    title: 'Business Email Communication',
    objectives: [
      'Understand the structure of a formal business email.',
      'Learn how to write polite and professional emails.',
      'Practice writing email responses to common business situations.',
    ],
    intro:
      "In this lesson, we will cover how to write clear and professional emails for business communication. You'll learn about the common structure of emails and how to be polite and concise in your writing.",
    readingOrListening:
      'Read the following email exchange between a manager and a client. Pay attention to the tone, structure, and formal language used in the email.',
    comprehensionQuestions: [
      'What is the purpose of the first email?',
      "How does the manager respond to the client's request?",
      'What polite phrases are used in the email?',
    ],
    controlledPractice: [
      'Write a formal email to a colleague asking for information.',
      'Respond to an email from a client thanking them for their inquiry and confirming the next steps.',
    ],
    languageReference:
      "Key email phrases include: 'Dear [Name],', 'I hope this email finds you well.', 'Please let me know if you need any further information.'",
    practiceSuggestions: [
      'Write an email requesting information from a client.',
      'Practice responding to emails in a professional and polite tone.',
      'Read business email templates and identify useful phrases.',
    ],
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <Template1 {...lessonData} />
    </div>
  )
}

export default Email1
