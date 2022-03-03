import * as React from 'react';
import Box from '@mui/material/Box';
import {CourierStatusChange} from "../CourierStatusChange/CourierStatusChange";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const CourierMenu = ({onClick}) => {

    return (
      <>
          <Box sx={{width: 400, typography: 'body1'}}>
              <Grid direction="column" container spacing={3} mt='30px' ml='30px'>
                  <h3>
                      <Button>
                          <ArrowBackIcon/>
                      </Button>
                      Страница курьера</h3>
                  <Grid item xs={6}>
                      <CourierStatusChange/>
                  </Grid>
                  <Grid item xs={6}>
                      <Button onClick={onClick}>
                          Чат с администратором
                      </Button>
                  </Grid>
              </Grid>
          </Box>
      </>
    );
}
