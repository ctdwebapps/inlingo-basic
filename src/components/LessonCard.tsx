// components/LessonCard.tsx
import { Card } from '@/components/ui/card'

interface LessonCardProps {
  title: string
  description: string
}

const LessonCard: React.FC<LessonCardProps> = ({ title, description }) => (
  <Card className='p-4 mb-4'>
    <h3 className='text-xl font-semibold'>{title}</h3>
    <p>{description}</p>
  </Card>
)

export default LessonCard
