import React from "react";
import ReaderService from "../services/ReaderService";

class ReaderComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            readers: []
        }
    }

    componentDidMount() {
        ReaderService.getReaders().then((response) => {
            this.setState({readers: response.data})
        });
    }

    render() {
        return (
            <div>
                <table className='table table-hover'>
                    <thead>
                    <tr>
                        <th scope='col'>№</th>
                        <th scope='col'>Имя</th>
                        <th scope='col'>Фамилия</th>
                        <th scope='col'>Возраст</th>
                        <th scope='col'>Дата рождения</th>
                        <th scope='col'>Электронная почта</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.readers.map(
                            reader =>
                                <tr key={reader.id}>
                                    <td>{reader.id}</td>
                                    <td>{reader.firstName}</td>
                                    <td>{reader.lastName}</td>
                                    <td>{reader.gender}</td>
                                    <td>{reader.age}</td>
                                    <td>{reader.birthday}</td>
                                    <td>{reader.email}</td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ReaderComponent;


