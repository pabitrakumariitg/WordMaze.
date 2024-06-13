import React from "react";
import TableRowsRoundedIcon from "@mui/icons-material/TableRowsRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import SettingsIcon from "@mui/icons-material/Settings";

const Navbar = () => {
  return (
    <div className="navbar">
      <TableRowsRoundedIcon sx={{ fontSize: 60 }} />
      <h1 className="middle">Word Maze </h1>
      <div className="right">
        <HelpOutlineRoundedIcon sx={{ fontSize: 60 }} />
        <EqualizerIcon sx={{ fontSize: 60 }} />
        <SettingsIcon sx={{ fontSize: 60 }} />
        <button className="subscribe">Subscribe to Games</button>
      </div>
    </div>
  );
};

export default Navbar;