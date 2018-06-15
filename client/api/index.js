import axios from 'axios';

import { apiPrefix } from '../../etc/config.json';

export default {
    listNotes() {
        return axios.get(`${apiPrefix}/test`);
    },

    createNote(data) {
        return axios.post(`${apiPrefix}/test`, data);
    },

    deleteNote(noteId) {
        return axios.delete(`${apiPrefix}/test/${noteId}`);
    }
}
