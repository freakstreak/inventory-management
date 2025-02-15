import { Typography } from "@mui/material";
import React from "react";
import Toggle from "../components/primitives/Toggle";
import LogoutIcon from "@mui/icons-material/Logout";

interface IHeader {
  adminView: boolean;
  setAdminView: React.Dispatch<React.SetStateAction<boolean>>;
}
const Header = ({ adminView, setAdminView }: IHeader) => {
  return (
    <div className="flex justify-end items-center mb-5 gap-12">
      <div className="flex items-center ">
        <Typography>admin</Typography>
        <Toggle
          toggleFlag={!adminView}
          setToggleFlag={() => setAdminView((prev) => !prev)}
        />
        <Typography>user</Typography>
      </div>

      <LogoutIcon />
    </div>
  );
};

export default Header;
