import React from "react";
import ReaderService from "../services/ReaderService";
import TableRowItem from "../layouts/tableView/components/TableRowItem";

class ReaderComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            readers: []
        }
    }

    componentDidMount() {
        ReaderService.getReader().then((response) => {
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
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.readers.map(
                            reader =>
                                <tr key={reader.id}>
                                    <td>{ reader.id }</td>
                                    <td>{ reader.name }</td>
                                    <td>{ reader.lastName }</td>
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