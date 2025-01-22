export const allProducts = `*[_type == "product"] {
    productName,
    category,
    price,
    inventory,
    colors,
    status,
    image { asset -> { _id, url } }, 
    description
  }`;
  