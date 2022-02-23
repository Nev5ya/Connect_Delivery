import * as React from 'react';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import AdminInWork from './AdminInWork/AdminInWork';
import AdminHistory from './AdminHistory/AdminHistory';

export const AdminTable = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div>
			<Box sx={{ width: '100%', typography: 'body1' }}>
				<TabContext value={value}>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<TabList onChange={handleChange} aria-label='lab API tabs example'>
							<Tab label='Карта' value='1' />
							<Tab label='Чат' value='2' />
							<Tab label='Заказ' value='3' />
							<Tab label='Регистрация' value='4' />
						</TabList>
					</Box>
					<TabPanel value='1'>
						{/* <MyMap name={'Местонахождение курьеров'} labels={couriers} /> */}
					</TabPanel>
					<TabPanel value='2'>Item Two</TabPanel>
					<TabPanel value='3'>
						<AdminInWork />
						<hr />
						<AdminHistory />
						{/* <AdminInWork admin={admin} orders={orders} couriers={couriers} />
						<hr />
						<AdminHistory orders={orders} couriers={couriers} /> */}
					</TabPanel>
					<TabPanel value='4'>Item Three</TabPanel>
				</TabContext>
			</Box>
		</div>
	);
};
