import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export const ButtonTab = ({ value, setValue }) => {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab
          sx={{
            "&:hover": {
              color: "#f90f3c",
            },
          }}
          label="PHONE"
        />
        <Tab
          sx={{
            "&:hover": {
              color: "#f90f3c",
            },
          }}
          label="LAPTOP"
        />
        <Tab
          sx={{
            "&:hover": {
              color: "#f90f3c",
            },
          }}
          label="COMPUTER"
        />
        <Tab
          sx={{
            "&:hover": {
              color: "#f90f3c",
            },
          }}
          label="AC"
        />
        <Tab
          sx={{
            "&:hover": {
              color: "#f90f3c",
            },
          }}
          label="TV"
        />
      </Tabs>
    </Box>
  );
};
