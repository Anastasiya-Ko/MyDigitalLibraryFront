// import React from "react";
// import TableRowItem from "./components/TableRowItem";
//
// //Представление таблицы
// const TableView = (props) => {
//
//     return (
//         <table className='table table-hover'>
//             <thead>
//             <tr>
//                 <th scope='col'>№</th>
//                 <th scope='col'>Имя</th>
//                 <th scope='col'>Фамилия</th>
//             </tr>
//             </thead>
//             <tbody>
//             {
//                 props.data.map(item=> (
//                     <TableRowItem
//                         key={item.id}
//                         removeReader={props.removeReader}
//                         reader = {item}
//                     />
//                 ))
//             }
//             </tbody>
//         </table>
//     )
//
// }
//
// export default TableView;