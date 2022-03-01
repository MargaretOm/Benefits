import React, {FC} from 'react';
import {Text, View, TouchableOpacity, Image, ViewStyle} from 'react-native';
import {styles} from './styles';

type Props = {
  image?: string;
  name?: string;
  title?: string;
  sale?: string;
  width: string | number;
  height: string | number;
  onPress(): void;
  containerStyle?: ViewStyle;
};

const BenefitCard: FC<Props> = props => {
  const {image, name, sale, width, height, title, onPress, containerStyle} =
    props;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={containerStyle}>
        <Image source={{uri: image}} style={[styles.image, {width, height}]} />
        {!!sale && (
          <View style={styles.saleContainer}>
            <Text style={styles.saleText}>{sale}</Text>
          </View>
        )}
        {!!title && (
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
        )}
      </TouchableOpacity>
      {!!name && (
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{name}</Text>
        </View>
      )}
    </View>
  );
};

export {BenefitCard};
