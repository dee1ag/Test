import {StyleSheet, TextStyle} from 'react-native';

interface IStyle {
  mainText: TextStyle;
}

export const styles = StyleSheet.create<IStyle>({
  mainText: {
    width: '40%',
    textAlign: 'center',
    fontSize: 14,
  },
});
