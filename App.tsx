import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MainText from './src/components/MainText/MainText';
import Button from './src/components/Button/Button';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MainText />
      <Button />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
