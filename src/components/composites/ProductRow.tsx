// components/ProductRow.tsx
import React from "react";
import { Edit, Delete, VisibilityOff } from "@mui/icons-material";
import { IProduct } from "../../types/IProduct";
import { TableCell, TableRow } from "../primitives/Table";
import IconButton from "../primitives/IconButton";

interface ProductRowProps {
  product: IProduct;
  adminView: boolean;
  onEdit: (product: IProduct) => void;
  onDelete: (id: string) => void;
  onDisable: (id: string) => void;
}

const ProductRow: React.FC<ProductRowProps> = ({
  product,
  adminView,
  onEdit,
  onDelete,
  onDisable,
}) => (
  <TableRow className={product.disabled ? "opacity-50 " : ""}>
    <TableCell>{product.name}</TableCell>
    <TableCell>{product.category}</TableCell>
    <TableCell>{product.price}</TableCell>
    <TableCell>{product.quantity}</TableCell>
    <TableCell>
      {Number(product.price.replace("$", "")) * product.quantity}
    </TableCell>
    <TableCell>
      <IconButton
        disabled={product.disabled || !adminView}
        onClick={() => onEdit(product)}
      >
        <Edit className=" text-green-300" />
      </IconButton>
      <IconButton disabled={!adminView} onClick={() => onDisable(product.id)}>
        <VisibilityOff className="text-purple-primary" />
      </IconButton>
      <IconButton disabled={!adminView} onClick={() => onDelete(product.id)}>
        <Delete className="text-red-primary" />
      </IconButton>
    </TableCell>
  </TableRow>
);

const EmptyProductRow: React.FC = () => (
  <TableRow>
    <TableCell colSpan={6} align="center">
      No products available
    </TableCell>
  </TableRow>
);

export { ProductRow, EmptyProductRow };
