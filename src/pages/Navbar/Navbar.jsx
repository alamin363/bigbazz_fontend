import React from "react";
import { Container } from "@mui/system";
import {
  Badge,
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Logout } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useAuth } from "../../components/UserContext/UserContext";
export const Navbar = () => {
  const { user, signOutUser } = useAuth();
  // const { cart } = useCart();
  const SignOut = () => {
    return signOutUser()
      .then((res) => {
        alert("log out");
      })
      .catch((err) => alert("log out failed"));
  };
  return (
    <Container>
      <Box
        justifyContent="space-between"
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "2rem 0",
          gap: 5,
        }}
      >
        <Box to="/" component={Link}>
          <Typography variant="h4">BigBazaar</Typography>
        </Box>
        <Stack direction="row" spacing={4}>
          <IconButton>
            <Badge
              // badgeContent={cart?.reduce((acu, cur) => {
              //   return acu + cur?.quantity;
              // }, 0)}
              badgeContent={6}
              color="primary"
            >
              <ShoppingCartOutlinedIcon titleAccess="added items" />
            </Badge>
          </IconButton>

          <Button
            sx={{ color: "#f90f3c" }}
            variant="text"
            to="/products"
            component={Link}
          >
            Product
          </Button>

          <Button
            sx={{ color: "#f90f3c" }}
            variant="text"
            to="/login"
            component={Link}
          >
            Sing In
          </Button>
          <Button sx={{ color: "#f90f3c" }} to="/register" component={Link}>
            Sing Up
          </Button>

          <IconButton onClick={SignOut}>
            <Logout titleAccess="Log out" />
          </IconButton>
          
          <IconButton>
            <PersonOutlineIcon titleAccess={user?.useName} color="#f90f3c" />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
};
