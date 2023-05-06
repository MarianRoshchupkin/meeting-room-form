window.onload = () => {
  const form = document.querySelector('.form');
  const dateInput = document.querySelector('.form__input-date');
  const commentSection = document.querySelector('.form__comment');
  const clearButton = document.querySelector('.form__button-clear');

  function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData(e.target);
    const jsonValues = JSON.stringify(Object.fromEntries(data));

    console.log(jsonValues);
  }

  function handleClick() {
    dateInput.value = '';
    commentSection.value = '';
  }

  form.addEventListener('submit', handleSubmit);
  clearButton.addEventListener('click', handleClick);
}
