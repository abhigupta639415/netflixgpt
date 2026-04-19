import React, { useRef } from 'react'
import Language from '../utility/Language'
import { useDispatch, useSelector } from 'react-redux'
import client from "../utility/openai" 
import {API_OPTIONS} from "../utility/constant"
import {addGptMovies} from "../utility/gptSlice"

const GptSearchBar = () => {
    const dispatch = useDispatch() ;
    const language = useSelector(store => store.config.lang)
    const searchText = useRef(null)
    const searchMovies = async (movie)=>{
        const data = await fetch(
            "https://api.themoviedb.org/3/search/movie?query="
            +movie+
            "&include_adult=false&language=en-US&page=1" ,
            API_OPTIONS
        )
        const json = await data.json() 
        return  json.results ;
    }

    const handleGptSearch = async () => {
        console.log(searchText.current.value)
    
        const gptInfo = "Act as a Movies Recommendation system, suggest some movies for the query: "
            + searchText.current.value
            + " Only give me name of 5 movies,comma separated like: eg - Sholay, Gaddar, KGF, Dhurandar, Kalki"

        const gptResults = await client.chat.completions.create({  
            model: "openai/gpt-4o-mini",  // 
            messages: [
                {
                    role: "user",
                    content: gptInfo
                }
            ]
            
        });
        const gptMovies = gptResults.choices[0].message.content.split(",");
        console.log(gptMovies)
        const promiseArray = gptMovies.map((movie)=>searchMovies(movie)) ;
        const tmdbResults = await Promise.all(promiseArray) ;

        dispatch(addGptMovies({ movieName: gptMovies, movieResults: tmdbResults }));
        console.log(tmdbResults)
    
    }

    return (
        <div className='pt-[8%] flex justify-center'>
            <form className='w-1/2 bg-black grid grid-cols-12 rounded-lg'
                onSubmit={(e) => e.preventDefault()}>
                <input type="text"
                    ref={searchText}
                    placeholder={Language[language]?.gptPlaceholder}
                    className='p-4 m-3 col-span-10 rounded-lg'
                />
                <button type='submit' className='bg-red-700 py-2 px-4 text-white m-3 col-span-2 rounded-xl'
                    onClick={handleGptSearch}>
                    {Language[language]?.search}
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar ;