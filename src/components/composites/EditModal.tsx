import React from "react";
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import { IProduct } from "../../types/IProduct";
import CloseIcon from "@mui/icons-material/Close";
import Input from "../primitives/Input";
import Dialog from "../primitives/Dialog";

interface EditModalProps {
  open: boolean;
  product: IProduct | null;
  onClose: () => void;
  onSave: (updatedProduct: IProduct) => void;
}

const EditModal: React.FC<EditModalProps> = ({
  open,
  product,
  onClose,
  onSave,
}) => {
  const [editedProduct, setEditedProduct] = React.useState<IProduct | null>(
    product
  );

  React.useEffect(() => {
    setEditedProduct(product);
  }, [product]);

  if (!editedProduct) return null;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle className="!px-6 !pb-1 !pt-6 flex justify-between items-center bg-gray-800 text-white">
        <Typography variant="h4">Edit Product</Typography>
        <IconButton
          onClick={onClose}
          className="!text-green-secondary !rounded-none"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className="bg-gray-800 text-white px-6">
        <p className=" mb-4">Samsung S24 Ultra</p>
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 ">
          <div className=" !w-full flex-col gap-2">
            <label className="">Category</label>
            <Input
              type="text"
              fullWidth
              className="mb-4"
              value={editedProduct.category || ""}
              onChange={(e) =>
                setEditedProduct((prev: any) =>
                  prev ? { ...prev, category: e.target.value } : null
                )
              }
            />
          </div>
          <div className="!w-full flex-col gap-2">
            <label>Price</label>
            <Input
              type="number"
              fullWidth
              className="mb-4 "
              value={Number(editedProduct.price.replace("$", ""))}
              onChange={(e) =>
                setEditedProduct((prev: any) =>
                  prev ? { ...prev, price: "$" + e.target.value } : null
                )
              }
            />
          </div>
          <div className="!w-full flex-col gap-2">
            <label>Quantity</label>
            <Input
              type="number"
              fullWidth
              className="mb-4 "
              value={editedProduct?.quantity}
              onChange={(e) =>
                setEditedProduct((prev: any) =>
                  prev ? { ...prev, quantity: e.target.value } : null
                )
              }
            />
          </div>
          <div className="!w-full flex-col gap-2">
            <label>Value</label>
            <Input
              type="number"
              disabled
              fullWidth
              className="mb-4 !text-white "
              value={
                editedProduct?.quantity &&
                editedProduct.quantity *
                  Number(editedProduct?.price.replace("$", ""))
              }
              onChange={(e) =>
                setEditedProduct((prev: any) =>
                  prev ? { ...prev, price: "$" + e.target.value } : null
                )
              }
            />
          </div>
        </div>
      </DialogContent>
      <DialogActions className="bg-gray-800 !p-6">
        <Button
          onClick={onClose}
          className="!text-green-secondary !font-thin !hover:bg-gray-700"
        >
          Cancel
        </Button>
        <Button
          onClick={() => onSave(editedProduct)}
          className="!bg-gray-700 !text-gray-primary !font-thin "
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditModal;
