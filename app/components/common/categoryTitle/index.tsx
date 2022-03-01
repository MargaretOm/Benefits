import React, {FC} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const BUTTON_TITLE = 'Все';

type Props = {
  categoryId: number;
  title: string;
  onCategoryPress(categoryId: number): void;
  showButton?: boolean;
};

const CategoryTitle: FC<Props> = props => {
  const {categoryId, title, onCategoryPress, showButton} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      {!!showButton && (
        <TouchableOpacity onPress={() => onCategoryPress(categoryId)}>
          <Text style={styles.buttonText}>{BUTTON_TITLE}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export {CategoryTitle};
