import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryCache, ReactQueryCacheProvider } from "react-query";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation/";
import { IdentityProvider } from "./src/providers/identity";
import Toast from "./src/shared/components/toast/toast.comp";
import { ToastProvider } from "./src/shared/components/toast-provider/toast-provider";

const queryCache = new QueryCache();

export default function App() {
  console.disableYellowBox = true;
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <IdentityProvider>
        <SafeAreaProvider>
          <ReactQueryCacheProvider queryCache={queryCache}>
            <ToastProvider>
              <Navigation colorScheme={colorScheme} />
              <StatusBar />
              <Toast />
            </ToastProvider>
          </ReactQueryCacheProvider>
        </SafeAreaProvider>
      </IdentityProvider>
    );
  }
}
