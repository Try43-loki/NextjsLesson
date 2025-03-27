// export const getAllProductService = async () => {
//   try {
//     const res = await fetch(
//       "https://655c2c57ab37729791a9f8b0.mockapi.io/api/products"
//     );
//     // convert data into javascript
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.log("error ", error);
//   }
// };

// // get product by id
// export const getProductById = async (proId) => {
//   try {
//     const res = await fetch(
//       `https://655c2c57ab37729791a9f8b0.mockapi.io/api/products/${proId}`
//     );
//     const data = await res.json();
//     return data;
//   } catch (e) {
//     console.log("Error ", e);
//   }
// };

export const getAllProductService = async () => {
  try {
    const res = await fetch(
      "https://655c2c57ab37729791a9f8b0.mockapi.io/api/products"
    );
    // convert to object
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error ", error);
  }
};

export const getProductByIdService = async (proId) => {
  try {
    const res = await fetch(
      `https://655c2c57ab37729791a9f8b0.mockapi.io/api/products/${proId}`
    );
    // convert res to object javascript object
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error ", error);
  }
};

// get team members

export const getTeamMembersService = async () => {
  try {
    const res = await fetch(
      "https://655c2c57ab37729791a9f8b0.mockapi.io/api/teams"
    );
    // convert to object
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error ", error);
  }
};
