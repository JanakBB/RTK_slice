import {createSlice, nanoid} from "@reduxjs/toolkit"

const initialState = {
    cartIS: {
        id: nanoid(),
        productName: "iphon pro max",
        price: 999,
        brand: "apple"
    }
}

const cartSlice = createSlice({
    name: "008Cart",
    initialState,
    reducers: {
        addToCart: (state,action) => {
            newProduct = {
                id: nanoid(),
                productName: "macBook pro 16 inch",
                price: 2500,
                brand: "apple"
            }
            state.cartIS = state.cartIS.push(newProduct);
        },
        removeCart: (state, action) => {
            state.cartIS = state.cartIS.filter(item => item.id !== action.id);
        }
    }
})

export const {addToCart, removeCart} = cartSlice.actions;
// यसले functiion export गर्छ र जता प्रयोग हुन्छ त्यहाबााट argument को रुपमा आएको value लाई action.payload को रुपमा प्रयोग गर्न सकिन्छ ।

export default cartSlice.reducer;
//हामी reducer export गरे पनि जाने भनेको  initialState नै हो ।
//यो बाट बाहिर जाने भनेको initialState को भित्र भएको cartItems नै हो ।
