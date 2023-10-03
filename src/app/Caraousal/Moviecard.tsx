import React from 'react'
import { MovieCardType } from '../types/types'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { BsFillStarFill } from 'react-icons/bs'
import '../Caraousal/MoviesCard.css'
import { url } from 'inspector';
const Moviecard = (data: MovieCardType) => {
    const router = useRouter();
    const city = "mumbai"
    const { title, imgUrl, _id, rating, type } = data;  // Destructuring the data
    return (
        <div className='movieCard' onClick={() => {
            router.push(`${city}/movies/${title}`)   // With this I can use the dynammic routing
        }}>
            <div className='movieImg'
                style={{
                    backgroundImage: `url(${imgUrl})`
                }}
            >
                <p className='rating'>
                    <BsFillStarFill className='star' />&nbsp;&nbsp;
                    {rating}/10</p>

            </div>

            <div className='details'>
                <p className='title'>
                    {title}
                </p>
                <p className='type'>
                    {type}
                </p>
            </div>
        </div>
    )
}

export default Moviecard