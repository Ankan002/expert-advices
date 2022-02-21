import React from 'react'
import LoadingComponent from '../LoadingComponent'
import { useRecoilValue } from 'recoil'
import { initialLoadingAtom } from '../../atom/initialLoadingAtom'
import { adviceAtom } from '../../atom/adviceAtom'


const dividerImage = require('../../assets/pattern-divider-desktop.svg')

const AdviceComponent = () => {

  const initialLoading = useRecoilValue<boolean>(initialLoadingAtom)
  const adviceSlip = useRecoilValue<any>(adviceAtom)

  return (
    <div 
     className={
         (initialLoading) ? 
         'min-h-[50%] xl:w-1/3 lg:w-1/2 md:w-2/3 sm:w-2/3 w-full bg-[#4e5d73] p-5 py-16 flex justify-center items-center rounded-xl shadow-[0_15px_30px_10px_rgba(78,93,115,0.3)] relative' : 
         'min-h-[50%] xl:w-1/3 lg:w-1/2 md:w-2/3 sm:w-2/3 w-full bg-[#4e5d73] p-5 py-15 flex justify-center items-center rounded-xl shadow-[0_15px_30px_10px_rgba(78,93,115,0.3)] relative flex-col'
    }
    >
        {
            (initialLoading) ? (
                <LoadingComponent />
            ) : (
                <div className='w-full h-full flex flex-col py-10 justify-center items-center'>
                    <h3 className='text-sm font-fira-code text-[#52ffa8] tracking-[0.6em] text-center'>
                        {'ADVICE #'+adviceSlip?.id}
                    </h3>
                    <h1 className='mt-6 text-[28px] font-manrope text-center text-[#cee3e9]'>
                        {adviceSlip?.advice}
                    </h1>
                    <img src={dividerImage?.default?.src} className='w-[100%] mt-10 mb-2' />
                </div>
            )
        }
        
    </div>
  )
}

export default AdviceComponent