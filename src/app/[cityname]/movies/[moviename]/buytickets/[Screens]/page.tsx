"use client"
import { time } from 'console'
import './selectseat.css'
import React, { useState } from 'react'

const page = () => {
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

    const screen = {
        name: "Screen 1",
        location: "PVR Cinemas Forum mall Lucknow",
        timeslots: [
            {
                time: '10:00 AM',
                seats: [
                    {
                        type: 'Platinum',
                        rows: [
                            {
                                rowname: 'H',
                                cols: [
                                    {

                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 1
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 2
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 3
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 1
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 2
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 3
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 3
                                            },

                                        ]
                                    }
                                ]
                            },
                            {
                                rowname: 'G',
                                cols: [
                                    {

                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 1
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 2
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 3
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 1
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 1
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 1
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 1
                                            },


                                        ]
                                    }
                                ]
                            },
                            {
                                rowname: 'I',
                                cols: [
                                    {

                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 1
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 2
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 3
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 1
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 2
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 3
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 3
                                            },

                                        ]
                                    }
                                ]
                            }
                        ],
                        price: 500
                    },
                    {
                        type: 'Silver',
                        rows: [
                            {
                                rowname: 'F',
                                cols: [
                                    {

                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 1
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 2
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 3
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 1
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 2
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 3
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 3
                                            },

                                        ]
                                    }
                                ]
                            },
                            {
                                rowname: 'G',
                                cols: [
                                    {

                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 1
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 2
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 3
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 1
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 2
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 3
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 3
                                            },
                                        ]
                                    }
                                ]
                            }, {
                                rowname: 'H',
                                cols: [
                                    {

                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 1
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 2
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 3
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 1
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 2
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 3
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 3
                                            },
                                        ]
                                    }
                                ]
                            }
                        ],
                        price: 1000
                    },
                    {
                        type: 'Gold',
                        rows: [
                            {
                                rowname: 'I',
                                cols: [
                                    {

                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 1
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 2
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 3
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 1
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 2
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 3
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 3
                                            },

                                        ]
                                    }
                                ]
                            },
                            {
                                rowname: 'J',
                                cols: [
                                    {

                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 1
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 2
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 3
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 1
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 2
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 3
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 3
                                            },

                                        ]
                                    }
                                ]
                            },
                            {
                                rowname: 'K',
                                cols: [
                                    {

                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 1
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 2
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 3
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 1
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 2
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 3
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 3
                                            },

                                        ]
                                    }
                                ]
                            }
                        ],
                        price: 2000
                    }
                ]

            },
            {
                time: '12:00 PM',
                seats: [
                    {
                        type: 'Platinum',
                        rows: [
                            {
                                rowname: 'H',
                                cols: [
                                    {

                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 1
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 2
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 3
                                            }

                                        ]
                                    }
                                ]
                            }
                        ],
                        price: 500
                    },
                    {
                        type: 'Silver',
                        rows: [
                            {
                                rowname: 'F',
                                cols: [
                                    {

                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 1
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 2
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 3
                                            }

                                        ]
                                    }
                                ]
                            }
                        ],
                        price: 1000
                    },
                    {
                        type: 'Gold',
                        rows: [
                            {
                                rowname: 'G',
                                cols: [
                                    {

                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 1
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 2
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 3
                                            }

                                        ]
                                    }
                                ]
                            }
                        ],
                        price: 2000
                    }
                ]

            },
            {
                time: '6:00 PM',
                seats: [
                    {
                        type: 'Platinum',
                        rows: [
                            {
                                rowname: 'H',
                                cols: [
                                    {

                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 1
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 2
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 3
                                            }

                                        ]
                                    }
                                ]
                            }
                        ],
                        price: 500
                    },
                    {
                        type: 'Silver',
                        rows: [
                            {
                                rowname: 'F',
                                cols: [
                                    {

                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 1
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 2
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 3
                                            }

                                        ]
                                    }
                                ]
                            }
                        ],
                        price: 1000
                    },
                    {
                        type: 'Gold',
                        rows: [
                            {
                                rowname: 'G',
                                cols: [
                                    {

                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 1
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 2
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 3
                                            }

                                        ]
                                    }
                                ]
                            }
                        ],
                        price: 2000
                    }
                ]

            }, {
                time: '11:00 AM',
                seats: [
                    {
                        type: 'Platinum',
                        rows: [
                            {
                                rowname: 'H',
                                cols: [
                                    {

                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 1
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 2
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 3
                                            }

                                        ]
                                    }
                                ]
                            }
                        ],
                        price: 500
                    },
                    {
                        type: 'Silver',
                        rows: [
                            {
                                rowname: 'F',
                                cols: [
                                    {

                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: 1
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 2
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 3
                                            }

                                        ]
                                    }
                                ]
                            }
                        ],
                        price: 1000
                    },
                    {
                        type: 'Gold',
                        rows: [
                            {
                                rowname: 'G',
                                cols: [
                                    {

                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 1
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 2
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 3
                                            }
                                            , {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 1
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 2
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 3
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: 3
                                            }


                                        ]
                                    }
                                ]
                            }
                        ],
                        price: 2000
                    }
                ]

            }

        ]
    }

    const generateSeatLayout = () => {
        const x = screen.timeslots.findIndex((t: any) => t.time === selecttime.time);

        return screen.timeslots[x].seats.map((seattype, index) => (
            <div className='seat-type' key={index}>
                <h2>{seattype.type}- Rs. {seattype.price}</h2>
                <div className='seat-rows'>
                    {
                        seattype.rows.map((row, rowIndex) => (
                            <div key={rowIndex} className='seat-row'>
                                <p className='rowname'>
                                    {row.rowname}
                                </p>

                                <div className='seat-cols'>
                                    {
                                        row.cols.map((col, colIndex) => (
                                            <div key={colIndex} className='seat-cols'>
                                                {
                                                    col.seats.map((seat, seatIndex) => (
                                                        <div key={seatIndex}>
                                                            {
                                                                seat.status == 'available' &&
                                                                <span className={selectedSeats.find((s: any) => {
                                                                    return s.row === row.rowname && s.seat_id == seat.seat_id && s.col == col.seats
                                                                }) ? 'seat-selected' : 'seat-available'}
                                                                    onClick={() => selectedseat({
                                                                        row: row.rowname,
                                                                        col: colIndex,
                                                                        seat_id: seat.seat_id,
                                                                        price: seattype.price
                                                                    })}
                                                                >
                                                                    {seatIndex + 1}
                                                                </span>
                                                            }
                                                            {
                                                                seat.status == 'not-available' &&
                                                                <span className='seat-unavailable'>
                                                                    {seatIndex + 1}
                                                                </span>
                                                            }
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        ))
    }
    const [selecttime, setselectTime] = useState<any>(screen.timeslots[0]);
    const [selectedSeats, setSelectedSeats] = useState<any[]>([
        {
            "row": "H",
            "col": 0,
            "seat_id": 1,
            "price": 500
        },
        {
            "row": "H",
            "col": 0,
            "seat_id": 2,
            "price": 500
        }
    ])
    const selectedseat = (seat: any) => {
        // console.log(seat);
        const isselected = selectedSeats.findIndex((s: any) => {
            return s.row === seat.row && s.col && seat.col && s.seat_id === seat.seat_id
        })
        if (isselected) {
            setSelectedSeats(selectedSeats.filter((s: any) => s.seat_id !== seat.seat_id))
        }
        else {
            setSelectedSeats([...selectedSeats, seat])
        }
    }
    return (
        <div className='selectseatpage'>
            <div className='s1'>

                <div className='head'>
                    <h1>{movie.movieName}-{movie.language}</h1>
                    <h3>{movie.type}</h3>
                </div>
            </div>

            <div className='selectseat'>
                <div className='timecont'>
                    {
                        screen.timeslots.map((time: any, index: number) => (

                            <h3 key={index} className={selecttime.time === time.time ? 'time_selected' : 'time'} onClick={() => [
                                setselectTime(time)
                            ]}>
                                {time.time}
                            </h3>
                        ))
                    }
                </div>
                <div className='indicators'>
                    <div>
                        <span className='seat-unavailable'></span>
                        <p>Not available</p>
                    </div>
                    <div>
                        <span className='seat-available'></span>
                        <p>Available</p>
                    </div>
                    <div>
                        <span className='seat-selected'></span>
                        <p>Selected</p>
                    </div>
                </div>
                {generateSeatLayout()}
                <div className='totalcont'></div>

            </div>


        </div>
    )
}

export default page
