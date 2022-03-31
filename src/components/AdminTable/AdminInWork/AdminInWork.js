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
import {selectOrdersforPaginAdmin, selectOrdersWithOutUserId} from "../../../store/orders/selector";
import {changeOrder} from "../../../store/orders/actions";
import {selectCouriersByStatus} from "../../../store/couriers/selector";
import Typography from "@mui/material/Typography";
import PaginationComponent from "../../Pagination/Pagination";
import {useState} from "react";
import ModalWindow from "../../ModalWindow/ModalWindow";
import CourierRedact from "../../CourierRedact/CourierRedact";
import OrderDescriptionModal from "../../OrderDescriptionModal/OrderDescriptionModal";
import {changeCourier} from "../../../store/couriers/actions";

const AdminInWork = ({setOption}) => {

	const ordersforPaginAdmin = useSelector(selectOrdersforPaginAdmin);
	const ordersWithOutUserId = useSelector(selectOrdersWithOutUserId);// список заказов с неназначенными курьерами
	//const orders = useSelector(selectOrders) // список всех заказов
	console.log('AdminInWork', ordersWithOutUserId)

	const couriersOnline = useSelector((state) => selectCouriersByStatus(state, 2));
	const couriersOnlineAndNull = [...couriersOnline, {id: null, name: null}]

	console.log('adminWork', couriersOnline, ordersforPaginAdmin, couriersOnlineAndNull)
	/////Вызов Редактировать курьера//
	const dispatch = useDispatch();
	const onChangeCourier = (order_id, event) => {
		dispatch(changeOrder({id: order_id, order_status_id: 2, user_id: event.target.value}));
		//dispatch(changeCourier({id: event.target.value, user_status_id: 3}));
	};

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

	return (
		<>
			<Typography variant='h6' component='h2'>В обработке</Typography>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 700 }} aria-label='customized table'>
					<TableHead>
						<TableRow>
							<StyledTableCell>ID</StyledTableCell>
							<StyledTableCell align='center'>АДРЕС ДОСТАВКИ</StyledTableCell>
							<StyledTableCell align='center'>НАИМЕНОВАНИЕ</StyledTableCell>
							<StyledTableCell align='center'>КОММЕНТАРИЙ</StyledTableCell>
							<StyledTableCell align='center'>КУРЬЕР</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{ordersforPaginAdmin.map((row) => (
							<StyledTableRow key={row.id}>
								<StyledTableCell component='th'
												 scope='row'
												 sx={{'&:hover': {color:'green', cursor: 'pointer'}}}
												 onClick={() => onClickHandle(row)}>
									{row.id}
								</StyledTableCell>
								<StyledTableCell align='center' sx={{'&:hover': {color:'green', cursor: 'pointer'}}}
												 onClick={() => onClickHandle(row)}>{row.address}
								</StyledTableCell>
								<StyledTableCell align='center'sx={{'&:hover': {color:'green', cursor: 'pointer'}}}
												 onClick={() => onClickHandle(row)}>{row.name}
								</StyledTableCell>
								<StyledTableCell align='center'sx={{'&:hover': {color:'green', cursor: 'pointer'}}}
												 onClick={() => onClickHandle(row)}>{row.comment}
								</StyledTableCell>
								<StyledTableCell align='center'>
									<Box sx={{ minWidth: 120 }}>
										<FormControl fullWidth>
											<NativeSelect onChange={(event) => onChangeCourier(row.id, event)}>
												<option value={-1}>Не назначено</option>
												{ couriersOnlineAndNull.map(item => (
													<option
														key={item.id}
														value={item.id}
													>{item.name}</option>
												)) }
											</NativeSelect>
										</FormControl>
									</Box>
								</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
				<PaginationComponent type='AdminInWork' orders = {ordersWithOutUserId} />
			</TableContainer>
			{openModal ? (
				<ModalWindow
					data={orderCurrent}
					component={OrderDescriptionModal}
					openModal={openModal}
					closeModal={closeModal}
					setOption={setOption}
				/>
			) : null}
		</>
	);
};

export default AdminInWork;
