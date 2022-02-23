import {
	withStyles,
	makeStyles,
	TableCell,
	TableRow,
	InputBase,
} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	table: {
		minWidth: 700,
	},
	margin: {
		margin: theme.spacing(1),
	},
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
		backgroundColor: '#4EAC04',
	},
	wrapper_flex: {
		display: 'flex',
		justifyContent: 'space-between',
	},
}));

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

export const BootstrapInput = withStyles((theme) => ({
	root: {
		'label + &': {
			marginTop: theme.spacing(0.5),
		},
	},
	input: {
		borderRadius: 4,
		position: 'relative',
		backgroundColor: theme.palette.background.paper,
		border: '1px solid #ced4da',
		fontSize: 13,
		width: 120,
		padding: '10px 25px 10px 15px',
		transition: theme.transitions.create(['border-color', 'box-shadow']),
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		'&:focus': {
			borderRadius: 4,
			borderColor: '#80bdff',
			boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
		},
	},
}))(InputBase);
