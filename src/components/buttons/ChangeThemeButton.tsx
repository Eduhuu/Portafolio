import {
  Button,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightIcon from "@mui/icons-material/Nightlight";

import { useAppDispatch, useAppSelector } from "../../store/AppStoreHooks";
import { changeTheme } from "../../store/features/theme/themeSlice";

export default function Header() {
  const theme = useAppSelector((state) => state.theme.value);
  const dispatch = useAppDispatch();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeTheme = (theme: number) => {
    theme === 1
      ? dispatch(changeTheme({ theme: "light" }))
      : dispatch(changeTheme({ theme: "dark" }));
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="outlined"
      >
        Tema
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            handleChangeTheme(1);
          }}
        >
          <ListItemIcon>
            <WbSunnyIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="body2" color="text.secondary">
            Claro
          </Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            {
              handleChangeTheme(2);
            }
          }}
        >
          <ListItemIcon>
            <NightlightIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="body2" color="text.secondary">
            Oscuro
          </Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}
