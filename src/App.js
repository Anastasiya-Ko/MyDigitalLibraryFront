import './App.css';
import TableView from "./layouts/tableView/TableView";
import React, {useState, useEffect} from "react";
import FormNewItem from "./layouts/formNewItem/FormNewItem";
import axios from "axios";
import ReaderComponent from "./components/ReaderComponent";
//useState - хук, который принимает изначальное состояние объекта и возвращает массив из двух значений:текущее значение и функцию,меняющую это набор данных
//useEffect помогает выполнять побочные действия в функциональном компоненте
//Базовый компонент
function App() {

    //внедрили хук, позволяющий отслеживать состояние массива.
    //это нужно для того, чтобы были видны новые добавленные читатели при нажатии кнопки добавления
    const [items, setItems] = useState([]);

    // useEffect(() => {
    //     axios.get('http://localhost:7070/test-reader/all')
    //         .then(res => {
    //             const data = [];
    //
    //             res.data.forEach(item => {
    //                 data.push(
    //                     {
    //                         name: item.name,
    //                         lastName: item.lastName
    //                     }
    //                 )
    //             })
    //             setItems(data);
    //         })
    // }, []);

    const appendReader = (name, lastName) => {
        const currentId = 0;
        const temp = {
            id: currentId,
            name: name,
            lastName: lastName,
        };
        setItems([...items, temp])
    }

    const removeReader = (id) => {
        setItems(items.filter(item => item.id !== id))
    }

    return (
        <div className='container mt-5'>
            <div className='card'>
                <div className='card-header'>
                    <h1>Список читателей библиотеки</h1>
                </div>
                <div className='card-body'>
                    {/*<TableView data={items} removeReader={removeReader}/>*/}
                    {/*<FormNewItem appendReader={appendReader}/>*/}
                    <ReaderComponent />
                </div>
            </div>
        </div>
    );
}

export default App;
