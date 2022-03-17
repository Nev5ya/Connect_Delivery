import ChatList from "./ChatList/ChatList";
import {useSelector} from "react-redux";
import {selectCouriers} from "../../store/couriers/selector";
import Typography from "@mui/material/Typography";

export const Chat = () => {
    const couriers = useSelector(selectCouriers);

    return (
        <>
            <Typography variant="h6" >
                Список чатов
            </Typography>
            <ChatList couriers={couriers}/>
        </>
    );
};
