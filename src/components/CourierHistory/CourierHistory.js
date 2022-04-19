import {
	Table,
	TableBody,
	TableContainer,
	TableHead,
	Paper, Box,
} from '@mui/material';

import {StyledTableCell, StyledTableRow} from './CourierHistoryStyle.js';
import Typography from "@mui/material/Typography";
import * as React from "react";
import {useState} from "react";
import {useSelector} from "react-redux";
import {selectOrdersForPagin, selectOrdersForPaginHistory} from "../../store/orders/selector";
import {withStyles} from "@mui/styles";
import {DataGrid} from "@mui/x-data-grid";
import PaginationComponent from "../Pagination/Pagination";

const CourierHistory = ({orders,  onClick}) => {

	let [page, setPage] = useState(0);
	const handleChangePage = (event, newPage) => {
		setPage(newPage);
		console.log('setPage handleChangePage', newPage);
	};

	const [rowsPerPage, setRowsPerPage] = useState(5);
	const handleChangeRowsPerPage = (event) => {
		setPage(0);
		setRowsPerPage(parseInt(event.target.value, 10));
		console.log('handleChangeRowsPerPage', page, rowsPerPage, event.target.value);
	};

	const ordersForPagin = useSelector(
		(state) => selectOrdersForPagin(state, orders, rowsPerPage, page));

	const StyledDataGrid = withStyles({
		root: {
			"& .MuiDataGrid-renderingZone": {
				maxHeight: "none !important"
			},
			"& .MuiDataGrid-cell": {
				lineHeight: "unset !important",
				maxHeight: "none !important",
				whiteSpace: "normal"
			},
			"& .MuiDataGrid-row": {
				maxHeight: "none !important"
			},
			"& .MuiDataGrid-columnHeaders": {
				backgroundColor: "#E4E4E4",
				color: "black",
				fontSize: 15,
				weight: 'bold',
				textAlign: 'center',
			},
			'& div[data-rowIndex][role="row"]:nth-of-type(2n)': {
				backgroundColor: '#fcfcfc',
			},
			'& .header-column': {
				fontWeight: 'bold',
			},

		},
		header: {
			fontWeight: 'bold',
		},

	})(DataGrid);

	const columns = [
		{ field: 'id', headerName: 'ID', width: 30 },
		{
			field: 'address',
			headerName: 'АДРЕС ДОСТАВКИ',
			flex: 2 ,
			headerAlign: 'center',
			align: 'center',
		},
		{
			field: 'comment',
			headerName: 'КОММЕНТАРИЙ',
			flex: 1 ,
			headerAlign: 'center',
			align: 'center',
		},
		{
			field: 'status',
			headerName: 'СТАТУС',
			flex: 0.5 ,
			headerAlign: 'center',
			align: 'center',
		},
		{
			field: 'name',
			headerName: 'НАИМЕНОВАНИЕ',
			flex: 1 ,
			headerAlign: 'center',
			align: 'center',
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
	console.log('rows', rows)


	return (
		<>
			{onClick
				? <Typography
					sx={{'&:hover': {color:'green', cursor: 'pointer'}, mt: 4 }}
					variant="h5"
					component="div"
					onClick={onClick}
				 >История доставки</Typography >
				: <Typography
					sx={{ mt: 4 }}
					variant="h5"
					component="div"
				>История доставки</Typography >
			}
			{(orders.length !== 0)
				? <TableContainer component={Paper} style={{ flexGrow: 1 }}>
					<StyledDataGrid
						autoHeight
						rows={rows}
						columns={columns}
						disableSelectionOnClick
						hideFooterPagination={true}
						hideFooter={true}
						hideFooterRowCount={true}
						// onRowClick={(event) => onClickHandle(event.row)}
					/>
					<PaginationComponent type='AdminHistory'
										 rows = {orders}
										 pageQtl={rowsPerPage}
										 changePage={handleChangePage}
										 changeRowsPerPage={handleChangeRowsPerPage}
					/>

				</TableContainer>
				: <Box>
					<Typography sx={{mt: 2, mb: 8}} variant="h6" component="div" >
						Доставленные заказы отсутствуют
					</Typography>
				</Box>
			}
		</>
	);
};

export default CourierHistory;
