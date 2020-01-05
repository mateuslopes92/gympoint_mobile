import AsysncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistReducers = persistReducer(
    {
      key: 'gympoynt',
      storage: AsysncStorage,
      whytelist: ['auth'],
    },
    reducers
  );

  return persistReducers;
};
