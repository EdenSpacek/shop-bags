import { Favorite, FitScreen, Share } from "@mui/icons-material";
import { Stack, Tooltip } from "@mui/material";
import React from "react";
import {
  Product,
  ProductActionButton,
  ProductActionsWrapper,
  ProductAddToCart,
  ProductFavButton,
  ProductImage,
} from "../../styles/products";
import ProductMeta from "./ProductMeta";

const SingleProduct = ({ product, matches }) => {
  return (
    <>
      <Product>
        <ProductImage src={product.image} />
        <ProductMeta product={product} matches={matches} />
        <ProductActionsWrapper>
          <Stack direction={"row"}>
            <ProductFavButton isfav={0}>
              <Favorite />
            </ProductFavButton>
            <ProductActionButton>
              <Tooltip placement="left" title="share this product">
                <Share color="primary" />
              </Tooltip>
            </ProductActionButton>
            <ProductActionButton onClick={() => {}}>
              <Tooltip placement="left" title="Full view">
                <FitScreen color="primary" />
              </Tooltip>
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductAddToCart variant="contained">Add to cart</ProductAddToCart>
    </>
  );
};

export default SingleProduct;
