import React from 'react'
import Image from 'next/image'
import { celebCardTypes } from '@/app/types/types'
import './CelebCard.css'
const CelebCard = (data: celebCardTypes) => {
    return (
        <div className='celebcard'>
            <Image src={data.imageUrl} alt={data.name} width={100} height={100} />
            <h3>{data.name}</h3>
            <h3>{data.role}</h3>
        </div>
    )
}

export default CelebCard