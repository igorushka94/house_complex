import "./Popup.css";
import Api from "../../Api";
import { useState } from "react";


function Popup() {

    const [state, setState] = useState({
        error: false,
        orderRequested: true,
    });

    const [form, setForm] = useState({
        name: "Ваше имя",
        phone: "+7",
        defaultValue: true,
    });

    const validateData = (data) => {
        let name = data.name;
        let phone = data.phone;

        if (name === "" || name === "Ваше имя") {
            setState({
                ...state,
                error: true,
            })
        }
        if (phone === "") {
            setState({
                ...state,
                error: true,
            })
        }

    }

    const handleName = (e) => {
        setState({
            ...state,
            error: false,
        })
        setForm({
            ...form,
            name: e.target.value
        })
        console.log(form);
    }

    const handlePhone = (e) => {
        setForm({
            ...form,
            phone: e.target.value
        })
        console.log(form);
    }


    const closePopup = (e) => {
        console.log(e.target)
    }

    const sendForm = () => {
        handleFormSubmit(form);
    }

    const clearValue = (e) => {
        // Очищает поле имени
        if (form.defaultValue) {
            e.target.value = ""
            setForm({
                ...form,
                name: "",
                defaultValue: false
            })

        }
    }

    const handleFormSubmit = (data) => {
        console.log("handleFormSubmit", data)

        let is_valid = validateData(data)

        if (is_valid) {
            let response = Api.createOrder(data)
            if (response.status === "success") {
                console.log("Заявка оформлена");
                setState((state) => {
                    state.orderRequested = true;
                })
            } else {
                console.log("Упс! Что то пошло не так!");
            }
        }
    }

    return(
        <div className="Popup">
            <div className={ state.orderRequested ? "Popup-done" : "Popup-done invisible"}>
                <div className="Popup-done-icon">
                    <i id="icon-done">&#10003;</i>
                </div>
                <h2>Заявка оформлена!</h2>
                <p>Наши специалисты свяжутся с вами в ближайшее время</p>
            </div>
            <div className={ !state.orderRequested ? "Popup-creating" : "Popup-creating invisible"}>
                <h2>Бесплатная консультация</h2>
                <p>Оставьте заявку и наши специалисты свяжутся с Вами в ближайшее время</p>
                <form id="popup-form" onSubmit={ handleFormSubmit }>
                    <input id="name" className={ state.error ? "input-field input-error" : "input-field" } type="text" autoComplete="off" defaultValue={form.name} onClick={ clearValue } onChange={ handleName }/>
                    <input id="phone" className={ state.error ? "input-field input-error" : "input-field" } name="phone" type="tel" autoComplete="off" defaultValue={form.phone} onChange={ handlePhone } pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                </form>
                <div className="Popup-btns">
                    <span id="send-popup" onClick={ sendForm }>Отправить</span>
                    <span id="close-popup" onClick={ closePopup }>Закрыть</span>
                </div>
            </div>
        </div>
    );
}

export default Popup;
