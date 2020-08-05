import React, { useState } from "react";
import HighlightIcon from '@material-ui/icons/Highlight';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { Divider, ListItem } from "@material-ui/core";


function Header() {

  const [ToggleDrawer, setToggleDrawer] = useState(false);

  function handleToggle() {
    setToggleDrawer(preValue => {
      return !preValue
    })
  }
  return (
    <header>
      <h1><HighlightIcon onClick={handleToggle} /> Keeper</h1>
      <Drawer anchor={"left"} open={ToggleDrawer}>
        <p onClick={handleToggle} style={{ fontSize: '26px', cursor: 'pointer' }}>close</p>
        <Divider />
        <ListItem style={{ fontSize: '26px' }}>home</ListItem>

      </Drawer>
    </header>
  );
}

export default Header;
