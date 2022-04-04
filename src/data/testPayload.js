const userOld = {
	success: true,
	data: {
		jwt: {
			success: true,
			data: "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NCwiZW1haWwiOiJzaGFyYWlzdW5ueUBnbWFpbC5jb20iLCJjcmVhdGVkQXQiOiIyMDIxLTA3LTI3VDE3OjQ5OjU4Ljg5NFoiLCJwaG9uZSI6Ijk4NzMwMDA5NjkiLCJleHBpcmVUaW1lIjoxNjYyNzM4NzUyNzAzfQ.PBgDjOsGX7tp1qGYVDkMYw7WZl5vUjyCotv27UbTXNI",
			err: "",
		},
		user: {
			id: 4,
			name: "Vishal Sharai",
			email: "sharaisunny@gmail.com",
			username: "vishalsharai",
			phone: "9873000969",
			image: null,
			inActive: false,
			countryCode: "+91",
			syncContact: false,
			roles: ["admin", "user"],
			nameSlug: null,
			localeCode: "en",
			countryId: 1,
			isEmailVerified: true,
			createdAt: "2021-07-27T17:49:58.894Z",
			updatedAt: "2021-07-27T17:49:58.894Z",
			deletedAt: null,
		},
	},
	error: "",
};

const userNew = {
	success: true,
	data: {
		email: "vishalsharai@gmail.com",
		name: "Vishal Sharai",
		newUser: 1,
	},
	error: "",
};
const waitlistedUser = {
  success: true,
  data: {
    userStatus: "waitlisted",
    message: "You are 10th user in the waitlist, we will contact you",
  },
  error: "",
};
const months = [
	"JAN",
	"FEB",
	"MAR",
	"APR",
	"MAY",
	"JUN",
	"JUL",
	"AUG",
	"SEP",
	"OCT",
	"NOV",
	"DEC",
];
const payload = {
  Course: {
    name: "csfdfsdfsdf",
    description: "dfsdfsdfsdfsdf",
    timePerWeek: "2",
    startDate: "2022-04-14T18:30:00.000Z",
    endDate: "2022-04-28T18:30:00.000Z",
    image: "",
    video: "",
    subCategoryId: "Theatre",
  },
  Sessions: [
    {
      name: "adsadasdas",
      description: "sdasdasdasdas",
      date: "2022-04-21T18:30:00.000Z",
      link: "sdasdasdasdas",
      order: "0",
    },
    {
      name: "sdasdasdas",
      description: "dasdasdasdas",
      date: "2022-04-20T18:30:00.000Z",
      link: "sdasdasdasdasdas",
      order: "1",
    },
  ],
};
export { userOld, payload, userNew, months, waitlistedUser };
