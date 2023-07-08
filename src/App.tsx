
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Theme } from '@mui/material';
import Main from '@/components/pages/Main';
import mainTheme from '@/styles/themes';

function getPageHeight(theme: Theme) {
  const topSpacing = Number(theme.mixins.toolbar.minHeight) + parseInt(theme.spacing(1));

  return `calc(100vh - ${topSpacing}px)`;
}

function App() {
  return (
    <ThemeProvider theme={createTheme(mainTheme)} >
      <CssBaseline />
      <BrowserRouter>
        <Box sx={{ height: (theme) => getPageHeight(theme) }}>    
          <Routes>
            <Route element={<Main />} path="/" />
            <Route element={<Navigate to="/" />} path="*" />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
