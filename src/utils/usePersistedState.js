import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function usePersistedState(key, initialState) {
  const [state, setState] = useState(() => {})

  useEffect(() => {
    async function getAndSetInitialState() {
      try {
        const persistedState = await AsyncStorage.getItem(key)
        if (persistedState) {
          setState(JSON.parse(persistedState));
        } else if (typeof initialState === 'function') {
          return setState(initialState());
        } else {
          return setState(initialState);
        }
      } catch (error) {

      }
    }
    getAndSetInitialState()
  }, [key])

  const setPersistedState = async (value) => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    setState(value);
  }
  return [ initialState, setPersistedState ];
  // return [ state, setPersistedState ];
}

export default usePersistedState;
