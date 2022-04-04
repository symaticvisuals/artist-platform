import axios from "axios";
import { useQuery } from "react-query";
import getApi from "../utils/apis";
export default function useLogin() {
	return useQuery("login", (tokenId) => {
		axios
			.post(getApi("api/user/googleLogin"), { data: { tokenId: tokenId } })
			.then((res) => {
				return res.data;
			});
	});
}
