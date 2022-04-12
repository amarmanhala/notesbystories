import { createSlice } from "@reduxjs/toolkit";

export const ChangeBackground = createSlice({
  name: "changeBackground",
  initialState: {
    background: "transparent",
    count: 0,
  },
  reducers: {
    changeBackground: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (state.count >= 4) {
        state.background = "transparent";
        state.count = 0;
      } else {
        state.count += 1;
        switch (state.count) {
          case 1:
            state.background = "red";
            break;

          case 2:
            state.background = "green";
            break;

          case 3:
            state.background = "yellow";
            break;

          case 4:
            state.background = "purple";
            break;
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeBackground } = ChangeBackground.actions;

export default ChangeBackground.reducer;
