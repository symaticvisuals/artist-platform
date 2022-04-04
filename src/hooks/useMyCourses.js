// import axios from "axios";
// import Cookies from "js-cookie";
import { useQuery } from "react-query";
// import getApi from "../utils/apis";
import { request } from "../utils/instance";

export default function useMyCourses() {
  
    
  return useQuery("my-courses-instructor", () =>
    request({
      url: "/api/course/instructor?size=1&page=1",
      method: "GET",
    })
  );
}
