import { DialogProps, Dialog as MuiDialog } from "@mui/material";

const Dialog = ({ ...props }: DialogProps) => {
  return (
    <MuiDialog
      className="p-4 !rounded-3xl"
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "10px",
          border: "none",
        },
      }}
      {...props}
    ></MuiDialog>
  );
};

export default Dialog;
