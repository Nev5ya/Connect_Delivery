import {Paper, Typography} from '@mui/material';
import {DataGrid} from "@mui/x-data-grid";

import {useState} from "react";
import {useSelector} from "react-redux";

import {selectOrdersForPagin, selectOrdersWithOutUserId,} from "../../../store/orders/selector";

import PaginationComponent from "../../Pagination/Pagination";
import OrderAppointmentCourierModal from "../../OrderAppointmentCourierModal/OrderAppointmentCourierModal";
import ModalWindow from "../../ModalWindow/ModalWindow";

const AdminInWork = () => {
    let [page, setPage] = useState(0);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        // console.log('setPage handleChangePage', newPage);
    };

    const [rowsPerPage, setRowsPerPage] = useState(5);
    const handleChangeRowsPerPage = (event) => {
        setPage(0);
        setRowsPerPage(parseInt(event.target.value, 10));
        // console.log('handleChangeRowsPerPage', page, rowsPerPage, event.target.value);
    };

    const orders = useSelector(selectOrdersWithOutUserId);// список заказов с неназначенными курьерами
    const ordersForPagin = useSelector(
        (state) => selectOrdersForPagin(state, orders, rowsPerPage, page));

    /////Флаг открытия/закрытия модального окна//
    let [openModal, setOpenModal] = useState(false);
    const closeModal = () => {
        setOpenModal(false);
    };
    /////Записываем order, на котором произведен клик и открывается модальное окно//
    let [orderCurrent, setOrderCurrent] = useState(null);
    const onClickHandle = (order) => {
        setOrderCurrent(order);
        setOpenModal(true);
    };

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 70,
            headerClassName: 'headerstyle'
        },
        {
            field: 'address',
            headerName: 'АДРЕС ДОСТАВКИ',
            flex: 2,
            headerClassName: 'headerstyle'
        },
        {
            field: 'comment',
            headerName: 'КОММЕНТАРИЙ',
            flex: 1,
            headerClassName: 'headerstyle'
        },
        {
            field: 'name',
            headerName: 'НАИМЕНОВАНИЕ',
            flex: 1,
            headerClassName: 'headerstyle'
        },
        {
            field: 'courier_name',
            headerName: 'КУРЬЕР',
            flex: 1,
            editable: true,
            type: 'singleSelect',
            valueOptions: [{id: 1, n: 'United Kingdom'}, {id: 2, n: 'Spain'}],
            headerClassName: 'headerstyle'
        },
    ];

    const rows = ordersForPagin.map((row) => {
        return {
            id: row.id,
            address: row.address,
            comment: row.comment,
            name: row.name,
            courier_name: 'НАЗНАЧИТЬ...',
        }
    });

    return (
        <>
            <Typography variant='h4' my={2}>В обработке</Typography>
            <Paper elevation={3} sx={{'& .headerstyle': {backgroundColor: '#e5e5e5'}}}>
                <DataGrid
                    autoHeight
                    rows={rows}
                    columns={columns}
                    disableSelectionOnClick
                    hideFooterPagination={true}
                    hideFooter={true}
                    hideFooterRowCount={true}
                    onRowClick={(event) => onClickHandle(event.row)}
                />
                <PaginationComponent type='AdminHistory'
                                     rows={orders}
                                     pageQtl={rowsPerPage}
                                     changePage={handleChangePage}
                                     changeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
            {openModal ? (
                <ModalWindow
                    data={orderCurrent}
                    component={OrderAppointmentCourierModal}
                    openModal={openModal}
                    closeModal={closeModal}
                />
            ) : null}
        </>
    );
};

export default AdminInWork;
