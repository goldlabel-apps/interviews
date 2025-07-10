# React MUI Theme Challenge

## Task

This is a minimal React app using MUI.

Your task is to:
- Modify the MUI theme to use a dark mode
- Change the primary color to a shade of green
- Bonus: Add a toggle switch in the UI to let the user switch between light and dark modes

## Setup

```bash
yarn && yarn dev
```

## Solution

The solution uses:

- `React.useState` to track light/dark mode.
- `React.useMemo` to create the theme object only when needed.
- MUI `Switch` and `FormControlLabel` to toggle the theme.
- The primary color is set to green (`#4caf50`).

**interviews/challenges/mui-theme/src/App.tsx**

```javascript
// Solution
import React from 'react'
import {
  ThemeProvider, 
  createTheme,
  CssBaseline,
  Container,
  Button,
  Switch,
  Typography,
} from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel'

export default function App() {
  const [darkMode, setDarkMode] = React.useState(true)

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
          primary: {
            main: '#4caf50', // green
          },
        },
      }),
    [darkMode]
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm" style={{ marginTop: '4rem' }}>
        <Typography variant="h4" gutterBottom>
          MUI Theme Challenge
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              color="primary"
            />
          }
          label="Dark Mode"
        />
        <Typography>
          Theme updated to use dark mode and the primary color is set to green.
        </Typography>
        <Button 
          variant='contained'
          sx={{
            my: 2
          }}
        >
          Primary
        </Button>
        <Button 
          color="secondary"
          variant='contained'
          sx={{
            m: 2

          }}
        >
          Secondary
        </Button>
      </Container>
    </ThemeProvider>
  )
}
```