import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  image: {
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: '#efefef',
  },
  saleContainer: {
    marginHorizontal: 5,
    position: 'absolute',
    left: 5,
    bottom: 5,
    backgroundColor: '#f61961',
    padding: 3,
    borderRadius: 20,
  },
  saleText: {
    color: 'white',
  },
  titleContainer: {
    position: 'absolute',
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 16,
  },
  nameContainer: {
    paddingHorizontal: 5,
  },
  nameText: {
    fontSize: 14,
  },
});
