export default function dropdownSelect() {
  document.querySelectorAll('.dropdown').forEach(function (dropdownWrapper) {
    const dropdownBtn = dropdownWrapper.querySelector('.dropdown__btn');
    const dropdownList = dropdownWrapper.querySelector('.dropdown__list');
    const dropdownListItems = dropdownWrapper.querySelectorAll(
      '.dropdown__list-item'
    );
    const dropdownInputHidden = dropdownWrapper.querySelector(
      '.dropdown__input-hidden'
    );

    dropdownBtn.addEventListener('click', function (e) {
      e.preventDefault();
      dropdownList.classList.toggle('dropdown__list_visible');
      this.classList.add('dropdown__btn_active');
    });

    dropdownListItems.forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.stopPropagation();
        dropdownBtn.innerText = this.innerText;
        dropdownBtn.focus();
        dropdownInputHidden.value = this.dataset.value;
        dropdownList.classList.remove('dropdown__list_visible');
      });
    });

    document.addEventListener('click', function (e) {
      if (e.target !== dropdownBtn) {
        dropdownList.classList.remove('dropdown__list_visible');
        dropdownBtn.classList.remove('dropdown__btn_active');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Tab' || e.key === 'Escape') {
        dropdownList.classList.remove('dropdown__list_visible');
        dropdownBtn.classList.remove('dropdown__btn_active');
      }
    });
  });

  // const nameInput = document.querySelector('input');
  const formEl = document.querySelector('form');

  formEl.addEventListener('submit', function (e) {
    e.preventDefault();
  });
}
