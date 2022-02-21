import React, {useState} from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { adviceAtom } from '../../atom/adviceAtom'
import { initialLoadingAtom } from '../../atom/initialLoadingAtom'
import { apiCall } from '../../utils/apiCall'
import { TailSpin } from 'react-loader-spinner'

const diceIcon = require('../../assets/icon-dice.svg')

const RefreshButton = () => {

  const initialLoading = useRecoilValue<boolean>(initialLoadingAtom)
  const [adviceSlip, setAdviceSlip] = useRecoilState<any>(adviceAtom)
  const [calling, setCalling] = useState<boolean>(false)

  const refreshAdvice = async() => {
      if(initialLoading) return
      await apiCall(
          calling,
          setAdviceSlip,
          setCalling
      )
  }

  const onButtonClick = () => {
      refreshAdvice()
    }

  return (
    <button
     className={
         (initialLoading) ? 
         'w-20 h-20 bg-[#cee3e9] flex justify-center items-center -mt-10 z-50 rounded-full' : 
         'w-20 h-20 bg-[#52ffa8] flex justify-center items-center -mt-10 z-50 rounded-full hover:shadow-[0px_0px_10px_10px_rgba(82,255,168,0.5)] transition-all ease-in-out'
     }
     onClick={onButtonClick}
     
    >
        {
            (calling) ? (
                <TailSpin color="#00BFFF" height={60} width={60} />
            ) : (
                <img src={diceIcon?.default?.src} className='w-1/3 h-1/3'/>
            )
        }
        
    </button>
  )
}

export default RefreshButton
