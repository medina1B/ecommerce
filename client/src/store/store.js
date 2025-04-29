import { configureStore } from "@reduxjs/toolkit"; // Remove parentheses around the module name
import authReducer from "./auth-slice"; // Fix the typo in the import statement
import adminProductsSlice from "./admin/products-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProducts: adminProductsSlice, // Ensure the key matches your state structure
  },
});

export default store; // Export the store
