import { rootReducer } from '@app/store/root-reducer';
import { store } from '@app/store/store';

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<typeof rootReducer>;
