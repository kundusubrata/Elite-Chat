import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(135deg, rgb(234 216 102 / 73%), rgb(69 2 2 / 87%))",
      }}
      height="100%"
    >
      <Typography p={"2rem"} textAlign={"center"} variant="h5">Select a Friend to Chat</Typography>
    </Box>
  );
};

export default AppLayout()(Home);
