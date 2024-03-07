import { configureStore } from '@reduxjs/toolkit'
import { buildGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'
import { getDownloadURL } from 'firebase/storage'

export const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,

  })

  }
)
