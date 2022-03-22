import Pagination from '@mui/material/Pagination';
import { Stack, Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
//import { selectQtyPage} from '../../store/orders/selector';
import {pageQtl} from "../../utils/constants";
import {setPageAdmin, setPageHistory} from "../../store/orders/actions";

const PaginationComponent = (props) => {
    const dispatch = useDispatch();

    const selectQtyPage = (orders) => {
        const numberOfPages = Math.ceil(orders.length / pageQtl);
        console.log('selectQtyPage', orders, numberOfPages,orders.length, pageQtl)
        return numberOfPages;
    };

    const numberOfPages = selectQtyPage(props.orders);

    let [page, setPage] = useState(1);

    const handleChange = (event, page) => {
        if (props.type === 'AdminInWork') {
            dispatch(setPageAdmin(page));
        }
        if (props.type === 'AdminHistory') {
            dispatch(setPageHistory(page));
        }

        setPage(page);
        console.log('setPage', page);
    };
    return (
        <Box>
            <Stack spacing={2}>
                <Pagination
                    count={numberOfPages}
                    page={page}
                    style={{ margin: 30 }}
                    onChange={handleChange}
                />
            </Stack>
        </Box>
    );
};
export default PaginationComponent;