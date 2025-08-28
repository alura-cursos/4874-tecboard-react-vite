import CssBaseline from '@mui/material/CssBaseline'
import { Board } from './pages/Board'
import { ThemeProvider } from '@mui/material'
import theme from './theme'
import { Form } from './pages/Form'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Board />
    </ThemeProvider>
  )
}

export default App
