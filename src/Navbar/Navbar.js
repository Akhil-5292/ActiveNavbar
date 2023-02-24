import { NavLink } from 'react-router-dom'
import style from './Navbar.module.css'

export default function Navbar(){
    return(
        <div className={style.wrapper}>
            <h3>Navbar</h3>
            <div className={style.link}>
                    <NavLink to='/Home'> Home</NavLink>
                
                
                    <NavLink to='/About'>About</NavLink>
                    
                
                    <NavLink to='/Contact'>Contact</NavLink>
                
                    <NavLink to='/Services'>Services</NavLink>
              </div>
        </div>
    )
}