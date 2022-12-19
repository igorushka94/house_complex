import './Menu.css';


function Menu() {
    return (
        <div className='Menu'>
            <a href='#' className='Menu-item'>О компании</a>
            <a href='#' className='Menu-item'>Новости</a>
            <a href='/documents' className='Menu-item'>Документы</a>
            <a href='#' className='Menu-item'>Контакты</a>
        </div>
    );
}


export default Menu;