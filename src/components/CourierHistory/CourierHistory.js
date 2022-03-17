import {
	Table,
	TableBody,
	TableContainer,
	TableHead,
	Paper, Box,
} from '@mui/material';

import {StyledTableCell, StyledTableRow} from './CourierHistoryStyle.js';
import Typography from "@mui/material/Typography";
import * as React from "react";

const CourierHistory = ({orders,  onClick}) => {

	console.log('CourierHistory', orders, onClick)

	return (
		<>
			{onClick
				? <Typography
					sx={{'&:hover': {color:'green', cursor: 'pointer'}, mt: 4 }}
					variant="h5"
					component="div"
					onClick={onClick}
				 >История доставки</Typography >
				: <Typography
					sx={{ mt: 4 }}
					variant="h5"
					component="div"
				>История доставки</Typography >
			}
			{(orders.length !== 0)
				? <TableContainer component={Paper}>
					<Table sx={{ minWidth: 700 }} aria-label='customized table'>
						<TableHead>
							<StyledTableRow>
								<StyledTableCell>ID</StyledTableCell>
								<StyledTableCell align='center'>АДРЕС ДОСТАВКИ</StyledTableCell>
								<StyledTableCell align='center'>КОММЕНТАРИЙ</StyledTableCell>
								<StyledTableCell align='center'>СТАТУС</StyledTableCell>
								<StyledTableCell align='center'>НАИМЕНОВАНИЕ</StyledTableCell>
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
								</StyledTableRow>
							))}
						</TableBody>
					</Table>
				  </TableContainer>
				: <Box>
					<Typography sx={{mt: 2, mb: 8}} variant="h6" component="div" >
						Доставленные заказы отсутствуют
					</Typography>
				</Box>
			}
		</>
	);
};

export default CourierHistory;
