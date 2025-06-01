import { configureStore } from '@reduxjs/toolkit';
import titleReducer from '../slice/TitleSlice';
export default configureStore({
  reducer: {
    titleHeader: titleReducer,
  },
});
