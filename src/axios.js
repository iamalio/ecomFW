import axios from "axios";

const instance = axios.create({
//this is API URL(cloud function)
    baseURL: "https://us-central1-fishwrangler-life.cloudfunctions.net/api"
    // this is for local "http://localhost:5001/fishwrangler-life/us-central1/api"
});

export default instance;

