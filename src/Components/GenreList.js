import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'

function GenreList({genreId,selectedGenresName}) {
    const [xyz, setGenreList] = useState([])
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        getGenreList();
    }, [])

    const getGenreList = () => {
        GlobalApi.getGenreList.then((resp) => {
            console.log(resp.data.results);
            setGenreList(resp.data.results);
        })
    }

    return (
        <div className=' sticky top-0 h-[100vh] overflow-auto hover:overflow-scroll no-scrollbar'>
            <h2 className=' text-[30px] font-bold dark:text-white'>Genre</h2>
            {
                xyz.map((item,index) => (
                    
                    <div onClick={()=>{setActiveIndex(index);genreId(item.id);selectedGenresName(item.name)
                    }} className={`flex gap-4 items-center mb-2 cursor-pointer hover:bg-gray-200 p-2 group rounded-lg hover:dark:bg-gray-500 ${activeIndex===index?"bg-gray-200 dark:bg-gray-500":null}`}>
                        <img src={item.image_background} className={`w-[40px] h-[40px] object rounded-lg py-[2px] group-hover:scale-125 transition- 
                                                                                                   all ease-out duration-300 ${activeIndex===index?"scale-125":null}`} />
                        <h3 className={`dark:text-white group-hover:font-bold scale-125 transition-all ease-out duration-300 ${activeIndex===index?"font-bold":null}`}>{item.name}</h3>
                    </div>
                ))
            }
        </div>
    )
}

export default GenreList
