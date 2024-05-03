'use strict';
import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

const MainView = () => {
  const {colors} = useTheme();

  const txtstyle = {
    margin: 12,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: colors.text,
    paddingVertical: 0,
  };

  const sepStyle = {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.primary,
  };

  return (
    <View style={styles.container}>
      <Text style={txtstyle}>
        This application was made for the Garscube Allotments Association and
        allows you to self assess your allotment to make sure it is up to
        scratch.
      </Text>
      <View style={sepStyle} />
      <Text style={txtstyle}>
        To begin using the app, please tap anywhere on your screen.
      </Text>
      <View style={sepStyle} />
      <Text style={txtstyle}>App created by Johnathan Graham</Text>
      <Text style={txtstyle}>JohnathanJBGraham@Gmail.com</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 0,
    paddingHorizontal: 24,
  },
});

export default MainView;
