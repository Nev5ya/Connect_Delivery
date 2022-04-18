import {
	Table,
	TableBody,
	TableContainer,
	TableHead,
	Paper,
} from '@mui/material';

import {StyledTableCell, StyledTableRow} from './AdminHistoryStyle.js';
import {useSelector} from "react-redux";
import {selectOrdersforPaginHistory,selectOrdersWithUserId} from "../../../store/orders/selector";
import PaginationComponent from "../../Pagination/Pagination";
import {useState} from "react";
import ModalWindow from "../../ModalWindow/ModalWindow";
import OrderDescriptionModal from "../../OrderDescriptionModal/OrderDescriptionModal";
import Typography from "@mui/material/Typography";

const AdminHistory = () => {
	const ordersforPaginHistory = useSelector(selectOrdersforPaginHistory);
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

	return (
		<>
			<Typography variant='h6' component='h2'>История</Typography>
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
						{ordersforPaginHistory.map((row) => (
							<StyledTableRow key={row.id}
											sx={{'&:hover': {textColor:'green', cursor: 'pointer'}}}
											onClick={() => onClickHandle(row)}>
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
				<PaginationComponent type='AdminHistory' orders = {ordersWithUserId} />
			</TableContainer>
			{openModal ? (
				<ModalWindow data={orderCurrent} component={OrderDescriptionModal} openModal={openModal} closeModal={closeModal}/>
			) : null}
		</>
	);
};

export default AdminHistory;
