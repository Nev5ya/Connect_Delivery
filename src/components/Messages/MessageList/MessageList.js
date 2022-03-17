
import Typography from "@mui/material/Typography";
import {Box} from "@mui/system";


export const MessageList = ({chatCurrent}) => {

    return (
        <Box sx={{ml: 8}}>
            <Typography variant="h6" >
                Сообщения чата {chatCurrent.name}
            </Typography>

        </Box>
    );
};
