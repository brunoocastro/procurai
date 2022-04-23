import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Code: NextPage = () => {
  const router = useRouter()
  const { code } = router.query
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <p className='text-white'>Rastreando o código: {code}</p>
    </div>
  )
}

export default Code
