import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todo/todoSlice.js";
import cartReducer from "./features/todo/cartSlice.js"

export const store = configureStore({
    reducer: {
        todos: todoReducer,
        carts: cartReducer,
    }
})
// reducer ले राख्ने भनेको initialState को data लाई हो । जुन भिन्न भिन्न slice.js मा सूजना गरेको initialState बाट आउने गर्छ ।
//दोस्रो कुरा, यदि हामीले कुनै तरिकाबाट कुनै पनि slice.js को initialState को data को value मा परिवर्तन गर्दछौ भने store रहेको data मा समेत automatic रुपमा परिवर्तन हुन जान्छ ।
//slice.js मा कुनै नया data add गरोस वा delete गरोस त्यसको असर store मा रहेको data मा पर्न जान्छ ।
console.log(store.getState())

