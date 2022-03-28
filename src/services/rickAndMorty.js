import axios from 'axios';

export const getAllCaracters = async (page = 1) => {
    return new Promise((resolve, reject) => {
        axios.get('https://rickandmortyapi.com/api/character/?page=' + page)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}