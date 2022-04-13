import Pagination from '@mui/material/Pagination';
import {Stack, Box, TablePagination} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
//import { selectQtyPage} from '../../store/orders/selector';
//import {pageQtl} from "../../utils/constants";
import {setPageAdmin, setPageHistory} from "../../store/orders/actions";

const PaginationComponent = ({rows, pageQtl, changePage, changeRowsPerPage }) => {
     const dispatch = useDispatch();
    console.log('PaginationComponent1', rows);
    // const selectQtyPage = (rows) => {
    //     const numberOfPages = Math.ceil(rows.length / pageQtl);
    //     console.log('selectQtyPage', rows, numberOfPages,rows.length, pageQtl)
    //     return numberOfPages;
    // };
    //
    // const numberOfPages = selectQtyPage(rows);

    let [page, setPage] = useState(0);

    const handleChangePage = (event, newPage) => {
        // if (props.type === 'AdminInWork') {
        //     dispatch(setPageAdmin(page));
        // }
        // if (props.type === 'AdminHistory') {
        //     dispatch(setPageHistory(page));
        // }

        setPage(newPage);
        changePage(event, newPage);
        console.log('setPage', newPage);
    };
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(1);
        changeRowsPerPage(event)
        console.log('handleChangeRowsPerPage', page, rowsPerPage, event.target.value);
    };
    console.log('PaginationComponent', page, rowsPerPage);
    return (
        <Box>
            {rows &&
            <Stack spacing={2}>
                {/*<Pagination*/}
                {/*    count={numberOfPages}*/}
                {/*    page={page}*/}
                {/*    style={{ margin: 30 }}*/}
                {/*    onChange={handleChange}*/}
                {/*/>*/}
                <TablePagination
                    rowsPerPageOptions={[2, 5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Stack>
            }
        </Box>
    );
};
export default PaginationComponent;