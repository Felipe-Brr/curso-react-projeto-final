import {Link} from 'react-router-dom'
import Company from '../pages/Company'
import Contact from '../pages/Contact'
import Home from '../pages/Home'

import Container from './Container'

import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'
import Projects from '../pages/Projects'

function Navbar(){

    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to='/' element={<Home/>} >
                    <img src={logo} alt="Costs" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to='/' element={<Home/>} >Home</Link></li>
                    <li className={styles.item}><Link to='/projects' element={<Projects/>} >Meus Projetos</Link></li>
                    <li className={styles.item}><Link to='/contact' element={<Contact/>} >Empresa</Link></li>
                    <li className={styles.item}><Link to='/company' element={<Company/>} >Contato</Link></li>
                </ul>
            </Container>
        </nav>
    )
}
export default Navbar