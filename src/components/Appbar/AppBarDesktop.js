import { Search } from "@mui/icons-material";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import {
  ActionIconsContainerDesktop,
  ActionIconsContainerMobile,
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../../styles/appbar";
import Action from "./Action";

const AppBarDesktop = ({ matches }) => {
  

  return (
      <AppbarContainer>
        <AppbarHeader>My Bags</AppbarHeader>
        <MyList type="row">
          <ListItemText primary="Home" />
          <ListItemText primary="Categories" />
          <ListItemText primary="Products" />
          <ListItemText primary="Contact Us" />
          <ListItemButton>
            <ListItemIcon>
              <Search />
            </ListItemIcon>
          </ListItemButton>
        </MyList>
        <Action matches={matches} />
      </AppbarContainer>
  );
};

export default AppBarDesktop;
