import { getRandomInteger, createRandomIdFromRangeGenerator, getRandomArrayElement } from './util.js';

import {
  PICTURE_COUNT,
  LIKES_COUNT,
  COMMENTS_ID,
  AVATAR_COUNT,
  MESSAGE_COUNT,
  PHOTO_DESCRIPTION,
  COMMENT_MESSAGE,
  COMMENT_NAMES,
} from './constants.js';

const createMessage = () => Array.from(
  {length: getRandomInteger(...MESSAGE_COUNT)},
  () => getRandomArrayElement(COMMENT_MESSAGE));

const createComments = () => ({
  id: [createRandomIdFromRangeGenerator(...COMMENTS_ID)],
  avatar: `img/avatar-${getRandomInteger(...AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(COMMENT_NAMES),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${ index }.jpg`,
  description: getRandomArrayElement(PHOTO_DESCRIPTION),
  likes: [getRandomInteger(...LIKES_COUNT)],
  comments: Array.from(
    {length: getRandomInteger(...COMMENTS_ID)},
    createComments),
});

const getPictures = Array.from({length: PICTURE_COUNT},
  (_, index) => createPicture(index + 1));

export {getPictures, PICTURE_COUNT};
