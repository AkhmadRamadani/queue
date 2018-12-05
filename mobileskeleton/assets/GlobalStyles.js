import { StyleSheet, Dimensions } from 'react-native';
import { AppConstants } from '../systems/Constants';

export const GlobalStyles = StyleSheet.create({

    Wrapper: {
        flex: 1,
        backgroundColor: AppConstants.ActiveTheme.AppBackgroundColor,
    },
    Container: {
        justifyContent: 'center',
        padding: AppConstants.ActiveTheme.AppObjectSpacing,
    },
    
    FontRegular: {
        fontFamily: AppConstants.ActiveTheme.AppFontFace + '-Regular'
    },
    FontMedium: {
        fontFamily: AppConstants.ActiveTheme.AppFontFace + '-Medium'
    },
    FontSemiBold: {
        fontFamily: AppConstants.ActiveTheme.AppFontFace + '-SemiBold'
    },
    FontBold: {
        fontFamily: AppConstants.ActiveTheme.AppFontFace + '-Bold'
    },

    FontH1: { fontSize: 32, color: AppConstants.ActiveTheme.AppFontBlackColor, lineHeight: 32, },
    FontH2: { fontSize: 28, color: AppConstants.ActiveTheme.AppFontBlackColor, lineHeight: 28, },
    FontH3: { fontSize: 24, color: AppConstants.ActiveTheme.AppFontBlackColor, lineHeight: 24, },
    FontH4: { fontSize: 20, color: AppConstants.ActiveTheme.AppFontBlackColor },
    FontH5: { fontSize: 16, color: AppConstants.ActiveTheme.AppFontBlackColor },
    FontH6: { fontSize: 14, color: AppConstants.ActiveTheme.AppFontBlackColor },
    FontParagraph: { fontSize: 14 },
});
