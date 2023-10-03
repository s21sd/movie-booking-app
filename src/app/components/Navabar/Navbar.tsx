import React from 'react'
import Image from 'next/image'
import { BiUserCircle, BiSearch } from 'react-icons/bi'
import { RiArrowDropDownFill } from 'react-icons/ri'
import logo from '../../assests/download.jpeg'
import Link from 'next/link'
import '../../components/Navabar/Navbar.css'
const Navbar = () => {
    return (
        <nav>
            <div className='left'>
                <Image src={logo} alt='logo' width={100} height={100} />
                <div className='searchBox'>
                    <BiSearch className="seach-icon"></BiSearch>
                    <input type='text' placeholder='Search for Movie' />

                </div>
            </div>
            <div className='right'>
                <p className='dropdown'>Mumbai <RiArrowDropDownFill clasName="dropicon"></RiArrowDropDownFill></p>
                <Link href="/" className='theme_btn1 linkstyleone'>Logout</Link>
                <Link href="/" className='linkstyleone'>
                    <BiUserCircle className="theme_icon1" />

                </Link>

            </div>
        </nav>
    )
}

export default Navbar