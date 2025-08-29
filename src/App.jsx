import CssBaseline from '@mui/material/CssBaseline'
import { Board } from './pages/Board'
import { ThemeProvider } from '@mui/material'
import theme from './theme'
import { Form } from './pages/Form'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Board />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
