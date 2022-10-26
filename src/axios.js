import axios from "axios";
import { baseurl } from "./BlockData/constans";

const instance = axios.create({
    baseURL: baseurl
})


export default instance;
