'use strict';
import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

const MainView = () => {
  const {colors} = useTheme();

  var resultColor = {
    color: global.scoreColor,
  };

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

  const description = {
    flex: 3,
    paddingVertical: 8,
    fontWeight: '400',
    fontSize: 14,
    color: colors.text,
    textAlign: 'center',
  };

  return (
    <View style={styles.container}>
      <View style={styles.linkContainer}>
        <Text style={link}>Cultivation</Text>
        <Text style={description}>{global.cultScore}</Text>
      </View>
      <View style={sepStyle} />
      <View style={styles.linkContainer}>
        <Text style={link}>Weed Control</Text>
        <Text style={description}>{global.c31}</Text>
      </View>
      <View style={sepStyle} />
      <View style={styles.linkContainer}>
        <Text style={link}>Composting</Text>
        <Text style={description}>{global.c21}</Text>
      </View>
      <View style={sepStyle} />
      <View style={styles.linkContainer}>
        <Text style={link}>Boundaries</Text>
        <Text style={description}>{global.c32}</Text>
      </View>
      <View style={sepStyle} />
      <View style={styles.linkContainer}>
        <Text style={link}>Shared Paths</Text>
        <Text style={description}>{global.c33}</Text>
      </View>
      <View style={sepStyle} />
      <View style={styles.linkContainer}>
        <Text style={link}>Other</Text>
        <Text style={description}>{global.c34}</Text>
      </View>
      <Text style={description1}>{global.comment}</Text>
      <View style={sepStyle} />
      <View style={styles.linkContainer}>
        <Text style={link}>Grade</Text>
        <Text style={description}>{global.totalScore}/15</Text>
      </View>
      <Text style={styles.resultText}>
        <Text style={resultColor}>{global.scoreTitle}</Text>
      </Text>
      <View style={sepStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    paddingHorizontal: 24,
  },
  linkContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  resultText: {
    paddingVertical: 8,
    fontWeight: '400',
    fontSize: 14,
    textAlignVertical: 'top',
    textAlign: 'center',
  },
  spacing: {
    margin: 10,
  },
  input: {
    height: 80,
    margin: 12,
    borderWidth: 1,
    textAlignVertical: 'top',
    textAlign: 'center',
  },
});

export default MainView;
