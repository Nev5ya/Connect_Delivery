import { Box } from '@mui/system'
import { Typography, Paper, Grid, Link, Menu } from '@mui/material'

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'

// Заглушки
const dataFromDB = {
    name: 'Олег Руководитель',
    menuIsOpened: false,
    date: '12.06.2002',
}

const data = [
    { name: 'ID 1', uv: 400, pv: 2400, amt: 2400 },
    { name: 'ID 2', uv: 375, pv: 2400, amt: 2400 },
    { name: 'ID 3', uv: 148, pv: 2400, amt: 2400 },
    { name: 'ID 4', uv: 310, pv: 2400, amt: 2400 },
    { name: 'ID 5', uv: 330, pv: 2400, amt: 2400 },
    { name: 'ID 6', uv: 225, pv: 2400, amt: 2400 },
    { name: 'ID 7', uv: 310, pv: 2400, amt: 2400 },
    { name: 'ID 8', uv: 100, pv: 2400, amt: 2400 },
]

const MenuContent = () => {
    return (
        <Box sx={{ width: 300, p: 5 }}>
            <Box sx={{ width: '100%', p: 1 }}>
                <Link component="button" underline="hover" variant="h6">
                    Dashboard
                </Link>
            </Box>
            <Box sx={{ width: '100%', p: 1 }}>
                <Link component="button" underline="hover" variant="h6">
                    Statistic
                </Link>
            </Box>
        </Box>
    )
}

export const ChiefAnalytics = () => {
    return (
        <>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={1}>
                    <Menu menuContent={MenuContent} />
                </Grid>
                <Grid item xs={11}>
                    <Typography align="left" variant="h3">
                        {dataFromDB.name}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={0}>
                        <Grid container alignItems="center" gap={2}>
                            <Grid item xs={12}>
                                <Box sx={{ p: 2 }}>
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
                            <Grid item xs={6}>
                                <Paper elevation={2}>
                                    <Box sx={{ py: 2 }}>
                                        <LineChart
                                            width={540}
                                            height={300}
                                            data={data}
                                            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                                        >
                                            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                        </LineChart>
                                    </Box>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}