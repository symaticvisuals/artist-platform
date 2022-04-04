import section1 from "../images/section-1.png";
import section2 from "../images/section-2.png";
import section3 from "../images/section-3.png";

import aimage1 from "../images/sessions/art/image1.png";
import aimage2 from "../images/sessions/art/image2.png";
import aimage3 from "../images/sessions/art/image3.png";

import timage1 from "../images/sessions/theatre/image1.png";
import timage2 from "../images/sessions/theatre/image2.png";
import timage3 from "../images/sessions/theatre/image3.png";

import dimage1 from "../images/sessions/dance/image1.png";
import dimage2 from "../images/sessions/dance/image2.png";
import dimage3 from "../images/sessions/dance/image3.png";

import mimage1 from "../images/sessions/music/image1.png";
import mimage2 from "../images/sessions/music/image2.png";
import mimage3 from "../images/sessions/music/image3.png";

import fimage1 from "../images/filters/1.jpg";
import fimage2 from "../images/filters/2.jpg";
import fimage3 from "../images/filters/3.jpg";
import fimage4 from "../images/filters/4.jfif";
import fimage5 from "../images/filters/5.jpg";
import fimage6 from "../images/filters/6.jpg";

import vishal from '../images/vishal.png';
import yash from '../images/yash.png';


const homePage = {
  "title": "Filter Content by Categories",
  categories: [
    {
      "title": "Art",
      color: "rgba(169, 22, 255,1)",
      "image": aimage1,
    },
    {
      "title": "Dance",
      color: "rgba(230, 91, 50,1)",
      "image": dimage1,
    },
    {
      "title": "Painting",
      color: "rgba(31, 70, 252,1)",
      "image": aimage3,
    },
    {
      "title": "Theatre",
      color: "rgba(164, 0, 251,1)",
      "image": timage2,
    },
  ],
  courses: [
    {
      "title": "Design Masterclass Course",
      "description": "Lorem ipsum dolor sit amet, consectetur.",
      "author": "Vera Cooke",
      "image": aimage1,
    },
    {
      "title": "Fitness For Beginners (2020)",
      "description": "Lorem ipsum dolor sit amet, consectetur.",
      "author": "Tilda Greene",
      "image": timage2,
    },
    {
      "title": "The Secrets To Teaching Online",
      "description": "Lorem ipsum dolor sit amet, consectetur.",
      "author": "Ray Walker",
      "image": mimage3,
    },
    {
      "title": "The Design Mastery (2020)",
      "description": "Lorem ipsum dolor sit amet, consectetur.",
      "author": "Don Pope",
      "image": aimage3,
    },
    {
      "title": "Art - Learn Today",
      "description": "Lorem ipsum dolor sit amet, consectetur.",
      "author": "Thora Rogers",
      "image": aimage2,
    },
    {
      "title": "The Art Program",
      "description": "Lorem ipsum dolor sit amet, consectetur.",
      "author": "Lisa Hicks",
      "image": dimage1,
    },
  ],
};
const data = [
  {
    "title": "Trending Today",
    courses: [
      {
        "title": "Art For Beginners (2021)",
        "description": "Lorem ipsum dolor sit amet, consectetur.",
        "author": "Jane Austin",
        "image": aimage1,
      },
      {
        "title": "Art: Solid Foundation",
        "description": "Lorem ipsum dolor sit amet, consectetur.",
        "author": "Jane Austin",
        "image": aimage2,
      },
      {
        "title": "Art - Learn Today",
        "description": "Lorem ipsum dolor sit amet, consectetur.",
        "author": "Jane Austin",
        "image": aimage3,
      },
      {
        "title": "The Art Program",
        "description": "Lorem ipsum dolor sit amet, consectetur.",
        "author": "Jane Austin",
        "image": aimage1,
      },
      {
        "title": "The Complete Art Course 2021",
        "description": "Lorem ipsum dolor sit amet, consectetur.",
        "author": "Jane Austin",
        "image": aimage2,
      },
      {
        "title": "Mastering Art In 2021",
        "description": "Lorem ipsum dolor sit amet, consectetur.",
        "author": "Jane Austin",
        "image": aimage3,
      },
    ],
  },
  {
    "title": "Most Loved by Teenagers",
    courses: [
      {
        "title": "Theatre Certification (Accredited)",
        "description": "Lorem ipsum dolor sit amet, consectetur.",
        "author": "Jane Austin",
        "image": timage1,
      },
      {
        "title": "Learn Art And Level Up Your Career",
        "description": "Lorem ipsum dolor sit amet, consectetur.",
        "author": "Jane Austin",
        "image": timage2,
      },
      {
        "title": "Theatre For Absolute Beginners - Hands On",
        "description": "Lorem ipsum dolor sit amet, consectetur.",
        "author": "Jane Austin",
        "image": timage3,
      },
      {
        "title": "The Theatre Mastery (2021)",
        "description": "Lorem ipsum dolor sit amet, consectetur.",
        "author": "Jane Austin",
        "image": timage1,
      },
      {
        "title": "Theatre | Certification Program [2021]",
        "description": "Lorem ipsum dolor sit amet, consectetur.",
        "author": "Jane Austin",
        "image": timage2,
      },
      {
        "title": "Theatre Exam Prep 2021",
        "description": "Lorem ipsum dolor sit amet, consectetur.",
        "author": "Jane Austin",
        "image": timage3,
      },
    ],
  },
  {
    "title": "Latest Features",
    courses: [
      {
        "title": "Dance Workshop (2021)",
        "description": "Lorem ipsum dolor sit amet, consectetur.",
        "author": "Jane Austin",
        "image": dimage1,
      },
      {
        "title": "Dance - Complete Certificate Course",
        "description": "Lorem ipsum dolor sit amet, consectetur.",
        "author": "Jane Austin",
        "image": dimage2,
      },
      {
        "title": "Dancing - Learn Today",
        "description": "Lorem ipsum dolor sit amet, consectetur.",
        "author": "Jane Austin",
        "image": dimage3,
      },
      {
        "title": "Learn How To Dance - Ultimate Course (2021)",
        "description": "Lorem ipsum dolor sit amet, consectetur.",
        "author": "Jane Austin",
        "image": dimage1,
      },
      {
        "title": "Dance - Learn All The Secrets 2021",
        "description": "Lorem ipsum dolor sit amet, consectetur.",
        "author": "Jane Austin",
        "image": dimage2,
      },
      {
        "title": "Ultimate Dancing Course",
        "description": "Lorem ipsum dolor sit amet, consectetur.",
        "author": "Jane Austin",
        "image": dimage3,
      },
    ],
  },
  {
    "title": "Worth to Explore",
    courses: [
      {
        "title": "Learn Music | Certification Program [2021]",
        "description": "Lorem ipsum dolor sit amet, consectetur.",
        "author": "Jane Austin",
        "image": mimage1,
      },
      {
        "title": "Learn Music Masterclass: Beginners To Advanced",
        "description": "Lorem ipsum dolor sit amet, consectetur.",
        "author": "Jane Austin",
        "image": mimage2,
      },
      {
        "title": "Learn Sing 101: Everything You Wanted To Know",
        "description": "Lorem ipsum dolor sit amet, consectetur.",
        "author": "Jane Austin",
        "image": mimage3,
      },
      {
        "title": "Learning Music | The Complete Course",
        "description": "Lorem ipsum dolor sit amet, consectetur.",
        "author": "Jane Austin",
        "image": mimage1,
      },
      {
        "title": "Learn Music | Certification Program [2021]",
        "description": "Lorem ipsum dolor sit amet, consectetur.",
        "author": "Jane Austin",
        "image": mimage2,
      },
      {
        "title": "Learning Music | The Complete Course",
        "description": "Lorem ipsum dolor sit amet, consectetur.",
        "author": "Jane Austin",
        "image": mimage3,
      },
    ],
  },
];

const sessions = {
  teacher: "Jane Austin",
  "description":
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  designation: "Dance Coach 5+ Years of Experience",
  lectures: [
    {
      "title": "Session-1",
      intro: "Complete intro to the course",
      summary:
        "Cupidatat commodo nisi ullamco incididunt laborum minim incididunt consequat. Est nostrud tempor ad ad velit ea cillum excepteur velit mollit reprehenderit tempor. Aliqua deserunt irure fugiat cillum ea anim laboris ex enim. Officia eiusmod dolor labore velit sunt nostrud excepteur id labore deserunt.",
      progress: "Completed",
      status: "2hrs 45 mins",
    },
    {
      "title": "Session-2",
      intro: "Complete intro to the course",
      summary:
        "Cupidatat commodo nisi ullamco incididunt laborum minim incididunt consequat. Est nostrud tempor ad ad velit ea cillum excepteur velit mollit reprehenderit tempor. Aliqua deserunt irure fugiat cillum ea anim laboris ex enim. Officia eiusmod dolor labore velit sunt nostrud excepteur id labore deserunt.",
      progress: "In Progress",
      status: "2hrs 45 mins",
    },
    {
      "title": "Session-3",
      intro: "Complete intro to the course",
      summary:
        "Cupidatat commodo nisi ullamco incididunt laborum minim incididunt consequat. Est nostrud tempor ad ad velit ea cillum excepteur velit mollit reprehenderit tempor. Aliqua deserunt irure fugiat cillum ea anim laboris ex enim. Officia eiusmod dolor labore velit sunt nostrud excepteur id labore deserunt.",
      progress: "Not Watched",
      status: "Live",
    },
    {
      "title": "Session-4",
      intro: "Complete intro to the course",
      summary:
        "Cupidatat commodo nisi ullamco incididunt laborum minim incididunt consequat. Est nostrud tempor ad ad velit ea cillum excepteur velit mollit reprehenderit tempor. Aliqua deserunt irure fugiat cillum ea anim laboris ex enim. Officia eiusmod dolor labore velit sunt nostrud excepteur id labore deserunt.",
      progress: "Not Watched",
      status: "Locked",
    },
    {
      "title": "Session-5",
      intro: "Complete intro to the course",
      summary:
        "Cupidatat commodo nisi ullamco incididunt laborum minim incididunt consequat. Est nostrud tempor ad ad velit ea cillum excepteur velit mollit reprehenderit tempor. Aliqua deserunt irure fugiat cillum ea anim laboris ex enim. Officia eiusmod dolor labore velit sunt nostrud excepteur id labore deserunt.",
      progress: "Not Watched",
      status: "Locked",
    },
  ],
};

const sections = [
  {
    "title": `Daily live workshops`,
    "description":
      "Learn something new everyday through our interactive workshops. At 4Art you can find lessons in Dance, Music, Acting, Painting, Yoga and many more.",
    "image": section1,
  },
  {
    "title": `Missed a session? No worries!`,
    "description":
      "Do not worry if you have missed a session, we upload all our live sessions which you can access at any point of time. T&C Apply",
    "image": section2,
  },
  {
    "title": `Making art accessible`,
    "description":
      "Join a workshop from anywhere, through our website or find a 4art hub near you to join an offline group workshop!",
    "image": section3,
  },
];
const filters = [
  { "title": "Art", "image": fimage1 },
  { "title": "Dance", "image": fimage2 },
  { "title": "Theatre", "image": fimage3 },
  { "title": "Music", "image": fimage4 },
  { "title": "Yoga", "image": fimage5 },
  { "title": "Classical", "image": fimage6 },
];

const teacherExperience = [
  {
    author: "VISHAL PAWAR",
    designation: "Co-Founder and Head",
    experience:
      "Meet Vishal, the Head, and co-founder of 4ART. With an academic background in Business Administration from IP University, he has always found solace on the stage since the age of seven. As an active member of various dramatics groups, Acting for him isn’t just the sheer expression of oneself but also the medium that breaks language barriers and brings the earthlings closer. For him, the act and the art are an escape from the real world whose depths have made him more passionate about living life as great as ever. Carrying the same torch he aspires to ignite the flame amongst the ones whose art has succumbed to the societal pressures and is buried in the small aching corners of their heart. He has a dream of connection, of a bond made through art.",
    image: vishal,
  },
  {
    author: "YASH",
    designation: "Co-Founder and Head",
    experience:
      "Meet Yash, the Head, and co-founder of 4ART. With being conferred a Postgraduate degree in Acting from Jamia Millia Islamia, he is the salt of the earth. As a firm believer in the innate behavior of the learning process, he appreciates the cultural history and the modern-day adaptations of Art and further makes it an impetus for his growth. His calm and balanced approach towards life, in general, is a reflection of the understanding he holds of the subject matter. Acting for him has not only shaped him but has also instilled in him the grasps of the working of the world. Building the same passion he welcomes everyone from the farthest corners of the country on this journey of self-exploration through art. He has a dream of connection, of a bond made through art.",
    image: yash,
  },
];

const reviews = [
  {
    name: "Jane Austin",
    designation: "Laboris eu nulla magna et id",
    "description":
      "Incididunt ex sint ut aute. Consectetur amet magna nostrud et consectetur duis magna adipisicing ea magna. Sint incididunt irure fugiat occaecat. Eu velit elit qui id anim commodo eiusmod culpa fugiat magna esse enim nisi. Incididunt id anim eu velit voluptate eu ad id et labore culpa officia pariatur ut.",
    rating: "4",
  },
  {
    name: "Jane Austin",
    designation: "Laboris eu nulla magna et id",
    "description":
      "Incididunt ex sint ut aute. Consectetur amet magna nostrud et consectetur duis magna adipisicing ea magna. Sint incididunt irure fugiat occaecat. Eu velit elit qui id anim commodo eiusmod culpa fugiat magna esse enim nisi. Incididunt id anim eu velit voluptate eu ad id et labore culpa officia pariatur ut.",
    rating: "5",
  },
  {
    name: "Jane Austin",
    designation: "Laboris eu nulla magna et id",
    "description":
      "Incididunt ex sint ut aute. Consectetur amet magna nostrud et consectetur duis magna adipisicing ea magna. Sint incididunt irure fugiat occaecat. Eu velit elit qui id anim commodo eiusmod culpa fugiat magna esse enim nisi. Incididunt id anim eu velit voluptate eu ad id et labore culpa officia pariatur ut.",
    rating: "4",
  },
  {
    name: "Jane Austin",
    designation: "Laboris eu nulla magna et id",
    "description":
      "Incididunt ex sint ut aute. Consectetur amet magna nostrud et consectetur duis magna adipisicing ea magna. Sint incididunt irure fugiat occaecat. Eu velit elit qui id anim commodo eiusmod culpa fugiat magna esse enim nisi. Incididunt id anim eu velit voluptate eu ad id et labore culpa officia pariatur ut.",
    rating: "5",
  },
];

const myCourses = [
  {
    heading: "The Yoga Bootcamp",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    "image": "",
    status: "Continue Learning",
  },
  {
    heading: "Learn Yoga - Ultimate Course (2021)",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    "image": "",
    status: "Start Course",
  },
  {
    heading: "Foundation MasterClass: Yoga For Beginners",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    "image": "",
    status: "Start Course",
  },
  {
    heading: "The Complete Guide To Yoga 2021",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    "image": "",
    status: "Start Course",
  },
  {
    heading: "Learn Yoga - Ultimate Course (2021)",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    "image": "",
    status: "Start Course",
  },
  {
    heading: "Foundation MasterClass: Yoga For Beginners",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    "image": "",
    status: "Start Course",
  },
];

export {
  data,
  filters,
  homePage,
  reviews,
  sections,
  sessions,
  teacherExperience,
  myCourses,
};
