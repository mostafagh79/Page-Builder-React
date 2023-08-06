import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

export const saveSettings = createAsyncThunk(
  "settings/saveSettings",
  async (id, settings) => {
    const setting = settings
      .getState()
      .settings.settings.find((setting) => setting.id === id);
    const response = await axios.put(
      `${import.meta.env.VITE_SERVER_URL}/${id}`,
      setting
    );
    return response.data;
  }
);

export const loadSettings = createAsyncThunk(
  "settings/loadSettings",
  async () => {
    console.log(`${import.meta.env.VITE_SERVER_URL}`);
    const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}`);
    return response.data;
  }
);

const initialState = {
  settings: [],
  status: "idle",
  error: null,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    updateStyle(state, action) {
      const { id, field, value } = action.payload;
      const setting = [...state.settings].find((setting) => {
        return setting.id === id;
      });

      setting.props.styles[field] = value;
    },
    updateSettings(state, action) {
      const { id, field, value } = action.payload;
      const setting = [...state.settings].find((setting) => setting.id === id);
      setting.props[field] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveSettings.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(saveSettings.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(saveSettings.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(loadSettings.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadSettings.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.settings = action.payload;
      })
      .addCase(loadSettings.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { updateStyle, updateSettings } = settingsSlice.actions;

export default settingsSlice.reducer;
