import {Box, useMediaQuery} from "@material-ui/core";
import TeacherCard from "./TeacherCards/TeacherCard";
import TeacherCardSm from "./TeacherCards/TeacherCardSm";

function TeacherCardLayout(props) {
    const isSm = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    return (
        <Box>
            {isSm
                ? (
                    <TeacherCardSm classes={props.classes} item={props.item}/>
                )
                : (
                    <TeacherCard classes={props.classes} item={props.item}/>
                )}
        </Box>
    );
}

export default TeacherCardLayout;
