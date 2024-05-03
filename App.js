import 'react-native-gesture-handler';
import {NavigationContainer, useTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ResetVariables, CalculateScore} from './global.js';
import * as React from 'react';
import {SplashSection, MainSection, ReportSection} from './Pages';
import {
  ScrollView,
  useColorScheme,
  Button,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import './global.js';

import 'react-native-gesture-handler';

const darkTheme = {
  dark: true,
  colors: {
    primary: '#E06F42', //Burnt Sienna
    background: '#7BBCD5', // Dark Sky Blue
    card: '#24A8DB', // Cerulean Crayola
    text: '#EDE9E9', //Platinum White
    border: '#E06F42', //Burnt Sienna
    notification: '#24A8DB', // Cerulean Crayola
  },
};

const lightTheme = {
  dark: false,
  colors: {
    primary: '#DB5724', //flame Orange
    background: '#24A8DB', // Cerulean Crayola
    card: '#7BBCD5', // Dark Sky Blue
    text: '#151515', //Eeire Black
    border: '#DB5724', //flame Orange
    notification: '#E06F42', //Burnt Sienna
  },
};

const App = () => {
  ResetVariables();

  return <MyStack />;
};

const MyStack = () => {
  const Stack = createStackNavigator();
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? darkTheme : lightTheme}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="ResultScreen" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const SplashScreen = ({navigation}) => {
  const backgroundStyle = {
    flex: 1,
  };

  return (
    <TouchableOpacity
      style={backgroundStyle}
      onPress={() => navigation.navigate('MainScreen')}>
      <SplashSection />
    </TouchableOpacity>
  );
};

const MainScreen = ({navigation}) => {
  const {colors} = useTheme();
  const backgroundStyle = {
    flex: 1,
  };

  const btnStyle = {
    flex: 1,
    width: '85%',
    alignSelf: 'center',
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <MainSection />
      <View style={btnStyle}>
        <Button
          style={styles.btn}
          title="Calculate Score"
          onPress={() => {
            navigation.navigate('ResultScreen');
            CalculateScore();
          }}
          color={colors.primary}
        />
      </View>
      <View style={styles.spacing} />
    </ScrollView>
  );
};

const ResultScreen = ({navigation}) => {
  const {colors} = useTheme();
  const backgroundStyle = {
    flex: 1,
  };

  const btnStyle = {
    flex: 1,
    width: '85%',
    alignSelf: 'center',
  };
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <ReportSection />
      <View style={btnStyle}>
        <Button
          style={styles.btn}
          title="Start New"
          onPress={() => navigation.navigate('MainScreen')}
          // TODO: Change primitive darkmode to navigation themes
          color={colors.primary}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  spacing: {
    margin: 10,
  },
  btn: {
    height: '100%',
  },
  splash: {
    flex: 1,
  },
});

export default App;
