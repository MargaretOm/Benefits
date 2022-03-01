import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-navigation';

const Benefit: FC = () => {
  const navigation = useNavigation();
  const onPress = () => navigation.canGoBack() && navigation.goBack();
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={onPress}>
        <Text>{'      <--'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export {Benefit};
