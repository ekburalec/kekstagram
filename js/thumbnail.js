const picturesContainer = document.querySelector('.pictures');
const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createThumbnail = ({ url, description, likes, comments }) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;

  return thumbnail;
};

const generateThumbnails = (pictures) => {
  const pictureFragment = new DocumentFragment();

  pictures.forEach ((picture) => {
    const thumbnail = createThumbnail(picture);
    pictureFragment.append(thumbnail);
  });

  picturesContainer.append(pictureFragment);
};

export { generateThumbnails };
