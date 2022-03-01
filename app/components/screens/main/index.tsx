import React, {useState} from 'react';
import {StatusBar, useColorScheme, View} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import data from '../../../data.json';
import {Categories, Menu} from '../../common';
import {styles} from './styles';

const Main = () => {
  const isDarkMode = useColorScheme() === 'light';

  const DATA = data;
  const [currentCategoryId, setCurrentCategoryId] = useState<
    number | undefined
  >(undefined);

  const onCategoryPress = (categoryId: number | undefined) => {
    setCurrentCategoryId(categoryId);
  };

  return (
    <SafeAreaView style={styles.container} forceInset={{bottom: 'never'}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Menu
        currentCategoryId={currentCategoryId}
        onCategoryPress={onCategoryPress}
        categoriesList={DATA.categoriesList}
      />
      <View style={styles.separator} />
      <Categories
        categories={DATA.categories}
        currentCategoryId={currentCategoryId}
        onCategoryPress={onCategoryPress}
      />
    </SafeAreaView>
  );
};

export {Main};
