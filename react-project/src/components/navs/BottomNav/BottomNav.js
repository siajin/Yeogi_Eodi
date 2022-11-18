import { FaSubway } from 'react-icons/fa';
import { BiBus } from 'react-icons/bi'
import { AiFillStar } from 'react-icons/ai'
import './BottomNav.css'

const BottomNav = () => {
    return (
        <nav className="wrapper">
            <div><AiFillStar /></div>
            <div><AiFillStar /></div>
            <div><BiBus /></div>
            <div><FaSubway /></div>
        </nav>
    )
}

export default BottomNav;