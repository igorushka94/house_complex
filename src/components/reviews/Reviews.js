import "./Reviews.css";
import Buttons from "../buttons/Button";


function Reviews() {
    return (
        <div className="Reviews">
            <h3>Отзывы наших клиентов</h3>
                <div className="Reviews buttons">
                <Buttons direction="left" />
                <div className="Reviews item">
                    <div className="Reviews flex-block">
                        <div className="Reviews item-photo">
                            <img alt="avatar" width="60" height="60"></img>
                        </div>
                        <div className="Reviews block-initials">
                            <div className="Reviews item-sign">
                                Антон Антонов
                            </div>
                            <div className="Reviews item-social">
                                <a href="ya.ru">Страница VK</a>
                            </div>
                        </div>
                    </div>
                    <div className="Reviews item-review">
                        Современные технологии достигли такого уровня, что внедрение современных методик говорит о возможностях как самодостаточных, так и внешне зависимых концептуальных решений. Диаграммы связей объективно рассмотрены соответствующими инстанциями.
                    </div>
                </div>
                <Buttons direction="right" />
            </div>
        </div>
    );
}


export default Reviews;