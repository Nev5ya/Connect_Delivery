import { Typography, Box } from '@mui/material';
import {MyButtonContained} from "../Button/button";

const OrderDescriptionModal = ({data, closeModal, setOption}) => {
    console.log('CourierRedact', data);

    const onClickHandle = () => {
        setOption('1');
        console.log('onClickHandle CourierRedact');
        closeModal();
    };

    return (
        <>
            <Box>
                <Typography variant='h6' component='h2'>
                    Название доставки: {data.name}
                </Typography>
                <Typography sx={{ pt: 1 }}>
                    Доставить до: {data.delivery_date}
                </Typography>
                <Typography sx={{ pt: 2 }}>
                    Адрес доставки: {data.address}</Typography>
                <Typography  sx={{ pt: 2 }}>
                    Назначенный курьер: {data.courier_name ? data.courier_name : 'Не назначен'}
                </Typography>
                <Typography  sx={{ pt: 2 }}>
                    Статус заказа: {data.status}
                </Typography>
                <Box sx={{ pt: 3 }}>
                    <MyButtonContained  text={'Перейти в чат'} onClick={onClickHandle}/>
                </Box>
            </Box>
        </>
    );
};

export default OrderDescriptionModal;