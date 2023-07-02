const OK_STATUS = 200;
const BAD_REQUEST_STATUS = 400;
const NOT_FOUND_STATUS = 404;
const INTERNAL_SERVER_STATUS = 500;

const SERVER_ERROR_MESSAGE = 'На сервере произошла ошибка';
const INVALID__ADD_USER_MESSAGE = 'Переданы некорректные данные при создании пользователя';
const USER_NOT_FOUND_MESSAGE = 'Пользователь по указанному _id не найден';
const INVALID__UPDATE_USER_MESSAGE = 'Переданы некорректные данные при обновлении профиля';
const INVALID__UPDATE_AVATAR_MESSAGE = 'Переданы некорректные данные при обновлении аватара';
const INVALID__ADD_CARD_MESSAGE = ' Переданы некорректные данные при создании карточки';
const CARD_NOT_FOUND_MESSAGE = 'Карточка с указанным _id не найдена';
const INVALID__LIKE_CARD_MESSAGE = 'Переданы некорректные данные для постановки/снятии лайка';
const INVALID__ID_CARD_MESSAGE = ' Передан несуществующий _id карточки';

module.exports = {
  OK_STATUS,
  BAD_REQUEST_STATUS,
  NOT_FOUND_STATUS,
  INTERNAL_SERVER_STATUS,
  SERVER_ERROR_MESSAGE,
  INVALID__ADD_USER_MESSAGE,
  USER_NOT_FOUND_MESSAGE,
  INVALID__UPDATE_USER_MESSAGE,
  INVALID__UPDATE_AVATAR_MESSAGE,
  INVALID__ADD_CARD_MESSAGE,
  CARD_NOT_FOUND_MESSAGE,
  INVALID__LIKE_CARD_MESSAGE,
  INVALID__ID_CARD_MESSAGE,
};
