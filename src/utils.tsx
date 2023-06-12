import React, { createContext, useContext, useState } from 'react';
import {
  Path,
  PathValue,
  pathGet,
  pathSet,
  pathSetImmutable,
} from 'object-standard-path';

type GlobalStateContext<T> =
  | {
      globalState: T;
      setGlobalState: (value: T) => void;
    }
  | undefined;

type GlobalStateProviderProps = {
  children?: React.ReactNode;
};

type CreateGlobalStateOptions<T> = {
  defaultState: T;
};

export const createGlobalState = <T,>(options: CreateGlobalStateOptions<T>) => {
  const { defaultState } = options;

  const Context = createContext<GlobalStateContext<T>>(undefined);

  const GlobalStateProvider = (props: GlobalStateProviderProps) => {
    const { children } = props;

    const [globalState, setGlobalState] = useState<T>(defaultState);

    return (
      <Context.Provider value={{ globalState, setGlobalState }}>
        {children}
      </Context.Provider>
    );
  };

  const useGlobalState = <P extends Path<T>>(path: P) => {
    const globalStateContext = useContext(Context);

    if (globalStateContext === undefined) {
      throw new Error(
        'useGlobalState must be used within a GlobalStateProvider',
      );
    }

    const { globalState, setGlobalState } = globalStateContext;

    const value = pathGet(globalState, path);

    const setValue = (value: PathValue<T, P>) => {
      setGlobalState(pathSetImmutable(globalState, path, value));
    };

    return [value, setValue] as const;
  };

  return { GlobalStateProvider, useGlobalState };
};
