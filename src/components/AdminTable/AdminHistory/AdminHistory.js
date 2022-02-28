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
import {couriers, orders} from "../../../utils/data";
import {getCurrentCourier} from "../../../utils/getData";

const getCurrentCourierName = (courierID) => {
	console.log('courierID11', courierID)
	if (courierID === 'undefined' || courierID === '') {
		console.log('courierID', courierID)
		return ''
	} else {
		return getCurrentCourier(courierID)[0].name
	}
}

const AdminHistory = (props) => {
	// const classes = useStyles();
	// function createData(
	// 	ID,
	// 	address,
	// 	comment,
	// 	status,
	// 	deadline,
	// 	courier,
	// 	message
	// ) {
	// 	return { ID, address, comment, status, deadline, courier, message };
	// }
	//
	//
	// // const classes = useStyles();
	// const rows = [
	// 	couriers.forEach(item => {
	// 		createData(item)
	// 	})
	// ];

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
						{orders.map((row) => (
							<StyledTableRow key={row.ID}>
								<StyledTableCell component='th' scope='row'>
									{row.ID}
								</StyledTableCell>
								<StyledTableCell align='center'>{row.address}</StyledTableCell>
								<StyledTableCell align='center'>{row.description}</StyledTableCell>
								<StyledTableCell align='center'>{row.status}</StyledTableCell>
								<StyledTableCell align='center'>{row.name}</StyledTableCell>
								<StyledTableCell align='center'>{getCurrentCourierName(row.courierID)}</StyledTableCell>
								<StyledTableCell align='center'>{'1'}</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export default AdminHistory;
