import {
	Table,
	TableBody,
	TableContainer,
	TableHead,
	Paper,
} from '@mui/material';

import {
	StyledTableCell,
	StyledTableRow,
	// useStyles
} from './AdminHistoryStyle.js';

const AdminHistory = (props) => {
	// const classes = useStyles();
	function createData(
		ID,
		address,
		comment,
		status,
		deadline,
		courier,
		message
	) {
		return { ID, address, comment, status, deadline, courier, message };
	}

	const rows = [
		createData(
			200,
			'119021, Москва, ул. Льва Толстого, 16',
			'Пирожки для бабушки',
			'В ПУТИ',
			'03/03/22',
			'Лера Самолетова',
			'У ВАС СООБЩЕНИЕ'
		),
		createData(
			201,
			'119021, Москва, ул. Льва Толстого, 16',
			'Пирожки для бабушки',
			'В ПУТИ',
			' 03/03/22',
			'Олег Хромой',
			'У ВАС СООБЩЕНИЕ'
		),
		createData(
			202,
			'119021, Москва, ул. Льва Толстого, 16',
			'Пирожки для бабушки',
			'ДОСТАВЛЕН',
			'03/03/22',
			'Саша Быстроходов'
		),
		createData(
			203,
			'119021, Москва, ул. Льва Толстого, 16',
			'Пирожки для бабушки',
			'ДОСТАВЛЕН',
			'03/03/22',
			'Вася Пупкин'
		),
		createData(
			204,
			'119021, Москва, ул. Льва Толстого, 16',
			'Пирожки для бабушки',
			'В ПУТИ',
			'03/03/22',
			'Вася Пупкин'
		),
	];
	// const classes = useStyles();

	return (
		<>
			<h2>История</h2>

			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 700 }} aria-label='customized table'>
					<TableHead>
						<StyledTableRow>
							<StyledTableCell>ID</StyledTableCell>
							<StyledTableCell align='center'>АДРЕС ДОСТАВКИ</StyledTableCell>
							<StyledTableCell align='center'>КОММЕНТАРИЙ</StyledTableCell>
							<StyledTableCell align='center'>СТАТУС</StyledTableCell>
							<StyledTableCell align='center'>ДЕДЛАЙН</StyledTableCell>
							<StyledTableCell align='center'>КУРЬЕР</StyledTableCell>
							<StyledTableCell align='center'>СООБЩЕНИЕ</StyledTableCell>
						</StyledTableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<StyledTableRow key={row.ID}>
								<StyledTableCell component='th' scope='row'>
									{row.ID}
								</StyledTableCell>
								<StyledTableCell align='center'>{row.address}</StyledTableCell>
								<StyledTableCell align='center'>{row.comment}</StyledTableCell>
								<StyledTableCell align='center'>{row.status}</StyledTableCell>
								<StyledTableCell align='center'>{row.deadline}</StyledTableCell>
								<StyledTableCell align='center'>{row.courier}</StyledTableCell>
								<StyledTableCell align='center'>{row.message}</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export default AdminHistory;
