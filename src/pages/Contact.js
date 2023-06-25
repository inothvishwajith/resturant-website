import React from "react";
import Layout from "./../components/Layout/Layout";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import Banner from "../images/banner.jpg";
import "../styles/HomeStyles.css";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        
       
        <div className="headerContainerr">
     <h4>
     Contact My Restaurant
        </h4>
        </div>
        <div className="headerContainerr">
     <h1>
        What can we help you with today?
        </h1>
        </div>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "white", color: "black" }}
                  align="center"
                >
                  Contact Us
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <WhatsAppIcon sx={{ color: "red", pt: 1 }} /> 0705635410
                  (WhatsApp)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} />{" "}
                  <a href="vishwajithinoth@gmail.com">vishwajithinoth@gmail.com</a>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} />{" "}
                  <a href="tel:+0705635410">0705635410</a>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      </div>
    </Layout>
  );
};

export default Contact;
