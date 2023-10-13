import axios from "axios";

const READER_REST_API_URL = 'http://localhost:7070/test-reader/all';

class TestReaderService {

    getReader() {
        return axios.get(READER_REST_API_URL);
    }
}

export default new TestReaderService();