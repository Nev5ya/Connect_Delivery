import {
	Table,
	TableBody,
	TableContainer,
	TableHead,
	Paper,
} from '@mui/material';

import {StyledTableCell, StyledTableRow} from './AdminHistoryStyle.js';
import {useSelector} from "react-redux";
import {selectOrdersWithUserId} from "../../../store/orders/selector";

const AdminHistory = () => {
	const orders = useSelector(selectOrdersWithUserId);
	console.log('AdminHistory', orders)

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
							<StyledTableRow key={row.id}>
								<StyledTableCell component='th' scope='row'>
									{row.id}
								</StyledTableCell>
								<StyledTableCell align='center'>{row.address}</StyledTableCell>
								<StyledTableCell align='center'>{row.comment}</StyledTableCell>
								<StyledTableCell align='center'>{row.status}</StyledTableCell>
								<StyledTableCell align='center'>{row.name}</StyledTableCell>
								<StyledTableCell align='center'>{row.courier_name}</StyledTableCell>
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
