import {Typography, Paper} from '@mui/material';
import {DataGrid} from "@mui/x-data-grid";

import {useState} from "react";
import {useSelector} from "react-redux";

import {
    selectOrdersForPagin,
    selectOrdersWithUserId
} from "../../../store/orders/selector";

import PaginationComponent from "../../Pagination/Pagination";
import ModalWindow from "../../ModalWindow/ModalWindow";
import OrderDescriptionModal from "../../OrderDescriptionModal/OrderDescriptionModal";

const AdminHistory = () => {
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
    const orders = useSelector(selectOrdersWithUserId);
    const ordersForPagin = useSelector(
        (state) => selectOrdersForPagin(state, orders, rowsPerPage, page));

    /////Флаг открытия/закрытия модального окна//
    let [openModal, setOpenModal] = useState(false);
    const closeModal = () => {
        setOpenModal(false);
        // console.log('CloseModal CouriersList',  openModal);
    };

    /////Записываем order, на котором произведен клик и открывается модальное окно//
    let [orderCurrent, setOrderCurrent] = useState(null);
    const onClickHandle = (order) => {
        setOrderCurrent(order);
        setOpenModal(true);
        // console.log('onClickHandle', order, openModal);
    };

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 30,
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
            field: 'status',
            headerName: 'СТАТУС',
            flex: 0.5,
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
            headerClassName: 'headerstyle'
        },
    ];

    const rows = ordersForPagin.map((row) => {
        return {
            id: row.id,
            address: row.address,
            comment: row.comment,
            status: row.status,
            name: row.name,
            courier_name: row.courier_name,
        }
    });
    console.log('rows', rows)

    return (
        <>
            <Typography variant='h4' my={4}>История</Typography>
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
                <ModalWindow data={orderCurrent} component={OrderDescriptionModal} openModal={openModal}
                             closeModal={closeModal}/>
            ) : null}
        </>
    );
};

export default AdminHistory;
