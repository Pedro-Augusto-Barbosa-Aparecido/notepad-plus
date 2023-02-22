import { ThemeProvider } from 'styled-components'
import { Routes } from './router'
import { GlobalTheme } from './styles/global'
import theme from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalTheme />
    </ThemeProvider>
  )
}
