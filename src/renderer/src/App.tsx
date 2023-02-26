import { ThemeProvider } from 'styled-components'
import { FileContextProvider } from './context/FileContext'
import { Routes } from './router'
import { GlobalTheme } from './styles/global'
import theme from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <FileContextProvider>
        <Routes />
      </FileContextProvider>
      <GlobalTheme />
    </ThemeProvider>
  )
}
