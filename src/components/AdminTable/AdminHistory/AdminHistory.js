import {
	Table,
	TableBody,
	TableContainer,
	TableHead,
	Paper,
} from '@mui/material';

import {StyledTableCell, StyledTableRow} from './AdminHistoryStyle.js';
import {getCurrentCourier} from "../../../utils/getData";
import {useSelector} from "react-redux";
import {selectOrders} from "../../../store/orders/selector";

const getCurrentCourierName = (courierID) => {
	console.log('courierID11', courierID)
	if (courierID === 'undefined' || courierID === '') {
		console.log('courierID', courierID)
		return ''
	} if (getCurrentCourier(courierID).length === 0) {
		return "";
	}
	else {
		return getCurrentCourier(courierID)[0].name
	}
}

const AdminHistory = () => {
	const orders = useSelector(selectOrders);

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
							<StyledTableCell align='center'>НАИМЕНОВАНИЕ</StyledTableCell>
							<StyledTableCell align='center'>КУРЬЕР</StyledTableCell>
							<StyledTableCell align='center'>СООБЩЕНИЕ</StyledTableCell>
						</StyledTableRow>
					</TableHead>
					<TableBody>
						{orders.map((row) => (
							<StyledTableRow key={Math.random()}>
								<StyledTableCell component='th' scope='row'>
									{row.ID}
								</StyledTableCell>
								<StyledTableCell align='center'>{row.address}</StyledTableCell>
								<StyledTableCell align='center'>{row.comment}</StyledTableCell>
								<StyledTableCell align='center'>{row.status}</StyledTableCell>
								<StyledTableCell align='center'>{row.name}</StyledTableCell>
								<StyledTableCell align='center'>{getCurrentCourierName(row.user_id)}</StyledTableCell>
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
