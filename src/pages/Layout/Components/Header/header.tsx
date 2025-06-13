import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  InputBase,
  Divider,
} from "@mui/material";
import "material-icons/iconfont/material-icons.css";
import logo from "../../../../assets/icons/logo-bike-anjo.svg";
import Login from "../Header/Login";

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          borderBottomWidth: "1px",
          py: 2,
          px: 5,
          gap: "32px",
        }}
      >
        <img src={logo} alt="Logo Bike Anjo" width={51.06} height={48} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 403,
            backgroundColor: "#E2E8F0",
            borderRadius: "8px",
            py: 1.5,
            px: 2,
            gap: 1.5,
          }}
        >
          <span
            className="material-icons"
            style={{ fontSize: 24, color: "#486284" }}
          >
            search
          </span>
          <InputBase fullWidth />
        </Box>
        <Box
          component="nav"
          sx={{ display: "flex", alignItems: "center", gap: "32px" }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: 32,
            }}
          >
            <Typography
              fontWeight={600}
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              Ofereça Ajuda
            </Typography>
            <span
              className="material-icons"
              style={{
                fontSize: 20,
                alignItems: "center",
                userSelect: "none",
              }}
            >
              keyboard_arrow_down
            </span>
          </Box>
          <Typography fontWeight={600} fontSize={"15px"} whiteSpace={"nowrap"}>
            Receba Ajuda
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: 32,
            }}
          >
            <Typography
              fontWeight={600}
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              Iniciativas
            </Typography>
            <span
              className="material-icons"
              style={{
                fontSize: 20,
                alignItems: "center",
                userSelect: "none",
              }}
            >
              keyboard_arrow_down
            </span>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: 32,
            }}
          >
            <Typography
              fontWeight={600}
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              Iniciativas
            </Typography>
            <span
              className="material-icons"
              style={{
                fontSize: 20,
                alignItems: "center",
                userSelect: "none",
              }}
            >
              keyboard_arrow_down
            </span>
          </Box>
          <Typography fontWeight={600} fontSize={"15px"}>
            Contato
          </Typography>
        </Box>
        <Button
          sx={{
            width: 130,
            height: 49,
            backgroundColor: "#486284",
            borderRadius: "10px",
            padding: "19px 48px",
            fontWeight: 600,
            textTransform: "none",
            fontSize: "16px",
            color: "neutral-100",
          }}
        >
          Doar
        </Button>
        <Box>
          <Login />
        </Box>
      </Toolbar>
      <Divider />
    </AppBar>
  );
};

export default Header;
