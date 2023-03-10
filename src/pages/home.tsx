import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tracker from "../partials/tracker";
import "../css/home.css";

// Mock Data
import billData from "../mocks/bills.json";

function Home() {
  return (
    <div>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
              ></IconButton>
              <div>Civix</div>
              <Button color="inherit">Admin</Button>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
      <div>
        <Tracker data={billData.bills} title="Bill Tracker" />
      </div>
    </div>
  );
}

export default Home;
