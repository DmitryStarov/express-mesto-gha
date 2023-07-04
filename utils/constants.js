const OK_STATUS = 200;
const CREATED_STATUS = 201;
const BAD_REQUEST_STATUS = 400;
const NOT_FOUND_STATUS = 404;
const INTERNAL_SERVER_STATUS = 500;

const SERVER_ERROR_MESSAGE = 'На сервере произошла ошибка';
const INVALID_ADD_USER_MESSAGE = 'Переданы некорректные данные при создании пользователя';
const USER_NOT_FOUND_MESSAGE = 'Пользователь по указанному _id не найден';
const INVALID_UPDATE_USER_MESSAGE = 'Переданы некорректные данные при обновлении профиля';
const INVALID_UPDATE_AVATAR_MESSAGE = 'Переданы некорректные данные при обновлении аватара';
const INVALID_ADD_CARD_MESSAGE = ' Переданы некорректные данные при создании карточки';
const CARD_NOT_FOUND_MESSAGE = 'Карточка с указанным _id не найдена';
const INVALID_LIKE_CARD_MESSAGE = 'Переданы некорректные данные для постановки/снятии лайка';
const INVALID_ID_CARD_MESSAGE = ' Передан несуществующий _id карточки';

module.exports = {
  OK_STATUS,
  CREATED_STATUS,
  BAD_REQUEST_STATUS,
  NOT_FOUND_STATUS,
  INTERNAL_SERVER_STATUS,
  SERVER_ERROR_MESSAGE,
  INVALID_ADD_USER_MESSAGE,
  USER_NOT_FOUND_MESSAGE,
  INVALID_UPDATE_USER_MESSAGE,
  INVALID_UPDATE_AVATAR_MESSAGE,
  INVALID_ADD_CARD_MESSAGE,
  CARD_NOT_FOUND_MESSAGE,
  INVALID_LIKE_CARD_MESSAGE,
  INVALID_ID_CARD_MESSAGE,
};
