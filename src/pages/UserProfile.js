import { Box, Tab, Tabs, Typography, useMediaQuery } from "@material-ui/core";
import { useAtom } from "jotai";
import { atomWithHash } from "jotai/utils";
import PropTypes from "prop-types";



import { MyCourses } from "./UserProfile/MyCourses";


import ProfileSettings from "./UserProfile/ProfileSettings";
function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		"id": `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}
const userDashboardState = atomWithHash("dashboard", 0);
function UserProfile() {
	
	
	const [value, setValue] = useAtom(userDashboardState);

	const handleChange = (event, index) => {
		setValue(index);
	};
	
	const isXs = useMediaQuery((theme) => theme.breakpoints.down("xs"));
	return (
    <div style={{ marginBottom: "10vh" }}>
      <Box>
        <Box
          style={
            !isXs
              ? {
                  background: "linear-gradient(rgb(15, 15, 15), rgba(0, 0, 0))",
                  margin: "1em 4vw",
                  minHeight: "80vh",
                  borderRadius: "15px",
                }
              : {
                  background: "linear-gradient(rgb(15, 15, 15), rgba(0, 0, 0))",
                  margin: "1em 0",
                  minHeight: "80vh",
                  borderRadius: "15px",
                }
          }>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            variant="scrollable"
            scrollButtons="auto"
            style={{
              color: "white",
              textTransform: "none",
              padding: "1em 2em",
            }}>
            <Tab
              label="Profile Settings"
              {...a11yProps(0)}
              style={{
                textTransform: "none",
                fontFamily: "Sora",
              }}
            />
           
              <Tab
                label="My Courses"
                {...a11yProps(1)}
                style={{ textTransform: "none", fontFamily: "Sora" }}
              />
          
            
           
          </Tabs>
          <TabPanel value={value} index={0}>
            <ProfileSettings />
          </TabPanel>
		 
          <TabPanel value={value} index={1}>
            <MyCourses />
          </TabPanel>
		  
        </Box>
      </Box>
    </div>
  );
}
export default UserProfile;
