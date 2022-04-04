import { createSlice } from "@reduxjs/toolkit";

const publishDetailsSlice = createSlice({
  name: "publish",
  initialState: {
    Course: {
      name: "",
      description: "",
      timePerWeek: 1,
      startDate: "",
      endDate: "",
      image: "",
      video: "",
      subCategoryId: "",
    },
    Sessions: {
      0: {
        title: "",
        description: "",
        date: new Date().toDateString(),
        link: "",
      },
    },
    currentSession: 0,
    valueCheck: false,
  },
  reducers: {
    //set the course details to the redux
    setCourse: (state, action) => {
      const newCourse = {
        ...action.payload,
      };
      state.Course.name = newCourse.title;
      state.Course.description = newCourse.description;
      state.Course.timePerWeek = newCourse.timePerWeek;
      state.Course.startDate = newCourse.startDate;
      state.Course.endDate = newCourse.endDate;
      state.Course.subCategoryId = newCourse.category;
      state.Course.timePerWeek = newCourse.sessions;
    },
    setSessions: (state, action) => {
      //session details for the course
      const newSession = { ...action.payload };
      //checking if the session exists or not and then registering the session
      if (state.Sessions[newSession.order] && newSession.order !== 0) {
        state.Sessions[newSession.order].name = newSession.title;
        state.Sessions[newSession.order].description = newSession.description;
        state.Sessions[newSession.order].date = newSession.date;
        state.Sessions[newSession.order].link = newSession.link;
      } else {
        state.Sessions[newSession.order] = {
          name: newSession.title,
          description: newSession.description,
          date: newSession.date,
          link: newSession.link,
        };
      }
    },
    //set the current session
    setCurrentSession: (state, action) => {
      state.currentSession = action.payload;
    },
    setValueCheck: (state, action) => {
      state.valueCheck = action.payload;
    },
  },
});
export const { setCourse, setSessions, setCurrentSession, setValueCheck } =
  publishDetailsSlice.actions;
export default publishDetailsSlice.reducer;
