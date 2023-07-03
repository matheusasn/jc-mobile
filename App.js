
import { StyleSheet, Text, View } from 'react-native';
import { Load } from './src/components/Load';
import { StatusBar, SafeAreaView } from 'react-native';
import { Fragment, React } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes';

export default function App() {
  return (
    <Fragment>
       <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
          <NavigationContainer>
            <Routes></Routes>
          </NavigationContainer>
       </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
