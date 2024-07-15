import { getRandomInteger, createRandomIdFromRangeGenerator, getRandomArrayElement } from './util.js';

import {
  PICTURE_COUNT,
  MIN_COUNT_LIKES,
  MAX_COUNT_LIKES,
  MIN_COUNT_COMMENTS_ID,
  MAX_COUNT_COMMENTS_ID,
  MIN_COUNT_AVATAR,
  MAX_COUNT_AVATAR,
  MIN_COUNT_MESSAGE,
  MAX_COUNT_MESSAGE,
  PHOTO_DESCRIPTION,
  COMMENT_NAMES,
  COMMENT_MESSAGE,
} from './constants.js';

const createMessage = () => Array.from(
  {length: getRandomInteger(MIN_COUNT_MESSAGE, MAX_COUNT_MESSAGE)},
  () => getRandomArrayElement(COMMENT_MESSAGE));

const createComments = () => ({
  id: [createRandomIdFromRangeGenerator(MIN_COUNT_COMMENTS_ID, MAX_COUNT_COMMENTS_ID)],
  avatar: `img/avatar-${getRandomInteger(MIN_COUNT_AVATAR, MAX_COUNT_AVATAR)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(COMMENT_NAMES),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${ index }.jpg`,
  description: getRandomArrayElement(PHOTO_DESCRIPTION),
  likes: [getRandomInteger(MIN_COUNT_LIKES, MAX_COUNT_LIKES)],
  comments: Array.from(
    {length: getRandomInteger(MIN_COUNT_COMMENTS_ID, MAX_COUNT_COMMENTS_ID)},
    createComments),
});

const getPictures = Array.from({length: PICTURE_COUNT},
  (_, index) => createPicture(index + 1));

export {getPictures, PICTURE_COUNT};
