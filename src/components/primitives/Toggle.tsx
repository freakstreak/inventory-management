import React from "react";
import { Switch } from "@mui/material";

interface ToggleProps {
  toggleFlag: boolean;
  setToggleFlag: (value: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ toggleFlag, setToggleFlag }) => (
  <Switch
    sx={{
      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
        backgroundColor: "#7C8945", // Green track when checked
      },
      "& .MuiSwitch-thumb": {
        backgroundColor: toggleFlag ? "#CBE94F" : "#E0E0E0", // Thumb color
      },
      "& .MuiSwitch-track": {
        backgroundColor: "#E0E0E0", // Default track color when unchecked
      },
    }}
    checked={toggleFlag}
    onChange={() => setToggleFlag(!toggleFlag)} // Fix: Toggle state correctly
  />
);

export default Toggle;
