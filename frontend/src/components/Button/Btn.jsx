import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';


const theme = createTheme({
    palette: {
        primary: {
            main: '#AC5067', 
        },
        secondary: {
            main: '#FB9C63', 
        },
        tertiary: {
            main: '#FFD043', 
        },
    },
});



export default function Btn({color, text}) {
  return (
    <ThemeProvider theme={theme}>
    <Button variant="contained" color={color} sx={{ borderRadius: '15px',  height: '40px', textTransform: 'none' }}>{text}</Button>
    </ThemeProvider>    
  )
}

Btn.propTypes = {
    color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
    text: PropTypes.string.isRequired,
};
