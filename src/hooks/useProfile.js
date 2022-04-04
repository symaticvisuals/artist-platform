import { useQuery } from "react-query";
// import getApi from "../utils/apis";
import { request } from "../utils/instance";

const onSuccess = (data) => {
  console.log("My profile data - "+data);
}
const onError = (error) => {
  console.log("My profile error - "+error);
}
export default function useProfile() {
  return useQuery("getmy-profile", () =>
    request({
      url: "/api/user/instructor",
      method: "GET",
    }),
    {
      onSuccess,
      onError,
      select: (data) => {
        const selectedData = data.data;
        return selectedData;
      }
    }
  );
}
