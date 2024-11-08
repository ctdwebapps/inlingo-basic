// app/levels/[level]/layout.tsx
export default function LevelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='p-6'>
      <h2 className='text-2xl font-bold mb-4'>Level</h2>
      {children}
    </div>
  )
}
