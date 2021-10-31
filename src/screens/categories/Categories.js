import React from 'react';

import {StyleSheet} from 'react-native';
import {Text} from '@ui-kitten/components';
import MainContainer from '../../components/layout/MainContainer';

export default function Categories({navigation}) {
  return (
    <MainContainer>
      <Text style={styles.text} category="h3">
        Categories
      </Text>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    margin: 2,
  },
});
