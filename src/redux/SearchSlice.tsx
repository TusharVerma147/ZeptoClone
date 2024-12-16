import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: number;
  name: string;
  image: string;
}

interface SearchState {
  searchHistory: Product[];
}

const initialState: SearchState = {
  searchHistory: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addSearchTerm: (state, action: PayloadAction<Product>) => {
      console.log("ACTION",action)
      
      const existingIndex = state.searchHistory.findIndex(item => item.id === action.payload.id);
      if (existingIndex !== -1) {
        state.searchHistory.splice(existingIndex, 1); 
      }
      state.searchHistory.unshift(action.payload); 
    },
    updateSearchHistory: (state, action: PayloadAction<Product[]>) => {
      state.searchHistory = action.payload;  
    },
  },
});

export const { addSearchTerm, updateSearchHistory } = searchSlice.actions;
export default searchSlice.reducer;
