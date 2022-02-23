// import { useState } from 'react';
import {
	Paper,
	FormControl,
	// InputLabel,
	NativeSelect,
	TableContainer,
	TableHead,
	Table,
	TableBody,
	TableRow,
	Button,
} from '@material-ui/core';

import {
	BootstrapInput,
	StyledTableCell,
	StyledTableRow,
	useStyles,
} from './AdminInWorkStyle.js';
// import { useState } from 'react';

// import AdminPagination from '../AdminPagination/AdminPagination';

// const orders = [
// 	{
// 		id: 200,
// 		address: '119021, Москва, ул. Льва Толстого, 16',
// 		comment: 'Пирожки для бабушки',
// 		status: 'В ПУТИ',
// 		deadline: '03/03/22',
// 		message: 'У ВАС СООБЩЕНИЕ',
// 		courier: 'couriers.id', // берём из объекта курьера
// 	},
// 	{
// 		id: 201,
// 		address: '119021, Москва, ул. Льва Толстого, 16',
// 		comment: 'Пирожки для бабушки',
// 		status: 'В ПУТИ',
// 		deadline: '03/03/22',
// 		message: 'У ВАС СООБЩЕНИЕ',
// 		courier: 'couriers.id', // берём из объекта курьера
// 	},
// 	{
// 		id: 202,
// 		address: '119021, Москва, ул. Льва Толстого, 16',
// 		comment: 'Пирожки для бабушки',
// 		status: 'ДОСТАВЛЕН',

// 		deadline: '03/03/22',
// 		message: 'У ВАС СООБЩЕНИЕ',
// 		courier: 'couriers.id', // берём из объекта курьера
// 	},
// 	{
// 		id: 203,
// 		address: '119021, Москва, ул. Льва Толстого, 16',
// 		comment: 'Пирожки для бабушки',
// 		status: 'ДОСТАВЛЕН',
// 		deadline: '03/03/22',
// 		message: '',
// 		courier: 'couriers.id', // берём из объекта курьера
// 	},
// 	{
// 		id: 204,
// 		address: '119021, Москва, ул. Льва Толстого, 16',
// 		comment: 'Пирожки для бабушки',
// 		status: 'ДОСТАВЛЕН',
// 		deadline: '03/03/22',
// 		message: '',
// 		courier: 'couriers.id', // берём из объекта курьера
// 	},
// ];
// const couriers = [
// 	{
// 		id: 1,
// 		fullName: 'Лера Самолетова',
//    status: ''
// 	},
// 	{
// 		id: 2,
// 		fullName: 'Олег Хромой',
//    status: ''
// 	},
// 	{
// 		id: 3,
// 		fullName: 'Саша Быстроходов',
//    status: ''
// 	},
// 	{
// 		id: 4,
// 		fullName: 'Вася Пупкин',
//    status: ''
// 	},
// ];
// const admin = 'Стас';

const AdminInWork = (props) => {
	const classes = useStyles();
	// const [courier, setCourier] = useState('');

	// const handleChange = (event) => {
	// 	setCourier(event.target.value);
	// };

	function createData(id, address, comment, deadline, courier) {
		return { id, address, comment, deadline, courier };
	}
	const rows = [
		createData(
			200,
			'119021, Москва, ул. Льва Толстого, 16',
			'Пирожки для бабушки',
			'03/03/22',
			'Лера Самолетова'
		),
		createData(
			201,
			'119021, Москва, ул. Льва Толстого, 16',
			'Пирожки для бабушки',
			' 03/03/22',
			'Олег Хромой'
		),
		createData(
			202,
			'119021, Москва, ул. Льва Толстого, 16',
			'Пирожки для бабушки',
			'03/03/22',
			'Саша Быстроходов'
		),
		createData(
			203,
			'119021, Москва, ул. Льва Толстого, 16',
			'Пирожки для бабушки',
			'03/03/22',
			'Вася Пупкин'
		),
		createData(
			204,
			'119021, Москва, ул. Льва Толстого, 16',
			'Пирожки для бабушки',
			'03/03/22',
			'Вася Пупкин'
		),
		createData(
			204,
			'119021, Москва, ул. Льва Толстого, 16',
			'Пирожки для бабушки',
			'03/03/22',
			'Вася Пупкин'
		),
	];
	return (
		<>
			<div className={classes.wrapper_flex}>
				<h1>Стас{props.admin} Администратор</h1>

				<Button className={classes.root} variant='contained'>
					У ВАС СООБЩЕНИЕ
				</Button>
			</div>

			<h2>В обработке</h2>

			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label='customized table'>
					<TableHead>
						<TableRow>
							<StyledTableCell>ID</StyledTableCell>
							<StyledTableCell align='center'>АДРЕС ДОСТАВКИ</StyledTableCell>
							<StyledTableCell align='center'>КОММЕНТАРИЙ</StyledTableCell>
							<StyledTableCell align='center'>ДЕДЛАЙН</StyledTableCell>
							<StyledTableCell align='center'>КУРЬЕР</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							// {props.orders.map((row) => (
							<StyledTableRow key={row.id}>
								<StyledTableCell component='th' scope='row'>
									{row.id}
								</StyledTableCell>
								<StyledTableCell align='center'>{row.address}</StyledTableCell>
								<StyledTableCell align='center'>{row.comment}</StyledTableCell>
								<StyledTableCell align='center'>{row.deadline}</StyledTableCell>
								<StyledTableCell align='center'>
									<FormControl className={classes.margin}>
										<NativeSelect
											// value={courier}
											// onChange={handleChange}
											input={<BootstrapInput />}
										>
											<option value={0}>Не назначено</option>
											<option value={10}>Лера Самолетова</option>
											{/* <option value={10} id>Лера Самолетова{courier.fullName}</option>  */}
											<option value={20}>Саша Быстроходов</option>
											<option value={30}>Вася Пупкин</option>
											<option value={40}>Олег Хромой</option>
										</NativeSelect>
									</FormControl>
								</StyledTableCell>
							</StyledTableRow>
						))}
						{/* <AdminPagination /> */}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export default AdminInWork;
