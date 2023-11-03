"use client"
import React from 'react'
import './BuyTicket.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// import DatePicker from "react-horizontal-datepicker";

const page = () => {
  const pathname = usePathname();
  const movie = {
    movieName: "Javan",
    date: new Date(),
    language: 'Hindi',
    type: 'Action/Thriller',
    screen: [
      {
        name: 'Screen 1',
        location: 'PVR Cinemas Forum mall Lucknow'
      },
      {
        name: 'Screen 2',
        location: 'PVR Cinemas Forum mall Lucknow'
      },
      {
        name: 'Screen 3',
        location: 'PVR Cinemas Forum mall Lucknow'
      }
    ]

  }
  // const selectDate = (val: any) => {
  //   console.log(val);
  // };
  return (
    <div className='buytickets'>
      <div className='s1'>
        <div className='head'>
          <h1>{movie.movieName} - {movie.language}</h1>
          <h3>{movie.type}</h3>
        </div>
        {/* Horizontal date Puicker */}

      </div>
      <div className='screens'>
        {
          movie.screen.map((screen, index) => {
            return (
              <div className='screen'>
                <div>
                  <h2>{screen.name}</h2>
                  <h3>{screen.location}</h3>
                </div>
                <Link href={`${pathname}/${screen.name}`} className='theme_btn1 linkstylenone'>Select</Link>
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default page
