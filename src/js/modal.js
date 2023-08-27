(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    form: document.querySelector("[data-form]"),
  };

  refs.openModalBtn.addEventListener("click", function(event) {
    event.preventDefault();

    const requiredFields = Array.from(refs.form.querySelectorAll("[required]"));
    const isValid = requiredFields.every(field => field.checkValidity());

    const emailField = refs.form.querySelector("[type='email']");
    const isEmailValid = emailField.checkValidity();

    if (isValid && isEmailValid) {
      toggleModal();
    }
  });

  refs.closeModalBtn.addEventListener("click", function() {
    toggleModal();
    submitFormAfterModalClosed();
  });

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden-modal");
  }

  function submitFormAfterModalClosed() {
    refs.form.submit();
  }
})();