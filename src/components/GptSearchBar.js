import React from 'react'
import Language from '../utility/Language'
import { useSelector } from 'react-redux'
const GptSearchBar = () => {
    const language = useSelector(store=> store.config.lang)
  return (
    <div className='pt-[8%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12 rounded-lg'>
            <input type="text"
             placeholder={Language[language]?.gptPlaceholder} 
             className='p-4 m-3 col-span-10 rounded-lg'
             />
            <button type='submit' className='bg-red-700 py-2 px-4 text-white m-3 col-span-2 rounded-xl'>{Language[language]?.search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar