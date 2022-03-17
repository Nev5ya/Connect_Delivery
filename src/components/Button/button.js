
import Button from '@mui/material/Button';

export const MyButtonContained = ({text, color = "success", onClick, disabled=false}) => {
    return (
            <Button
                disabled={disabled}
                variant="contained"
                color={color}
                onClick={onClick}
            >{text}</Button>
        )
}

export const MyButtonOutlined = ({text, color = "success", onClick}) => {
    return (
        <Button
            variant="outlined"
            color={color}
            onClick={onClick}
        >{text}</Button>
    )
}