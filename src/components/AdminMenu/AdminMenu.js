import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const AdminMenu = ({onClick}) => {

  const menuItem = [
    {
      text: 'Главная',
      option: '0'
    },
    {
      text: 'Чаты',
      option: '1'
    },
    {
      text: 'Карта',
      option: '2'
    },
    {
      text: 'Управление курьерами',
      option: '3'
    },
    {
      text: 'Зарегистрировать нового курьера',
      option: '4'
    },
  ]
const onClose = () => {
  console.log('menu closed')
}
  return (

    <Box sx={{
      width: 450,
      typography: 'body1',
      ml: '20px',
      mt: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    }}>

      <h3>
        <Button onClick={onClose} variant="text">
          <ArrowBackIcon/>
        </Button>
        Страница администратора
      </h3>
      {menuItem.map(({text, option}) => (
        <Button key={option} onClick={() => onClick(option)}>
          {text}
        </Button>
      ))}
    </Box>
  );
}

