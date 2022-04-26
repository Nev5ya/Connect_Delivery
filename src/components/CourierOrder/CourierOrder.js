import * as React from "react";
import {useState} from "react";

import {Box, Paper, TableContainer, Table, TableCell, TableRow, Button, Typography} from "@mui/material";

import ModalWindow from "../ModalWindow/ModalWindow";
import CourierDeliveredModal from "../CourierDeliveredModal/CourierDeliveredModal";

export const CourierOrder = ({order}) => {

    let [openModal, setOpenModal] = useState(false);
    const closeModal = () => {
        setOpenModal(false);
    };

    const onClickHandle = () => {
        // console.log('onClickHandle CourierOrder');
        setOpenModal(true);
    };

    return (
        <>
            <Paper elevation={3} sx={{p: 2}}>
                {order ?
                    <>
                        <TableContainer>
                            <Table>
                                <TableRow>
                                    <TableCell>
                                        ID:
                                    </TableCell>
                                    <TableCell>
                                        {order.id}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        Название заказа:
                                    </TableCell>
                                    <TableCell>
                                        {order.name}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        Адрес доставки:
                                    </TableCell>
                                    <TableCell>
                                        {order.address}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        Комментарий:
                                    </TableCell>
                                    <TableCell>
                                        {order.comment}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        Статус:
                                    </TableCell>
                                    <TableCell>
                                        {order.status} ({order.order_status_id})
                                    </TableCell>
                                </TableRow>
                            </Table>
                        </TableContainer>
                        <Box sx={{mt: 4, mb: 2, display: 'flex'}}>
                            <Box sx={{flexGrow: 1}}/>
                            {(order.order_status_id === 3)
                                ? <Button
                                    disabled
                                    variant={'contained'}
                                    onClick={onClickHandle}
                                >Доставлено</Button>
                                : <Button
                                    variant={'contained'}
                                    onClick={onClickHandle}
                                >Доставлено</Button>
                            }
                        </Box>
                    </>
                    :
                    <Box display="flex" justifyContent="center">
                        <Typography sx={{mt: 2, mb: 8}} variant="h6" component="div">
                            Назначенные заказы отсутствуют
                        </Typography>
                    </Box>
                }
            </Paper>

            {openModal ? (
                <ModalWindow data={order} component={CourierDeliveredModal} openModal={openModal}
                             closeModal={closeModal}/>
            ) : null}
        </>
    );
};
export default CourierOrder;