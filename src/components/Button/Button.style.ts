import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

interface IStyle {
  container: ViewStyle;
  text: TextStyle;
  checkmark: ViewStyle;
  completedText: TextStyle;
}

export const styles = StyleSheet.create<IStyle>({
  container: {
    marginTop: 35,
  },
  text: {
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'center',
    top: 13,
    color: 'white',
  },
  checkmark: {
    position: 'absolute',
    top: 17,
    alignSelf: 'center',
    zIndex: 1,
  },
  completedText: {
    fontSize: 14,
    color: '#473F4E',
    position: 'absolute',
    zIndex: -10,
    alignSelf: 'center',
    top: 13,
  },
});
