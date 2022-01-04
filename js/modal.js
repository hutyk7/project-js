(function () {
    document.addEventListener('DOMContentLoaded',function() {
    let requestButton = document.querySelector('.button_request');
  
    let modalForm = document.querySelector('.modal');
  
    let closeButton = modalForm.querySelector('.modal__close-button');
  
    requestButton.addEventListener('click', function (e) {
      modalForm.classList.add('modal_active');
      tagBody.classList.add('hidden');
    });
  
    closeButton.addEventListener('click', function (e) {
      e.preventDefault();
      modalForm.classList.remove('modal_active');
      tagBody.classList.add('hidden');
    });
    requestButton.onmousedown = function (e) {
      let target = e.target;
      let modalContent = requestButton.getElementsByClassName('modal__content')[0];
      if (e.target.closest('.' + modalContent.className) === null) {
        this.classList.remove('modal_active');
        tagBody.classList.remove('hidden');
      }
    };
  });
  })(); 
  