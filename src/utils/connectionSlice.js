import { createSlice, isAction } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connetions",
  initialState: [],
  reducers: {
    addConnections: (state, action) => action.payload,
    removeConnections: () => null,
  },
});

export const { addConnections, removeConnections } = connectionSlice.actions;
export default connectionSlice.reducer;
