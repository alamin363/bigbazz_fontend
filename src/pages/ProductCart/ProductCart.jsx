import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const FoodCart = ({ prodt }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "350px",
        padding: "30px 20px",
        borderRadius: "10px",
        "&:hover": {
          cursor: "pointer",
          boxShadow: "10px 10px 20px #f90f3c",
        },
      }}
      onClick={() => navigate(`/product-details/${prodt._id}`)}
    >
      <Box
        sx={{
          mb: 3,
          width: "80%",
          margin: "0 auto",
        }}
      >
        <img
          src={prodt.defaultImage}
          alt="breakfast"
          style={{
            width: "100%",
          }}
        />
      </Box>
      <Box>
        <Typography
          sx={{
            fontWeight: "bold",
            textAlign: "center",
          }}
          variant="h6"
        >
          {prodt.title}
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            color: "#8D8D8D",
          }}
        >
          {prodt.description.length > 50
            ? prodt?.description.slice(0, 50) + "..."
            : prodt.description}
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            mt: 2,
          }}
          variant="h5"
        >
          ${prodt.price}
        </Typography>
      </Box>
    </Box>
  );
};

export default FoodCart;
