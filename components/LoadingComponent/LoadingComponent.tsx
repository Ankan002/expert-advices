import React from 'react'
import { TailSpin } from  'react-loader-spinner'

const LoadingComponent = () => {
  return (
    <div className='w-full h-full flex justify-center items-center m-5'>
        <TailSpin color="#52ffa8" height={80} width={80} />
    </div>
  )
}

export default LoadingComponent