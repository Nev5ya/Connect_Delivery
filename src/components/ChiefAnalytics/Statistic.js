import {
    PieChart,
    Pie,
    Cell,
    Legend,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';

import {Box, Paper, Typography} from "@mui/material";

export const Statistic = ({orders, couriers}) => {

    const ordersInWork = orders.filter(el => el.order_status_id === 1)
    const ordersInProcess = orders.filter(el => el.order_status_id === 2)
    const ordersDelivered = orders.filter(el => el.order_status_id === 3)

    const data = [
        {name: 'Обрабатываются', value: ordersInWork.length},
        {name: 'Доставляются', value: ordersInProcess.length},
        {name: 'Доставлены', value: ordersDelivered.length},
    ];
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    const couriersOnline = couriers.filter(el => el.user_status_id === 2)
    const couriersOfline = couriers.filter(el => el.user_status_id === 1)

    const data2 = [
        {
            name: "",
            online: couriersOnline.length,
            offline: couriersOfline.length
        }
    ];

    return (
        <>
            <Typography align="left" variant="h4" my={2}>
                Статистика
            </Typography>
            <Paper elevation={3} sx={{width: 580}}>
                <Typography variant={'h5'} pt={2} align={'center'}>Заказы по статусу</Typography>
                <Box sx={{py: 2}}>
                    <PieChart width={580} height={250}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="90%"
                            startAngle={180}
                            endAngle={0}
                            innerRadius={150}
                            outerRadius={200}
                            fill="#8884d8"
                            paddingAngle={2}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                            ))}
                        </Pie>
                        <Legend iconSize={20} layout="horizontal" verticalAlign="bottom"/>
                    </PieChart>
                </Box>
            </Paper>
            <Paper elevation={3} sx={{width: 580, mt: 4}}>
                <Typography variant={'h5'} pt={2} align={'center'}>Курьеры по статусу</Typography>
                <Box sx={{py: 2}}>
                    <BarChart
                        width={520}
                        height={300}
                        data={data2}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Legend />
                        <Bar dataKey="online" fill="#8884d8" />
                        <Bar dataKey="offline" fill="#82ca9d" />
                    </BarChart>
                </Box>
            </Paper>
        </>
    )
}