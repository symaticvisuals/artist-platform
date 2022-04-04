// import axios from "axios";
// import Cookies from "js-cookie";
import { useQuery } from "react-query";
// import getApi from "../utils/apis";
import { request } from "../utils/instance";

export default function useCourses() {
  return useQuery("courses", () =>
    request({
      url: "/api/course?size=4",
      method: "GET",
    })
  );
}
