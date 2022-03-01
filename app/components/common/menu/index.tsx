import React, {FC, useRef} from 'react';
import {ScrollView} from 'react-native';
import {MenuItem} from '../../common';

const ALL_SALES_TITLE = 'Все скидки';

type Props = {
  currentCategoryId: number | undefined;
  onCategoryPress(categoryId: number | undefined): void;
  categoriesList: {
    id: number;
    title: string;
  }[];
};

const Menu: FC<Props> = props => {
  const {currentCategoryId, onCategoryPress, categoriesList} = props;
  const scrollRef = useRef<ScrollView>(null);

  //   const scroll = () => {
  //     ref?.current.scrollLeft += 20;
  //   };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      ref={scrollRef}>
      <MenuItem
        active={currentCategoryId === undefined}
        title={ALL_SALES_TITLE}
        onCategoryPress={() => {
          scrollRef.current?.scrollTo({
            x: 0,
            y: 0,
            animated: true,
          });
          onCategoryPress(undefined);
        }}
      />
      {categoriesList.map((category, index) => (
        <MenuItem
          key={category.id}
          active={currentCategoryId === category.id}
          title={category.title}
          onCategoryPress={() => {
            scrollRef.current?.scrollTo({
              x: 130 * (index + 1),
              y: 0,
              animated: true,
            });
            onCategoryPress(category.id);
          }}
        />
      ))}
    </ScrollView>
  );
};

export {Menu};
