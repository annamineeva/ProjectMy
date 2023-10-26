import { Link } from "react-router-dom"
import styles from "./style.module.css"

const Header = () => {

    return (
        <div> 
            <h1 className={styles.conteiner}><Link to = '/'>Доставка еды MIDAS</Link></h1>
            <ul className={styles.test}>
                <li><Link to = '/stocks'>Акция</Link></li>
                <li><Link to = '/menu'>Меню</Link></li>
                <li><Link to = '/contacts'>Контакты</Link></li>
            </ul>
            
        </div>
    )
}

export default Header