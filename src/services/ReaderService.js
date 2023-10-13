import axios from "axios";

const ALL_READERS_URL = 'http://localhost:7070/reader/all';

class ReaderService {

    getReaders() {
        return axios.get(ALL_READERS_URL);
    }

    /*
    *  createEmployee(employee){
        return axios.post(EMPLOYEE_BASE_REST_API_URL, employee)
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
    }

    updateEmployee(employeeId, employee){
        return axios.put(EMPLOYEE_BASE_REST_API_URL + '/' +employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
    }*/
}

export default new ReaderService();