import {Stack, Box, TablePagination} from '@mui/material';

import { useState } from 'react';

const PaginationComponent = ({rows, changePage, changeRowsPerPage }) => {

    let [page, setPage] = useState(0);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        changePage(event, newPage);
        // console.log('setPage', newPage);
    };
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(1);
        changeRowsPerPage(event)
        // console.log('handleChangeRowsPerPage', page, rowsPerPage, event.target.value);
    };
    // console.log('PaginationComponent', page, rowsPerPage);

    return (
        <Box>
            {rows &&
            <Stack spacing={2}>
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