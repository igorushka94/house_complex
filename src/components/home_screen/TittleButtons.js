import "./TittleButtons.css"


function TittleButtons(props) {
    return(
        <div className="TitleButtons">
            <div className="TitleButtons-title">
                Более {props.count} комфортных <br />квартир от {props.price} рублей в <br /> {props.region1} {props.city}
            </div>
            <div className="TitleButtons-buttons">
                <div id="choise-btn">Выбрать квартиру</div>
                <div id="consultation-btn">Получить консультацию</div>
            </div>
        </div>
    );
}


export default TittleButtons;