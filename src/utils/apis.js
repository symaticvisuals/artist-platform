/**
 *
 * @param {String} url Provide the endpoint
 * @returns API
 */

import Cookies from "js-cookie";
import { makeAxiosRequest } from "./axios";

const getApi = (url) => {
	return `https://dev.4art.in/${url}`;
};

export const imageUploadService = async (url, file) => {
	const formData = new FormData();
	formData.append("file", file);

	makeAxiosRequest(
		getApi(url),
		"GET",
		{
			"Content-Type": "multipart/form-data",
			"Authorization": Cookies.get("jwt"),
		},
		formData
	);
};
export default getApi;
