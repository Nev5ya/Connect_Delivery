import * as React from "react";

import {Paper, Box, Typography} from '@mui/material';
import {DataGrid} from "@mui/x-data-grid";

import {useState} from "react";
import {useSelector} from "react-redux";

import {selectOrdersForPagin} from "../../store/orders/selector";

import PaginationComponent from "../Pagination/Pagination";
const CourierHistory = ({orders, onClick}) => {

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

    const ordersForPagin = useSelector(
        (state) => selectOrdersForPagin(state, orders, rowsPerPage, page));

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
    ];

    const rows = ordersForPagin.map((row) => {
        return {
            id: row.id,
            address: row.address,
            comment: row.comment,
            status: row.status,
            name: row.name,
        }
    });
    // console.log('rows', rows)

    return (
        <>
            <Typography variant='h4' mb={2}>История доставок</Typography>
            {(orders.length !== 0)
                ?
				<Paper elevation={3} sx={{'& .headerstyle': {backgroundColor: '#e5e5e5'}}}>
                    <DataGrid
                        autoHeight
                        rows={rows}
                        columns={columns}
                        disableSelectionOnClick
                        hideFooterPagination={true}
                        hideFooter={true}
                        hideFooterRowCount={true}
                    />
                    <PaginationComponent type='AdminHistory'
                                         rows={orders}
                                         pageQtl={rowsPerPage}
                                         changePage={handleChangePage}
                                         changeRowsPerPage={handleChangeRowsPerPage}
                    />

				</Paper>
                : <Box>
                    <Typography sx={{mt: 2, mb: 8}} variant="h6" component="div">
                        Доставленные заказы отсутствуют
                    </Typography>
                </Box>
            }
        </>
    );
};

export default CourierHistory;
