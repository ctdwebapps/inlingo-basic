// components/LevelSelect.tsx
'use client'

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from '@/components/ui/select'

interface LevelSelectProps {
  onChange: (level: string) => void
}

const LevelSelect: React.FC<LevelSelectProps> = ({ onChange }) => {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className='w-[200px]'>
        <SelectValue placeholder='Select Level' />
      </SelectTrigger>
      <SelectContent className='absolute mt-1 z-10 w-full bg-white shadow-lg'>
        <SelectGroup>
          <SelectItem value='A1'>A1</SelectItem>
          <SelectItem value='A2'>A2</SelectItem>
          <SelectItem value='B1'>B1</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default LevelSelect
