'use strict';
import * as React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Colors, DD1, RB21, RB31, RB32, RB33, RB34} from '../Components';

const MainView = () => {
  const {colors} = useTheme();

  const [text, onChangeText] = React.useState('');

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
      <View style={linkContainer}>
        <Text style={link}>Cultivation</Text>
        <Text style={description1}>
          How much of the plot is used for cultivation of flowers, vegetables or
          fruit (or beekeeping) and/or is managed for the benefit of nature
          (e.g. small pond, wildflower meadow etc) Take into account that there
          needs to be space for paths in order to access beds etc. Therefore,
          it's the % of possible area for cultivation rather than strictly a %
          of the total plot. Greenhouses, polytunnels, cold frames, and any
          composting systems can count towards ground used for cultivation.
        </Text>
      </View>
      <DD1 />
      <View style={sepStyle} />
      <View style={linkContainer}>
        <Text style={link}>Weed Control</Text>
        <Text style={description}>
          Are weeds under control in the plot? Especially mares-tail and
          bindweed, which pose a risk to neighbouring plots.
        </Text>
      </View>
      <RB31 />
      <View style={sepStyle} />
      <View style={linkContainer}>
        <Text style={link}>Composting</Text>
        <Text style={description}>Is there a composting system?</Text>
      </View>
      <RB21 />
      <View style={sepStyle} />
      <View style={linkContainer}>
        <Text style={link}>Boundaries</Text>
        <Text style={description}>
          Are fences, hedges or other boundaries in a reasonable condition?
        </Text>
      </View>
      <RB32 />
      <View style={sepStyle} />
      <View style={linkContainer}>
        <Text style={link}>Shared Paths</Text>
        <Text style={description}>
          SHARED PATHS (i.e. paths between plots) Are the shared paths around
          the plot clear of weeds and overgrown bushes etc?
        </Text>
      </View>
      <RB33 />
      <View style={sepStyle} />
      <View style={linkContainer}>
        <Text style={link}>Other</Text>
        <Text style={description}>
          A deduction or addition of one point can be made for another
          reasonable item, although this{' '}
          <Text style={{fontWeight: 'bold'}}>must be clearly explained.</Text>
        </Text>
      </View>
      <RB34 />
      <TextInput
        style={styles.input}
        onChangeText={text => {
          onChangeText(text);
          global.comment = text;
        }}
        value={text}
        placeholder={'Comment Here'}
        multiline
        numberOfLines={3}
        borderColor={colors.primary}
      />
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
  link: {
    flex: 2,
    fontSize: 18,
    fontWeight: '400',
    color: isDarkMode ? Colors.red : Colors.white,
    textAlign: 'center',
  },
  description1: {
    flex: 3,
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 10,
    color: isDarkMode ? Colors.white : Colors.black,
    textAlign: 'center',
  },
  description: {
    flex: 3,
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 14,
    color: isDarkMode ? Colors.white : Colors.black,
    textAlign: 'center',
  },
  separator: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: StyleSheet.hairlineWidth,
    backgroundColor: isDarkMode ? Colors.red : Colors.white,
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
