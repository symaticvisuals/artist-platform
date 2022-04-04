import { FormControl, MenuItem, Select, TextField } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import StepperTheme from "../../theme/StepperTheme";
import { CourseDetailsContext } from "./CourseDialog";
import { category } from "../../data/categories";

const FormGroup = ({
	Id,

	Type,
	onChange,
	Placeholder,
	Value,
	defaultValue,
	Checked,
	defaultChecked,
	LabelProps,
	classes,
	Label,
	Rows,
	InputType,
	InputProps,
}) => {
	const { courseDetails } = React.useContext(CourseDetailsContext);

	return (
		<div className='form-group'>
			<ThemeProvider theme={StepperTheme}>
				{InputType === "select" ? (
					<div>
						<FormControl style={{ width: "100%" }}>
							<Select
								defaultValue='Art'
								id='grouped-select'
								value={courseDetails.category}
								onChange={onChange}
								variant='outlined'
								color='secondary'
								style={{ color: "white", width: "100%", marginTop: "15px" }}
								Placeholder='Select Category'
								displayEmpty
								IconComponent={() => (
									<KeyboardArrowDownIcon style={{ paddingRight: "10px" }} />
								)}
								classes={{ icon: classes.icon }}
							>
								<MenuItem value='' disabled>
									<em>Choose a Category</em>
								</MenuItem>
								{category.map((item, key) => (
									<MenuItem key={key} value={item.name}>
										{item.name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</div>
				) : (
					<TextField
						type={Type}
						className={classes}
						id={Id}
						name={Id}
						label={Label}
						onChange={onChange}
						placeholder={Placeholder}
						value={Value}
						variant='outlined'
						required
						color='secondary'
						defaultValue={defaultValue}
						checked={Checked}
						defaultChecked={defaultChecked}
						aria-describedby={Id + "Help"}
						multiline
						rows={Rows}
						InputLabelProps={{ className: LabelProps }}
						InputProps={InputProps}
					/>
				)}
			</ThemeProvider>
		</div>
	);
};
export default FormGroup;
