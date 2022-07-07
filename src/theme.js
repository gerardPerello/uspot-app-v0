import { Platform } from "react-native"


const theme = {

    appBar: {
        primary: '#24292e',
        textPrimary: '#ffffff'
    },

    colors: {
        textPrimary: '#000000',
        textSecondary: '#808080',
        primary: '#2F48BF',
        white: '#fefefe'
    },
    fontSizes: {
        body:14,
        subheading: 16
    },
    fonts: {
        main: Platform.select({
            ios: 'Arial',
            android: 'Roboto',
            default: 'System'
        })
    },
    fontWeights: {
        normal: '400',
        bold: '700'
    }
}

export default theme