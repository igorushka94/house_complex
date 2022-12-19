import "./Partners.css";
import Logos from "./Logos";
import { useEffect, useState } from "react";


function Partners() {

    const [ items, setItems] = useState([]);

    // useEffect(() => {
    //     fetch("http://127.0.0.1:8000/api/v1/partners/")
    //     .then(res => res.json())
    //     .then(
    //         (result) => {
    //             setItems(result);
    //         },
    //         (error) => {
    //             setItems(error);
    //         }
    //     )
    // }, [])

    // console.log(fetch("http://127.0.0.1:8000/api/v1/partners/")
    //      .then(res => res.json()))

    return (
        <div className="Partners">
            <div>
                <h2>Наши партнеры</h2>
            </div>
            <Logos />
        </div>
    );
}


export default Partners;
