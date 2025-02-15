import { TextField, TextFieldProps } from "@mui/material";
import React from "react";

const Input = ({ ...props }: TextFieldProps) => {
  return (
    <TextField
      sx={{
        "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button":
          {
            display: "none",
          },
        "& input[type=number]": {
          MozAppearance: "textfield",
        },
        "& .MuiOutlinedInput-root": {
          border: "none", // Remove outer border
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none", // Remove focus border
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          border: "none", // Remove hover border
        },
        "& .MuiInputBase-input": {
          color: "#C5C5C6", // Ensure text color is white
        },
        "& .Mui-focused": {
          outline: "none !important",
          boxShadow: "none !important",
        },
      }}
      {...props}
      className="mb-4 bg-gray-700 rounded-xl border-none"
    />
  );
};

export default Input;
