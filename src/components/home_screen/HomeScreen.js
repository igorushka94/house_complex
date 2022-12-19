import "./HomeScreen.css";
import TittleButtons from "./TittleButtons";


function HomeScreen() {
    return(
        <div className="HomeScreen">
            <div className="HomeScreen part1">
                <TittleButtons count="1000" price="3 млн." region1="Западном районе" city="Ростова-на-Дону" />
            </div>
            <div className="HomeScreen part2"></div>
            <div className="HomeScreen part3"></div>
        </div>
    );
}


export default HomeScreen;