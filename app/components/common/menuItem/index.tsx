import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

type Props = {
  active: boolean;
  onCategoryPress(): void;
  title: string;
};

const MenuItem: FC<Props> = ({active, onCategoryPress, title}) => {
  return (
    <TouchableOpacity
      style={[styles.container, active && styles.activeContainer]}
      onPress={onCategoryPress}>
      <Text style={active && styles.activeText}>{title}</Text>
    </TouchableOpacity>
  );
};

export {MenuItem};
