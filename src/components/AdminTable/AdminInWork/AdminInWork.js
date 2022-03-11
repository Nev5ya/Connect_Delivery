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
import {getCouriersByStatus} from "../../../utils/getData";
import {useDispatch, useSelector} from "react-redux";
import {selectOrders, selectOrdersWithOutUserId} from "../../../store/orders/selector";
import {changeOrder} from "../../../store/orders/actions";

const AdminInWork = () => {
	const classes = useStyles();

	const orders = useSelector(selectOrdersWithOutUserId); // список заказов с неназначенными курьерами
	//const orders = useSelector(selectOrders) // список всех заказов
	console.log('AdminInWork', orders)

	const  couriersOnline =  getCouriersByStatus('online');
	const couriersOnlineAndNull = [...couriersOnline, {id: null, name: null}]


	console.log('adminWork', couriersOnline, orders, couriersOnlineAndNull)

	const dispatch = useDispatch();
	const onChangeCourier = (order_id, event) => {
		dispatch(changeOrder(order_id, event.target.value))
	};

	return (
		<>
			<div className={classes.wrapper_flex}>
				<h1>Стас Администратор</h1>
				<Stack spacing={2} direction='row'>
					<Button className={classes.btn} variant='contained'>
						У ВАС СООБЩЕНИЕ
					</Button>
				</Stack>
			</div>
			<h2>В обработке</h2>
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
						{orders.map((row) => (
							<StyledTableRow key={row.id}>
								<StyledTableCell component='th' scope='row'>
									{row.id}
								</StyledTableCell>
								<StyledTableCell align='center'>{row.address}</StyledTableCell>
								<StyledTableCell align='center'>{row.name}</StyledTableCell>
								<StyledTableCell align='center'>{row.comment}</StyledTableCell>
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
			</TableContainer>
		</>
	);
};

export default AdminInWork;
