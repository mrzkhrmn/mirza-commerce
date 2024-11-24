import React from "react";

export function useHasStock() {
  const hasStock = (product) => {
    if (product.attributes?.sizes?.length > 0) {
      // Giysi: Beden stoklarını kontrol et
      return product.attributes.sizes.some((size) => size.stock > 0);
    }
    // Giysi değil: Genel stok bilgisini kontrol et
    return product.stock > 0;
  };
  return hasStock;
}
