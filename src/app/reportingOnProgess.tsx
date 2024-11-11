import { NextPage } from 'next'
import Template1 from '@/components/lessonTemplates/template1'

const ReportingLessonPage: NextPage = () => {
  const lessonData = {
    title: 'Reporting on Progress',
    objectives: [
      'Learn how to report progress on a project or task.',
      'Understand the structure of a progress report.',
      'Practice writing progress updates for your team or manager.',
    ],
    intro:
      'In this lesson, we will focus on how to report on your progress at work. You will learn how to structure a progress report and what language to use to give clear and concise updates.',
    readingOrListening: (
      <div>
        <h3 className='font-semibold text-lg mb-2'>Sample Progress Report</h3>
        <p className='text-gray-700 mb-4'>
          *Subject: Weekly Progress Report - Project X*
        </p>
        <p className='text-gray-700 mb-4'>
          Dear [Manager&apos;s Name],
          <br />I hope you are doing well. Below is my progress update on
          Project X:
        </p>

        <div className='mb-4'>
          <h4 className='font-semibold mb-2'>Progress:</h4>
          <ul className='list-disc pl-5 text-gray-700'>
            <li>We have completed the initial research phase.</li>
            <li>
              The team has started designing the prototypes for the new product.
            </li>
            <li>
              We have received positive feedback from the client regarding the
              initial concept.
            </li>
          </ul>
        </div>

        <div className='mb-4'>
          <h4 className='font-semibold mb-2'>Challenges:</h4>
          <ul className='list-disc pl-5 text-gray-700'>
            <li>
              We faced a delay in receiving some important data from the
              supplier, which set us back by 2 days.
            </li>
            <li>
              There are still some unresolved technical issues with the design.
              We are working closely with the engineering team to address this.
            </li>
          </ul>
        </div>

        <div className='mb-4'>
          <h4 className='font-semibold mb-2'>Next Steps:</h4>
          <ul className='list-disc pl-5 text-gray-700'>
            <li>
              We plan to complete the final design and move to production by the
              end of next week.
            </li>
            <li>
              I will be meeting with the supplier on Monday to discuss the delay
              and ensure that it doesn&apos;t affect our timeline.
            </li>
          </ul>
        </div>

        <p className='text-gray-700 mb-4'>
          Please let me know if you need any further information or have any
          questions.
          <br />
          Best regards,
          <br />
          [Your Name]
        </p>
      </div>
    ),
    comprehensionQuestions: [
      'What progress has been made on the project?',
      'What challenges are mentioned in the report?',
      'What are the next steps outlined in the report?',
    ],
    controlledPractice: [
      'Write a progress report for a project you are currently working on.',
      'Provide an update on a task you’ve completed recently, including what was achieved and what challenges you encountered.',
    ],
    languageReference:
      "Key phrases include: 'As of today, we have...', 'The project is on track.', 'We encountered a few challenges, such as...', 'The next step is to...', 'I will complete the task by...'.",
    practiceSuggestions: [
      'Write a weekly progress report for your manager.',
      'Use online resources to review sample progress reports.',
      'Practice reporting on progress in a meeting or video call.',
    ],
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <Template1 {...lessonData} />
    </div>
  )
}

export default ReportingLessonPage
