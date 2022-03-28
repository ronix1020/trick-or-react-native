import axios from 'axios';

const apiKey = 'RAGMM41icS1zm7dcPcjZMMYPWHn3EIzh';
const urlWeather = 'http://dataservice.accuweather.com';

// obtenemos la información del clima de una ciudad por su id
export const getWeaterById = async (id) => {
    return new Promise ((resolve, reject) => {
        axios.get(`${urlWeather}/currentconditions/v1/${id}`, {
            params: {
                language: 'es-sv',
                apikey: apiKey,
            }
        })
        .then(response => {
            // console.log('Esta es la respuesta que obtenemos: ',response.data);
            resolve(response.data[0]);
        }
        )
        .catch(error => {
            console.log('Este es el error que obtenemos: ',error);
            reject(error);
        }
        );
    })
}

export const searchCityByName = async ( nameCity ) => {
    return new Promise ((resolve, reject) => {
        axios.get(`${urlWeather}/locations/v1/cities/search`, {
            params: {
                q: nameCity,
                language: 'en-us',
                apikey: apiKey,
            }
        })
        .then(response => {
            // console.log('Esta es la respuesta que obtenemos: ',response.data);
            resolve(response.data[0]);
        }
        )
        .catch(error => {
            console.log('Este es el error que obtenemos: ',error);
            reject(error);
        }
        );
    })
}