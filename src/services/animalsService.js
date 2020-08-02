import apiUtil from '../utils/api';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000';

const buildURL = apiPath => {
    return BACKEND_URL + apiPath;
}

export default {
    async getAll() {
        try {
            const response = await apiUtil.get(buildURL('/animals'));
            return response.data;
        } catch(err) {
            console.log(err);
            return [];
        }
    },
    async create (animal) {
        const response = await apiUtil.post(buildURL('/animals'), animal);
        return response.data;
    },
    async delete (id) {
        const response = await apiUtil.delete(buildURL(`/animals/${id}`));
        return response.data;
    },
    async updateCompletionStatus (id, isCompleted) {
        const response = await apiUtil.update(buildURL(`/animals/${id}`), isCompleted);
        return response.data;
    }
}