import Link from "next/link";

const Header = () => {
  return (
    <div className='justify-center items-center flex '>
      <div className='mx-auto m-10 flex'>
        <Link href='/telephoning1'>
          <h2 className='text-xl m-4'>Telephoning 1</h2>
        </Link>
        <Link href='/match-words'>
          <h2 className='text-xl m-4'>Email 1</h2>
        </Link>
        <Link href='/match-words'>
          <h2 className='text-xl m-4'>Reporting on Progress 1</h2>
        </Link>
      </div>
    </div>
  )
}
 
export default Header;