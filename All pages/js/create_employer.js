// create an employer account
// dropdown select
document?.addEventListener('DOMContentLoaded', () => {
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const dropdownButton = document.getElementById('employee_number');
    dropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            dropdownButton.textContent = item.textContent;
        });
    });
  });

// form validation
const form = document.querySelector('form');
  const saveNextBtn = document.querySelector('#save_n_next');
  const inputs = form.querySelectorAll('input');
  const selects = form.querySelectorAll('.dropdown-toggle');
  const checkboxes = form.querySelectorAll('input[type="checkbox"]');

  form?.addEventListener('input', () => {
    let allInputsFilled = true;
    let allSelectsSelected = true;
    let allCheckboxesChecked = true;

    inputs.forEach(input => {
      if (input.value === '') {
        allInputsFilled = false;
      }
    });

    selects.forEach(select => {
      if (select.textContent === '-') {
        allSelectsSelected = false;
      }
    });

    checkboxes.forEach(checkbox => {
      if (!checkbox.checked) {
        allCheckboxesChecked = false;
      }
    });

    if (allInputsFilled && allSelectsSelected && allCheckboxesChecked) {
      saveNextBtn.disabled = false;
    } else {
      saveNextBtn.disabled = true;
    }
  });

// confirm submission
const confirmModal = document.querySelector('#confirmModal');
const confirmBtn = document.querySelector('#confirmBtn');
const body = document.body;
saveNextBtn?.addEventListener('click', () => {
  // Open the modal
  event.preventDefault()
  confirmModal.classList.add('show');
  confirmModal.style.display = 'block';
  body.classList.add('modal-open');
  document.getElementById("modal_background_opactiy").classList.remove("d-none");
  document.getElementById("modal_background_opactiy").classList.add("d-block");
});

backBtn?.addEventListener('click', () => {
    // Open the modal
    confirmModal.classList.remove('show');
    confirmModal.style.display = 'none';
    body.classList.remove('modal-open');
    document.getElementById("modal_background_opactiy").classList.add("d-none");
    document.getElementById("modal_background_opactiy").classList.remove("d-block");
  });

confirmBtn?.addEventListener('click', () => {
  form.submit();
  console.log(form);
  confirmModal.classList.remove('show');
  confirmModal.style.display = 'none';
  body.classList.remove('modal-open');
  document.getElementById("modal_background_opactiy").classList.add("d-none");
  document.getElementById("modal_background_opactiy").classList.remove("d-block");

});



