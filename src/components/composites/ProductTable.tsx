import { IProduct } from "../../types/IProduct";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "../primitives/Table";
import { EmptyProductRow, ProductRow } from "./ProductRow";

interface ProductTableProps {
  products: IProduct[];
  adminView: boolean;
  onEdit: (product: IProduct) => void;
  onDelete: (id: string) => void;
  onDisable: (id: string) => void;
}

const ProductTable: React.FC<ProductTableProps> = ({
  products,
  adminView,
  onEdit,
  onDelete,
  onDisable,
}) => (
  <TableContainer className="rounded-md">
    <Table>
      <TableHead className="bg-gray-tertiary">
        <TableRow>
          <TableCell isHeading={true}>Name</TableCell>
          <TableCell isHeading={true}>Category</TableCell>
          <TableCell isHeading={true}>Price</TableCell>
          <TableCell isHeading={true}>Quantity</TableCell>
          <TableCell isHeading={true}>Value</TableCell>
          <TableCell isHeading={true}>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody className="bg-gray-tertiary">
        {/* Show an empty row if there are no products, otherwise show the product rows. */}
        {!products.length ? (
          <EmptyProductRow />
        ) : (
          products.map((product, index) => (
            <ProductRow
              key={index}
              product={product}
              adminView={adminView}
              onEdit={onEdit}
              onDelete={onDelete}
              onDisable={onDisable}
            />
          ))
        )}
      </TableBody>
    </Table>
  </TableContainer>
);

export default ProductTable;
