import "./Social.css";
import telegramm from "./assets/img/telegramm.svg";
import instagramm from "./assets/img/instagramm.svg";
import vk from "./assets/img/vk.svg";


function Social() {

    const scrollToTop = () => {
        if (document.body.scrollTop > 0  || document.documentElement.scrollTop > 0)
        window.scroll(0, -window.innerHeight);
    }


    return (
        <div className="Social">
            <div className="Social-document-links">
                <div className="Social-document-links-items">Политика конфиденциальности</div>
                <div className="Social-document-links-items">Документы</div>
            </div>
            <div className="Social-icon">
                <img src={ vk } alt="vk" />
                <img src={ telegramm } alt="telega" />
                <img src={ instagramm } alt="inst" />
                <div className="Social-up-button" onClick={ scrollToTop }>^</div>
            </div>
        </div>
    );
}

export default Social;
