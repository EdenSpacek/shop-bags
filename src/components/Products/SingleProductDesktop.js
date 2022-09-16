import { Favorite, FitScreen, Share } from "@mui/icons-material";
import { Stack, Tooltip } from "@mui/material";
import React, { useState } from "react";
import {
  Product,
  ProductActionButton,
  ProductActionsWrapper,
  ProductAddToCart,
  ProductFavButton,
  ProductImage,
} from "../../styles/products";
import ProductMeta from "./ProductMeta";

const SingleProductDesktop = ({ product, matches }) => {
  // const [ProductDetailDialog, showProductDetailDialog, closeProductDialog] = useDialogModal(ProductDetail);

  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };
  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image} />
        <ProductFavButton isfav={0}>
          <Favorite />
        </ProductFavButton>
        {(showOptions || matches) && (
          <ProductAddToCart show={showOptions} variant="contained">
            Add to cart
          </ProductAddToCart>
        )}
        <ProductActionsWrapper show={showOptions}>
          <Stack direction={"column"}>
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
        <ProductMeta product={product} matches={matches} />
    </>
  );
};

export default SingleProductDesktop;
