import { styled, Badge } from '@mui/material';

export const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));
export const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 1,
        top: 7,
        border: `1px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
        backgroundColor: '#4EAC04',
    },
}));