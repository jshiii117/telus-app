import axios from 'axios';

const subscriberUrl = 'http://localhost:5000/ims/subscriber';

export const getSubscriber = (number) => 
    axios
    .get(`${subscriberUrl}/${number}`, {responseType: 'json'})
    .then(function (response) { return response.data[0];})
    .catch((error) => {console.log(`Axios error: ${error.message}`)});

export const putSubscriber = (number, body) => 
    axios
    .put(`${subscriberUrl}/${number}`, body)
    .catch((error) => {console.log(`Axios error: ${error.message}`)});

export const deleteSubscriber = (number) => {
    axios
    .delete(`${subscriberUrl}/${number}`)
    .catch((error) => {console.log(`Axios error: ${error.message}`)});
}