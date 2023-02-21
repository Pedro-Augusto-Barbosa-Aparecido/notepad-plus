import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { Toolbar } from './components/Toolbar'
import { GlobalTheme } from './styles/global'
import theme from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Toolbar />
      <GlobalTheme />
    </ThemeProvider>
  )
}
