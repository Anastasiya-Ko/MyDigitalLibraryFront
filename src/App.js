import './App.css';
import TableView from "./layouts/tableView/TableView";
import React, {useState, useEffect} from "react";
import FormNewItem from "./layouts/formNewItem/FormNewItem";
import axios from "axios";
//useState - хук, который принимает изначальное состояние объекта и возвращает массив из двух значений:текущее значение и функцию,меняющую это набор данных

//Базовый компонент
function App() {

    //внедрили хук, позволяющий отслеживать состояние массива.
    //это нужно для того, чтобы были видны новые добавленные читатели при нажатии кнопки добавления
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:7070/reader/all?offset=3&limit=5&sort=BIRTHDAY_DESC')
            .then(res => {
                const data = [];

                res.data.content.forEach(item => {
                    data.push({
                            name: item.name,
                            lastName: item.lastName,
                            birthday: item.birthday,
                            email: item.email
                        }
                    )
                })
                setItems(data);
            })
    }, [])


    const appendReader = (name, lastName, birthday, email) => {
        const currentId = 0;
        const temp = {
            id: currentId,
            name: name,
            lastName: lastName,
            birthday: birthday,
            email: email
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
                    <TableView data={items} removeReader={removeReader}/>
                    <FormNewItem appendReader={appendReader}/>
                </div>
            </div>
        </div>
    );
}

export default App;
