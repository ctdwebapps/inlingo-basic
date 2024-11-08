// components/LessonTypeSelect.tsx
'use client'

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from '@/components/ui/select'

interface LessonTypeSelectProps {
  onChange: (type: string) => void
}

const LessonTypeSelect: React.FC<LessonTypeSelectProps> = ({ onChange }) => {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className='w-[200px]'>
        <SelectValue placeholder='Select Lesson Type' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value='listening'>Listening</SelectItem>
          <SelectItem value='reading'>Reading</SelectItem>
          <SelectItem value='telephoning'>Telephoning</SelectItem>
          <SelectItem value='email'>Email</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default LessonTypeSelect
