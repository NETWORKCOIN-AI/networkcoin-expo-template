import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

export function useFrameworkReady() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);
}
