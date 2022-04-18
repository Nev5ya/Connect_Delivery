import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    btn: {
        backgroundColor: '#4EAC04',
        color: '#FFFFFF',
        '&:hover': { backgroundColor: '#167f06' },
    },
    wrapper_flex: {
        paddingTop: '5px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper_flex_bottom: {
        display: 'flex',
        boxSizing: 'inherit',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: '25px',
    },
});