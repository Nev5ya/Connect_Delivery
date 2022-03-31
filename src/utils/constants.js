import Brightness1Icon from '@mui/icons-material/Brightness1';

export const REQUEST_STATUS = {
  IDLE: 0,
  PENDING: 1,
  SUCCESS: 2,
  FAILURE: 3,
};

export const colorLabel = (typeLabel, status_id) => {
  //console.log('colorLabel', typeLabel, status)
  if (typeLabel === 'courier' && status_id === 2) {//'online'
    return 'green'
  }
  if (typeLabel === 'courier' && status_id === 1) {//'offline'
    return 'grey'
  }
  if (typeLabel === 'courier' && status_id === 3) {//'work'
    return 'red'
  }
  if (typeLabel === 'order' && status_id === 1 ) {//'processing'
    return 'blue'
  }
  if (typeLabel === 'order' && status_id === 3) {//'delivered'
    return 'yellow'
  }
  if (typeLabel === 'order' && status_id === 2) {//'transit'
    return 'orange'
  }
};

export const iconCourierStatus = (status_id) => {
  console.log('iconCourierStatus', status_id)
  if (status_id === 2) {//'online'
    return <Brightness1Icon sx={{color: "green"}}/>
  }
  if (status_id === 1) {//'offline'
    return <Brightness1Icon sx={{color: "grey"}}/>
  }
  if (status_id === 3) {//'work'
    return <Brightness1Icon sx={{color: "red"}}/>
  }
}
export const pageQtl = 2;
