import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#800080',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      main: 'teal',
    },
    cardBackground: {
        main: 'lightblue'
    },
    title: {
        main: 'green'
    },
    heading: {
        main: 'pink'
    },
    buttonText: {
        main: 'white'
    },
    inputContainer: {
        main: 'green'
    },
    inputContainerHover: {
        main: 'blue'
    },
    inputContainerFocused: {
        main: 'purple'
    },
    boxShadow: {
        main: '#888888'
    }
  },
  overrides: {
    MuiInputLabel: { // Name of the component ⚛️ / style sheet
      root: { // Name of the rule
        color: "orange",
        "&$focused": { // increase the specificity for the pseudo class
          color: "orange"
        }
      }
    }
  }
 });