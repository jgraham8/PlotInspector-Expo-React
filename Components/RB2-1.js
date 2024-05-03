'use strict';

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {useTheme} from '@react-navigation/native';

const RadioComponent = () => {
  const {colors} = useTheme();
  const [checked, setChecked] = React.useState('-1');

  const txtstyle = {
    margin: 12,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: colors.text,
    paddingVertical: 0,
  };

  return (
    <View>
      <View style={styles.parentView}>
        <RadioButton
          value="-1"
          status={checked === '-1' ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked('-1');
            global.c21 = '-1';
          }}
          // TODO: Change primitive darkmode to navigation themes
          uncheckedColor={isDarkMode ? Colors.red : Colors.white}
          color={isDarkMode ? Colors.red : Colors.white}
        />
        <RadioButton
          value="1"
          status={checked === '1' ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked('1');
            global.c21 = '1';
          }}
          // TODO: Change primitive darkmode to navigation themes
          uncheckedColor={isDarkMode ? Colors.red : Colors.white}
          // TODO: Change primitive darkmode to navigation themes
          color={isDarkMode ? Colors.red : Colors.white}
        />
      </View>
      <View style={styles.parentView}>
        <Text style={txtstyle}>No</Text>
        <Text style={txtstyle}>Yes</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  txt: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 10,
    // TODO: Change primitive darkmode to navigation themes
    color: isDarkMode ? Colors.white : Colors.black,
    width: 55,
  },
  parentView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default RadioComponent;
