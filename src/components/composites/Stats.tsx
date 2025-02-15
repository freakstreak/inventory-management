import React from "react";
import { IProduct } from "../../types/IProduct";
import Card, { ICard } from "./Card";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import CategoryIcon from "@mui/icons-material/Category";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Stats = ({ products }: { products: IProduct[] }) => {
  const stats: ICard[] = [
    {
      label: "Total product",
      value: products.length,
      icon: <ShoppingCartIcon fontSize="large" />,
    },
    {
      label: "Total store value",
      value: products.reduce((acc, curr) => {
        if (curr.disabled) return acc;
        return acc + Number(curr.price.replace("$", "")) * curr.quantity;
      }, 0),
      icon: <CurrencyExchangeIcon fontSize="large" />,
    },
    {
      label: "Out of stocks",
      value: products.filter((p) => p.quantity === 0 && !p.disabled).length,
      icon: <RemoveShoppingCartIcon fontSize="large" />,
    },
    {
      label: "No of Category",
      value: new Set(
        products
          .filter((p) => {
            if (!p.disabled) {
              return p.category;
            }
          })
          .map((p) => p.category)
      ).size,
      icon: <CategoryIcon fontSize="large" />,
    },
  ];
  return (
    <>
      {stats.map((stat, index) => (
        <Card
          key={index}
          icon={stat.icon}
          label={stat.label}
          value={stat.value}
        />
      ))}
    </>
  );
};

export default Stats;
