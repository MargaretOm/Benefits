import {useNavigation} from '@react-navigation/native';
import React, {FC, useMemo} from 'react';
import {ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {categoriesType, Nav} from '../../../types';
import {BenefitCard, CategoryTitle} from '../../common';
import {styles} from './styles';

const MORE_TITLE = 'Смотреть ещё n';

type Props = {
  categories: categoriesType;
  currentCategoryId: number | undefined;
  onCategoryPress(categoryId: number): void;
};

const Categories: FC<Props> = props => {
  const {categories, currentCategoryId, onCategoryPress} = props;
  const navigation = useNavigation<Nav>();
  const onCardPress = () => navigation.navigate('Benefit');

  const data = useMemo(() => {
    if (currentCategoryId === undefined) {
      return categories;
    }
    const currentCategory = categories.find(
      item => item.id === currentCategoryId,
    );
    if (currentCategory) {
      return [currentCategory];
    }
    return null;
  }, [categories, currentCategoryId]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <SafeAreaView
        forceInset={{
          top: 'never',
          left: 'never',
          right: 'never',
        }}>
        {data?.map(category => (
          <View key={category.id}>
            <CategoryTitle
              title={category.title}
              categoryId={category.id}
              onCategoryPress={onCategoryPress}
              showButton={currentCategoryId === undefined}
            />
            <View style={styles.topSeparator} />
            <ScrollView
              horizontal={currentCategoryId === undefined}
              showsHorizontalScrollIndicator={false}>
              {category.cards.map(card => (
                <BenefitCard
                  key={card.id}
                  image={card.image}
                  name={card.name}
                  sale={card.sale}
                  onPress={onCardPress}
                  width={
                    currentCategoryId === undefined
                      ? category.id === 1
                        ? 300
                        : 200
                      : '100%'
                  }
                  height={
                    currentCategoryId === undefined
                      ? category.id === 1
                        ? 200
                        : 120
                      : 200
                  }
                  containerStyle={
                    currentCategoryId !== undefined
                      ? styles.categoryPageContainer
                      : {}
                  }
                />
              ))}
              {currentCategoryId === undefined && (
                <BenefitCard
                  onPress={() => onCategoryPress(category.id)}
                  title={MORE_TITLE}
                  width={category.id === 1 ? 300 : 200}
                  height={category.id === 1 ? 200 : 120}
                />
              )}
            </ScrollView>
            <View style={styles.bottomSeparator} />
          </View>
        ))}
      </SafeAreaView>
    </ScrollView>
  );
};

export {Categories};
