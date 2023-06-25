import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      
      <Box 
        sx={{bgcolor:'gray',
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
         
        </p>
        <br />
        <p>
       Enter Your About
        </p>
      </Box>
    </Layout>
  );
};

export default About;
