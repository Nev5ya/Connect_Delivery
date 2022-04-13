import {
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Box,
	FormControl,
	NativeSelect,
	Stack,
	Button,
} from '@mui/material';
import { StyledTableCell, StyledTableRow, useStyles } from './AdminInWorkStyle';
import {useDispatch, useSelector} from "react-redux";
import {
	selectOrdersForPaginAdmin,
	selectOrdersWithOutUserId
} from "../../../store/orders/selector";
import {changeOrder} from "../../../store/orders/actions";
import {selectCouriersByStatus} from "../../../store/couriers/selector";
import Typography from "@mui/material/Typography";
import PaginationComponent from "../../Pagination/Pagination";
import {useState} from "react";
import ModalWindow from "../../ModalWindow/ModalWindow";
import CourierRedact from "../../CourierRedact/CourierRedact";
import OrderDescriptionModal from "../../OrderDescriptionModal/OrderDescriptionModal";
import {changeCourier} from "../../../store/couriers/actions";
import {withStyles} from "@mui/styles";
import {DataGrid} from "@mui/x-data-grid";
import OrderAppointmentCourierModal from "../../OrderAppointmentCourierModal/OrderAppointmentCourierModal";

const AdminInWork = () => {
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

	const ordersForPagin = useSelector((state) => selectOrdersForPaginAdmin(state, rowsPerPage, page));
	const ordersWithOutUserId = useSelector(selectOrdersWithOutUserId);// список заказов с неназначенными курьерами
	//const orders = useSelector(selectOrders) // список всех заказов
	console.log('AdminInWork', ordersWithOutUserId)

	// const couriersOnline = useSelector((state) => selectCouriersByStatus(state, 2));
	// const couriersOnlineAndNull = [...couriersOnline, {id: null, name: 'Не назначено'}]

	//console.log('adminWork', couriersOnline, ordersForPagin, couriersOnlineAndNull)
	// /////Вызов Редактировать курьера//
	// const dispatch = useDispatch();
	// const onChangeCourier = (order_id, event) => {
	// 	dispatch(changeOrder({id: order_id, order_status_id: 2, user_id: event.target.value}));
	// 	//dispatch(changeCourier({id: event.target.value, user_status_id: 3}));
	// };

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
			editable: true,
			type: 'singleSelect',
			valueOptions: [{id: 1, n: 'United Kingdom'}, {id: 2, n:'Spain'}]

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
			<Typography variant='h6' component='h2'>В обработке</Typography>
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
									 rows = {ordersWithOutUserId}
									 pageQtl={rowsPerPage}
									 changePage={handleChangePage}
									 changeRowsPerPage={handleChangeRowsPerPage}
				/>
			</TableContainer>
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
