'use strict';

import React from 'react';
import {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useTheme} from '@react-navigation/native';

const RadioComponent = () => {
  const {colors} = useTheme();
  const [selectedValue, setSelectedValue] = useState('0');

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

  const link = {
    flex: 2,
    fontSize: 14,
    fontWeight: '400',
    color: colors.primary,
    textAlign: 'center',
  };

  const description1 = {
    paddingVertical: 8,
    fontWeight: '400',
    fontSize: 14,
    color: colors.text,
    textAlignVertical: 'top',
    textAlign: 'center',
  };

  const container = {
    flex: 1,
    paddingTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    // TODO: Change primitive darkmode to navigation themes
    borderColor: colors.primary,
  };

  const pBox = {
    flex: Platform.OS === 'ios' ? 1 : null, // for Android, not visible otherwise.
    width: Platform.OS === 'ios' ? undefined : 120,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 10,
    color: colors.text,
    borderColor: colors.primary,
    width: 200,
  };
  const pickerListItemContainer = {
    flex: 1,
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    // TODO: Change primitive darkmode to navigation themes
    color: colors.text,
  };

  return (
    <View style={styles.container}>
      <Picker
        itemStyle={styles.pickerListItemContainer}
        itemTextStyle={txtstyle}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedValue(itemValue);
          global.cultScore = itemValue;
        }}
        style={styles.pBox}>
        <Picker.Item label="< 10%" value="0" style={txtstyle} />
        <Picker.Item label="10% - 20%" value="2" style={txtstyle} />
        <Picker.Item label="30% - 40%" value="4" style={txtstyle} />
        <Picker.Item label="50% - 60%" value="6" style={txtstyle} />
        <Picker.Item label="70% - 80%" value="8" style={txtstyle} />
        <Picker.Item label="90% - 100%" value="10" style={txtstyle} />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  txt: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,
    // TODO: Change primitive darkmode to navigation themes
    color: isDarkMode ? Colors.lighter : Colors.black,
    width: 100,
  },
  
});

export default RadioComponent;
