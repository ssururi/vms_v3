import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import reducers from './reducers';
import { api } from './api';

const store = configureStore({
    reducer: {
        global: reducers,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefault) => getDefault().concat(api.middleware)
});
setupListeners(store.dispatch);

const { dispatch } = store;

export { store, dispatch };
