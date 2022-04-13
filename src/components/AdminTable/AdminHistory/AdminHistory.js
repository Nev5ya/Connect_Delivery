import {TableContainer, Paper,} from '@mui/material';

import {useSelector} from "react-redux";
import {selectOrdersForPaginHistory, selectOrdersWithUserId} from "../../../store/orders/selector";
import PaginationComponent from "../../Pagination/Pagination";
import {useState} from "react";
import ModalWindow from "../../ModalWindow/ModalWindow";
import OrderDescriptionModal from "../../OrderDescriptionModal/OrderDescriptionModal";
import Typography from "@mui/material/Typography";
import {DataGrid} from "@mui/x-data-grid";
import {withStyles} from "@mui/styles";

const AdminHistory = () => {
	let [page, setPage] = useState(0);
	const handleChangePage = (event, newPage) => {
		setPage(newPage);
		console.log('setPage handleChangePage', newPage);
	};

	const [rowsPerPage, setRowsPerPage] = useState(5);
	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(1);
		console.log('handleChangeRowsPerPage', page, rowsPerPage, event.target.value);
	};

	const ordersForPagin = useSelector((state) => selectOrdersForPaginHistory(state, rowsPerPage, page));

	const ordersWithUserId = useSelector(selectOrdersWithUserId);
	console.log('AdminHistory', ordersWithUserId)

	/////Флаг открытия/закрытия модального окна//
	let [openModal, setOpenModal] = useState(false);
	const closeModal = () => {
		setOpenModal(false);
		console.log('CloseModal CouriersList',  openModal);
	};
	/////Записываем order, на котором произведен клик и открывается модальное окно//
	let [orderCurrent, setOrderCurrent] = useState(null);
	const onClickHandle = (order) => {
		setOrderCurrent(order);
		setOpenModal(true);
		console.log('onClickHandle', order, openModal);
	};

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
		{
			field: 'courier_name',
			headerName: 'КУРЬЕР',
			flex: 1 ,
			headerAlign: 'center',
			align: 'center',
		},
		// {
		// 	field: 'message',
		// 	headerName: 'СООБЩЕНИЕ',
		// 	flex: 0.5 ,
		// 	headerAlign: 'center',
		// 	align: 'center',
		// }
	];

	const rows = ordersForPagin.map((row) => {
		return {
			id: row.id,
			address: row.address,
			comment: row.comment,
			status: row.status,
			name: row.name,
			courier_name: row.courier_name,
			// message: '1'
		}
	});
	console.log('rows', rows)

	return (
		<>
			<Typography variant='h6' component='h2'>История</Typography>
			<TableContainer component={Paper} style={{ flexGrow: 1 }}>
				<StyledDataGrid
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
									 rows = {ordersWithUserId}
									 pageQtl={rowsPerPage}
									 changePage={handleChangePage}
									 changeRowsPerPage={handleChangeRowsPerPage}
				/>

			</TableContainer>
			{openModal ? (
				<ModalWindow data={orderCurrent} component={OrderDescriptionModal} openModal={openModal} closeModal={closeModal}/>
			) : null}
		</>
	);
};

export default AdminHistory;
