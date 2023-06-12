import React from 'react';
import { Store } from './types/types';

const Context = React.createContext<Store>({} as Store);

export default Context;
