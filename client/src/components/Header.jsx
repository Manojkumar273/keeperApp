import React from "react";
import HighlightIcon from '@mui/icons-material/Highlight';
import Search from "./Search";
import { Grid } from "@mui/material";

function Header() {
  return (
    <header>
      <Grid 
      container direction="row" 
      justifyContent="space-between" 
      alignItems="flex-start">
        <h1>
          <HighlightIcon />
          KeeperApp
        </h1>
        <Search/>
      </Grid>
    </header>
  );
}

export default Header;
