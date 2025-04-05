{/*import * as SecureStore from 'expo-secure-store';
import { useAuth } from '@clerk/clerk-expo';
import { useEffect } from 'react';

const storeClerkToken = async () => {
  try {
    const { getToken } = useAuth();
    const token = await getToken(); // Fetch the Clerk token

    if (token) {
      await SecureStore.setItemAsync('__clerk_client_jwt', token);
      console.log('Clerk token stored successfully:', token);
    } else {
      console.log('No token received from Clerk.');
    }
  } catch (error) {
    console.error('Error storing Clerk token:', error);
  }
};

export const ClerkTokenHandler = () => {
  useEffect(() => {
    storeClerkToken();
  }, []);

  return null;
};


import * as SecureStore from 'expo-secure-store'
import { Platform } from 'react-native'
import { TokenCache } from '@clerk/clerk-expo/dist/cache'

const createTokenCache = (): TokenCache => {
  return {
    getToken: async (key: string) => {
      try {
        const item = await SecureStore.getItemAsync(key)
        if (item) {
          console.log('${key} was used 🔐 \n')
        } else {
          console.log('No values stored under key: ' + key)
        }
        return item
      } catch (error) {
        console.error('secure store get item error: ', error)
        await SecureStore.deleteItemAsync(key)
        return null
      }
    },
    saveToken: (key: string, token: string) => {
      return SecureStore.setItemAsync(key, token)
    },
  }
}

// SecureStore is not supported on the web
export const tokenCache = Platform.OS !== 'web' ? createTokenCache() : undefined


*/}


import * as SecureStore from 'expo-secure-store'
import { Platform } from 'react-native'
import { TokenCache } from '@clerk/clerk-expo/dist/cache'

const createTokenCache = (): TokenCache => {
  return {
    getToken: async (key: string) => {
      try {
        const item = await SecureStore.getItemAsync(key)
        if (item) {
          console.log(`${key} retrieved successfully 🔐`)
        } else {
          console.log(`No values stored under key: ${key}`)
        }
        return item
      } catch (error) {
        console.error('SecureStore get item error: ', error)
        await SecureStore.deleteItemAsync(key) // Fixed typo
        return null
      }
    },
    saveToken: async (key: string, token: string) => {
      console.log(`Saving token under key: ${key}, value: ${token}`)
      await SecureStore.setItemAsync(key, token, {
        keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
      })
    },
  }
}

// SecureStore is not supported on the web
export const tokenCache = Platform.OS !== 'web' ? createTokenCache() : undefined
