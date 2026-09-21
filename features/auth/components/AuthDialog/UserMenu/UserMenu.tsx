"use client";

import { useState } from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

import { useAuth } from "@/context/AuthContext";

export default function UserMenu() {
  const { currentUser, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  if (!currentUser) {
    return null;
  }

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    logout();
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          ml: 1,
          p: 0.5,
          border: "1px solid rgba(255,255,255,0.12)",
          "&:hover": {
            borderColor: "rgba(245,158,11,0.5)",
          },
        }}
      >
        <Avatar
          sx={{
            width: 36,
            height: 36,
            bgcolor: "#f59e0b",
            color: "#020617",
            fontWeight: 700,
          }}
        >
          {currentUser.username.charAt(0).toUpperCase()}
        </Avatar>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              minWidth: 220,
              bgcolor: "#0f172a",
              color: "#f8fafc",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 0.5,
            },
          },
        }}
      >
        <Box sx={{ px: 2, py: 1.5 }}>
          <Typography sx={{ fontWeight: 700 }}>
            {currentUser.username}
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "#94a3b8", mt: 0.25 }}
          >
            {currentUser.email}
          </Typography>
        </Box>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonOutlineRoundedIcon sx={{ color: "#94a3b8" }} />
          </ListItemIcon>
          <ListItemText>Profile</ListItemText>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <MenuBookRoundedIcon sx={{ color: "#94a3b8" }} />
          </ListItemIcon>
          <ListItemText>My Courses</ListItemText>
        </MenuItem>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />

        <MenuItem
          onClick={handleLogout}
          sx={{
            color: "#f87171",
            "&:hover": {
              bgcolor: "rgba(239,68,68,0.08)",
            },
          }}
        >
          <ListItemIcon>
            <LogoutRoundedIcon sx={{ color: "#f87171" }} />
          </ListItemIcon>
          <ListItemText>Sign Out</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}