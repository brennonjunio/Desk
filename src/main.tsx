import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import {Toaster} from 'sonner'

import { ThemeProvider } from 'styled-components'
import themes from './styles/themes.ts'
import GlobalStyles from './styles/global.ts'
import { Routes } from './routes/index.tsx'
import { AuthProvider } from './hooks/auth.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
      <Toaster />
        <ThemeProvider theme={themes}>
          <Helmet titleTemplate='%s | Gerenciador.BRN ' />
          <GlobalStyles />
          <Routes />
        </ThemeProvider>
      </HelmetProvider>
    </AuthProvider >
  </StrictMode>,
)
