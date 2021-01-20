import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer nRs0Xncxb1o2cbkTNhR62P_aNxOGKXiL57kguwnw8mALQltCSMdzAPo2FcnqawPdpGEYrV-8yFkVhUE9o4I157wnxwvBcBYWZXvkUzsIM_S21d5gUZQS_DUB8_vYXnYx'
    }
});

