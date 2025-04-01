import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import notificationData from "../../Data/notification.json";


interface Notification {
  title: string;
  message: string;
  time: string;
  id: number
}

interface NotificationState {
  notifications: Notification[];
}

const initialState: NotificationState = {
  notifications: notificationData || [],
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Notification>) => {
      state.notifications.unshift(action.payload);
    },
    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter((item) => item.id !== action.payload);
    },
  }
})

export const { addNotification, removeNotification } = notificationSlice.actions;
export default notificationSlice.reducer