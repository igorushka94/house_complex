import "./LogoButton.css";
import logo from "../../logo.svg";


function LogoButton() {
    return (
        <div className="LogoButton">
            <div className="Footer-logo">
                <img src={ logo } width="280" height="70" alt="logo"></img>
            </div>
            <div className="Footer-frame">
                <div className="Footer-questions-consultation">
                    <div className="Footer-questions">Остались вопросы?</div>
                    <div className="Footer-consultation">Закажите бесплатную консультацию</div>
                </div>
                <div className="Footer-button">
                    Заказать консультацию
                </div>
            </div>
        </div>
    );
}

export default LogoButton;
