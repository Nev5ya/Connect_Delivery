import {Paper, Typography, Grid} from "@mui/material";
import {Box} from "@mui/system";

export const Dashboard = () => {
    return (
        <>
            <Grid item xs={12}>
                <Paper elevation={0}>
                    <Grid container alignItems="center" gap={2}>
                        <Grid item xs={12}>
                            <Box sx={{p: 2}}>
                                <Typography align="left" variant="h4">
                                    Dashboard
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper elevation={2}>
                                <Box sx={{ p: 3 }}>
                                    <Typography variant="h6">В обработке 20 заказов</Typography>
                                    <Typography variant="h6">На линии 42 курьера</Typography>
                                    <Typography variant="h6">
                                        За сегодня доставленно 54 заказа
                                    </Typography>
                                    <Typography variant="h6">
                                        Среднее время доставки 42 минуты
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </>
    )
}