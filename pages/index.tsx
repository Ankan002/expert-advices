import { useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import AdviceComponent from '../components/AdviceComponent'
import { useRecoilState } from 'recoil'
import { adviceAtom } from '../atom/adviceAtom'
import { initialLoadingAtom } from '../atom/initialLoadingAtom'
import { apiCall } from '../utils/apiCall'
import RefreshButton from '../components/RefreshButton'

const Home: NextPage = () => {

  const [initialLoading, setInitialLoading] = useRecoilState<any>(initialLoadingAtom)
  const [advice, setAdvice] = useRecoilState<any>(adviceAtom)

  const fetchData = async () => {
    await apiCall(
      initialLoading,
      setAdvice,
      setInitialLoading
    )
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#202632] p-5">
      <Head>
        <title>Expert Advices</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <AdviceComponent />
        <RefreshButton />
      </div>
    </div>
  )
}

export default Home
