import {
	Box,
	Grid,
	makeStyles,
	Typography,
	useMediaQuery,
} from "@material-ui/core";

import { sections } from "../../data/dataSource";

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: "8vh",
		[theme.breakpoints.down("md")]: {
			marginTop: "4vh",
			textAlign: "center",
			padding: "0 1.2vw",
		},
	},
	content: {
		marginBottom: "2vh",
		[theme.breakpoints.down("xs")]: {
			fontSize: "1.7rem",
		},
	},
	description: {
		marginBottom: "2vh",
		[theme.breakpoints.down("xs")]: {
			fontSize: "1rem",
		},
	},
}));
export default function Section() {
	const isMd = useMediaQuery((theme) => theme.breakpoints.down("md"));
	const classes = useStyles();
	return (
		<Box className={classes.root}>
			{sections.map((content, idx) => {
				if (isMd) {
					return (
						<div key={idx}>
							<Box className={classes.root}>
								<Box>
									<Box>
										<Typography>
											<Typography variant='h2' component={"h2"} className={classes.content}>
												{content.title}
											</Typography>
											<Typography variant='h6' component={"h6"} className={classes.description}>
												{content.description}
											</Typography>
										</Typography>
									</Box>

									<Box
										style={{
											height: "30vh",
											borderRadius: "10px",
											backgroundImage: `url(${content.image})`,
											maxWidth: "100%",
											maxHeight: "100%",
											backgroundSize: "contain",
											backgroundRepeat: "no-repeat",
										}}
									></Box>
								</Box>
							</Box>
						</div>
					);
				} else {
					if (idx % 2) {
						return (
              <Grid container spacing={2} className={classes.root}>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  style={{
                    padding: "12px 12px 12px 0px",
                    borderRadius: "0 35px 35px 0",
                  }}>
                  <Box
                    style={{
                      height: "60vh",
                      borderRadius: "0 30px 30px 0",
                      backgroundImage: `url(${content.image})`,
                      maxWidth: "100%",
                      maxHeight: "100%",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                    }}></Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  style={{
                    padding: "0 6vw 0 5vw",
                    display: "flex",
                    alignItems: "center",
                  }}>
                  <Typography>
                    <Typography
                      variant="h2"
                      component={"h2"}
                      style={{ marginBottom: "2vh" }}>
                      {content.title}
                    </Typography>
                    <Typography variant="h6" component={"h6"}>
                      {content.description}
                    </Typography>
                  </Typography>
                </Grid>
              </Grid>
            );
					} else {
						return (
							<Grid container spacing={2} className={classes.root}>
								<Grid
									item
									xs={12}
									sm={6}
									style={{
										padding: "0 6vw 0 5vw",
										display: "flex",
										alignItems: "center",
									}}
									className={classes.content}
								>
									<Typography>
										<Typography variant='h2' component={"h2"} style={{ marginBottom: "2vh" }}>
											{content.title}
										</Typography>
										<Typography variant='h6' component={"h6"}>{content.description}</Typography>
									</Typography>
								</Grid>
								<Grid
									item
									xs={12}
									sm={6}
									style={{
										padding: "12px 0 12px 12px",
										borderRadius: "35px 0 0 35px",
									}}
								>
									<Box
										style={{
											height: "60vh",
											borderRadius: "30px 0 0 30px",
											backgroundImage: `url(${content.image})`,
											maxWidth: "100%",
											maxHeight: "100%",
											backgroundSize: "contain",
											backgroundRepeat: "no-repeat",
										}}
									></Box>
								</Grid>
							</Grid>
						);
					}
				}
			})}
		</Box>
	);
}
