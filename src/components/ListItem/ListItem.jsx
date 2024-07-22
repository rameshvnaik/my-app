import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';



export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemText primary="My Moves" />
    </ListItemButton>
    <ListItemButton>
      <ListItemText primary="My Profile" />
    </ListItemButton>
    <ListItemButton>
      <ListItemText primary="Get Quote" />
    </ListItemButton>
    <ListItemButton>
      <ListItemText primary="Logout" />
    </ListItemButton>

  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>

  </React.Fragment>
);

