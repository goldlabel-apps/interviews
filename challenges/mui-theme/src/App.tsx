import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const theme = createTheme({
  palette: {
    mode: 'light',
  },
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm" style={{ marginTop: '4rem' }}>
        <Typography variant="h4" gutterBottom>
          MUI Theme Challenge
        </Typography>
        <Typography>
          Update the theme to use dark mode and set the primary color to green.
        </Typography>
      </Container>
    </ThemeProvider>
  )
}
