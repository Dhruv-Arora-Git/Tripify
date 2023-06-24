export const IMAGES = {
  TRIPIFY_BANNER: require('./images/banner1.png'),
  EMPTY_TRIPS: require('./images/trips-empty.png'),
  EMPTY_EXPENSES: require('./images/expenses-empty.png'),
  ADD_EXPENSES_BANNER: require('./images/add-expenses.png'),
};

export const THUMBNAILS = {
  1: require('./images/trips-thumbnail/1.png'),
  2: require('./images/trips-thumbnail/2.png'),
  3: require('./images/trips-thumbnail/3.png'),
  4: require('./images/trips-thumbnail/4.png'),
  5: require('./images/trips-thumbnail/5.png'),
  6: require('./images/trips-thumbnail/6.png'),
};

export const RANDOM_THUMBNAIL = () => {
  const rand = Math.floor(Math.random() * 6) + 1;
  // console.log(rand);
  return THUMBNAILS[rand];
};
