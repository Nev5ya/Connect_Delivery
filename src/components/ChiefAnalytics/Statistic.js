import {Paper, Grid, Typography} from "@mui/material";
import {Box} from "@mui/system";
import {CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";

export const Statistic = () => {

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

    return (
        <>
            <Grid item xs={12}>
                <Paper elevation={0}>
                    <Grid container alignItems="center" gap={2}>
                        <Grid item xs={12}>
                            <Box sx={{p: 2}}>
                                <Typography align="left" variant="h4">
                                    Statistic
                                </Typography>
                            </Box>
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

        </>
    )
}