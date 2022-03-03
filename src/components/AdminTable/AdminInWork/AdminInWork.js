// import { useState } from 'react';
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
import {getCouriersOnline} from "../../../utils/getData";
import {useSelector} from "react-redux";
import {selectOrders} from "../../../store/orders/selector";

const AdminInWork = () => {
	const classes = useStyles();

	const orders = useSelector(selectOrders);

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
							<StyledTableRow key={Math.random()}>
								<StyledTableCell component='th' scope='row'>
									{row.id}
								</StyledTableCell>
								<StyledTableCell align='center'>{row.address}</StyledTableCell>
								<StyledTableCell align='center'>{row.name}</StyledTableCell>
								<StyledTableCell align='center'>{row.comment}</StyledTableCell>
								<StyledTableCell align='center'>
									<Box sx={{ minWidth: 120 }}>
										<FormControl fullWidth>
											<NativeSelect>
												<option value={10}>Не назначено</option>
												{ getCouriersOnline().map(item => (
													<option value={item.id}>{item.name}</option>
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
