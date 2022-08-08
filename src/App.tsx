import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
<<<<<<< HEAD
=======
import { CyclesContextProvider } from './contexts/CyclesContext'
>>>>>>> 087ac49fe7d23ae15851b3b8c95026d74053f8ae
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
<<<<<<< HEAD
        <Router />
=======
      <CyclesContextProvider>
        <Router />
      </CyclesContextProvider>
>>>>>>> 087ac49fe7d23ae15851b3b8c95026d74053f8ae
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
