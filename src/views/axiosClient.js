/** @format */
import axios from "axios";

const axiosClient = axios.create({
	baseURL:
		"https://reqres.in/api/users",
});

export default axiosClient;
