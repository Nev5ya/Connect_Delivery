import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    btn: {
        backgroundColor: '#4EAC04',
        color: '#FFFFFF',
        '&:hover': { backgroundColor: '#167f06' },
    },
    wrapper_flex: {
        padding: '0px 20px 20px 20px ',
    },
    modal: {
        display: 'flex',
        padding: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    close: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'right',
    },
});