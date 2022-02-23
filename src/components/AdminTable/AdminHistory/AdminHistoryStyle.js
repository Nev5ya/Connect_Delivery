import { withStyles, makeStyles, TableCell, TableRow } from '@material-ui/core';
export const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: '#E4E4E4',
		color: theme.palette.common.black,
		fontWeight: 'bold',
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);

export const useStyles = makeStyles({
	table: {
		minWidth: 700,
	},
});
