import React from "react";
import TableRowItem from "./components/TableRowItem";

//Представление таблицы
const TableView = (props) => {

    return (
        <table className='table table-hover'>
            <thead>
            <tr>
                <th scope='col'>№</th>
                <th scope='col'>Имя</th>
                <th scope='col'>Фамилия</th>
                <th scope='col'>День рождения</th>
                <th scope='col'>Адрес электронной почты</th>
            </tr>
            </thead>
            <tbody>
            {
                props.data.map(item=> (
                    <TableRowItem
                        removeReader={props.removeReader}
                        reader = {item}
                    />
                ))
            }
            </tbody>
        </table>
    )

}

export default TableView;