import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/FirebaseUtils'
import './Header.scss'
import { ReactComponent as Logo } from './../../assets/crown.svg'

const Header = ({ user }) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
                <span className='title'>CROWN STORE | CLOTHING</span>
            </Link>

            <div className="options">
                <Link className="option" to='/shop'>
                    SHOP
                </Link>
                <Link className="option" to='/contact'>
                    CONTACT
                </Link>

                {
                    user ?
                        <div className="option" onClick={() => auth.signOut()}>LOGOUT</div> :
                        <Link className="option" to='/login'>
                            LOGIN
                        </Link>
                }
            </div>
        </div>
    )
}

export default Header
