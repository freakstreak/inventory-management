import { Backdrop, BackdropProps, CircularProgress } from "@mui/material";
import React from "react";

const Loader = ({ ...props }: BackdropProps) => {
  return (
    <Backdrop
      sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
      open={props.open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loader;
