const picturePreviewContainer = document.querySelector('.img-upload');

const onMessageModalKeydown = (evt) => {
  evt.stopPropagation();
  if (evt.key === 'Escape') {
    closeMessage();
  }
};

const onMessageModalClick = (evt) => {
  if (!evt.target.closest('.success__inner')) {
    closeMessage();
  }
};

const onMessageButtonClick = () => closeMessage();

const addMessageListeners = (type) => {
  document.querySelector(`.${type}__button`).addEventListener('click', onMessageButtonClick);
  document.querySelector(`.${type}`).addEventListener('click', onMessageModalClick);
  document.querySelector(`.${type}`).addEventListener('keydown', onMessageModalKeydown);
};

const createSuccessMessage = () => document.querySelector('#success').content.querySelector('.success').cloneNode(true);

const createErrorMessage = () => document.querySelector('#error').content.querySelector('.error').cloneNode(true);

const showMessage = (messageBuilder, messageType) => {
  picturePreviewContainer.append(messageBuilder());
  document.querySelector(`.${messageType}__button`).focus();
  addMessageListeners(messageType);
};

function closeMessage() {
  if (document.querySelector('.success')) {
    document.querySelector('.success').remove();
  }
  if (document.querySelector('.error')) {
    document.querySelector('.error').remove();
  }
}

export { showMessage, createSuccessMessage, createErrorMessage };
