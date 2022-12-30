import "./Schedule.css";


function Schedule(props) {
    return (
        <div className="Schedule">
            <h2>График выполнения работ</h2>
            <div className="Shedule work">
                <table border="0.1" width="100%" cellSpacing="0">
                    <tr>
                        <th rowSpan="3">№ п/п</th>
                        <th rowSpan="3">Наименование работ и затрат</th>
                        <th>Сентябрь</th>
                        <th>Октябрь</th>
                        <th>Ноябрь</th>
                        <th>Декабрь</th>
                        <th>Январь</th>
                        <th>Февраль</th>
                        <th>Март</th>
                        <th>Апрель</th>
                        <th>Май</th>
                        <th>Июнь</th>
                        <th>Июль</th>
                        <th>Август</th>
                    </tr>
                    <tr>
                        <th>2021</th>
                        <th>2021</th>
                        <th>2021</th>
                        <th>2021</th>
                        <th>2021</th>
                        <th>2021</th>
                        <th>2021</th>
                        <th>2021</th>
                        <th>2021</th>
                        <th>2021</th>
                        <th>2021</th>
                        <th>2021</th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <th>1</th>
                        <th>1</th>
                        <th>1</th>
                        <th>1</th>
                        <th>1</th>
                        <th>1</th>
                        <th>1</th>
                        <th>1</th>
                        <th>1</th>
                        <th>1</th>
                        <th>1</th>
                    </tr>
                    <tr>
                        <td className="names_work paragraph">
                            2.2.2
                        </td>
                        <td className="names_work" colSpan="13">
                            {props.work_name}:
                        </td>
                    </tr>
                    <tr className="names_work_description">
                        <td>2.2.2.1</td>
                        <td className="names_work details">{props.work_description}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Schedule;
