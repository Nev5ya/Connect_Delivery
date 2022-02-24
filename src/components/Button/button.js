
import Button from '@mui/material/Button';

export const MyButtonContained = ({text}) => {
    return (
            <Button variant="contained" color="success">{text}</Button>
        )
}

export const MyButtonOutlined = ({text}) => {
    return (
        <Button variant="outlined" color="success">{text}</Button>
    )
}