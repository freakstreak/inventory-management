import React, { useState, useEffect } from "react";
import { IProduct } from "./types/IProduct";
import ProductTable from "./components/composites/ProductTable";
import EditModal from "./components/composites/EditModal";
import { Alert, Snackbar, Typography } from "@mui/material";

import axios, { AxiosError } from "axios";
import Loader from "./components/composites/Loader";
import Stats from "./components/composites/Stats";
import Header from "./layout/Header";
import Layout from "./layout";

const InventoryApp: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [adminView, setAdminView] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory"
      );
      setProducts((product) => {
        if (response?.data?.length) {
          return response.data.map((p: IProduct, index: number) => {
            return { ...p, id: index };
          });
        }
        return [];
      });
    } catch (error: AxiosError | any) {
      setError(error?.statusText ?? error?.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    return;
  }, []);

  // Function to edit a product
  const handleEdit = (product: IProduct) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  // Function to save the edited product
  const handleSave = (editedProduct: IProduct) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === editedProduct.id ? editedProduct : p))
    );

    setOpen(false);
  };

  // Function to delete a product
  const handleDelete = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  // Function to disable/enable a product
  const handleDisable = (id: string) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, disabled: !p?.disabled } : p))
    );
  };

  return (
    <div>
      {loading ? (
        // Show loader while fetching data
        <Loader open={loading} />
      ) : (
        // Show the main content
        <Layout>
          {/* Heading and Layout Section */}
          <Header adminView={adminView} setAdminView={setAdminView} />

          {/* Inventory Stats Section */}
          <div className="mb-4">
            <Typography variant="h4" className="text-white !font-thin">
              Inventory Stats
            </Typography>
          </div>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2  w-full gap-4 mt-4 mb-8">
            <Stats products={products} />
          </div>

          {/* Products Table Section */}
          <ProductTable
            products={products}
            adminView={adminView}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onDisable={handleDisable}
          />
          <EditModal
            open={open}
            product={selectedProduct}
            onClose={() => {
              setSelectedProduct(null);
              setOpen(false);
              return;
            }}
            onSave={handleSave}
          />
        </Layout>
      )}

      {/* Error Toast */}
      {error && (
        <Snackbar
          open={!!error}
          autoHideDuration={6000}
          onClose={() => setError(null)}
        >
          <Alert severity="error">{error}</Alert>
        </Snackbar>
      )}
    </div>
  );
};

export default InventoryApp;
