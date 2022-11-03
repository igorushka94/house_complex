import './Header.css';
import Logo from './Logo';
import Menu from './Menu';
import NumberShedule from './NumberShedule';


function Header() {
    return (
        <div className='Header'>
            <Logo />
            <Menu />
            <NumberShedule 
                number={"+7-999-223-71-31"}
                shedule={"Пн-Пт с 09:00 до 18:00; Сб, Вс - Выходной"}
                /> 
        </div>
    );
}

export default Header;