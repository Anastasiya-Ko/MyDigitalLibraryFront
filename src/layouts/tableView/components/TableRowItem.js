import React from "react";

//React компонент
const TableRowItem = (props) => {

    return (
        <tr onClick={() => {props.removeReader(props.reader.id)}}>
            <th scope='row'>{ props.reader.id }</th>
            <th>{ props.reader.name }</th>
            <th>{ props.reader.lastName }</th>
            <th>{ props.reader.birthday }</th>
            <th>{ props.reader.email }</th>
        </tr>
    );
}

export default TableRowItem;