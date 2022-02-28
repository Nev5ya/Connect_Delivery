import { useState } from 'react';

import { IconButton, Drawer } from '@mui/material';
import {
  Menu as MenuIcon,
  ArrowBack as ArrowBackIcon,
} from '@mui/icons-material';

// Компонент принимает в себя другой компонент в качестве пропса и выводит его в меню.
// Оберните свой компонент BOX из MUI с нужной шириной.

export default function TemporaryDrawer({ menuContent }) {
  const MenuContent = menuContent;

  const [state, setState] = useState(false);

  const toggleDrawer = () => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    )
      return;
    setState(!state);
  };

  return (
    <>
      <IconButton onClick={toggleDrawer()}>
        {state ? <ArrowBackIcon /> : <MenuIcon />}
      </IconButton>
      <Drawer open={state} onClose={toggleDrawer()}>
        <MenuContent />
      </Drawer>
    </>
  );
}