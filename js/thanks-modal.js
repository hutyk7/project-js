/*(function () {
    let contactButton = document.querySelector(".contactButton");
    
    contactButton.addEventListener('click', function() {
      let idModal = this.getAttribute('data-modal-id');
      openModal (idModal)
    })
    
    function openModal(id_Modal) {
      let modalWindow = document.querySelector(id_Modal);
  
      if(modalWindow.classList.contains("active")) {
        modalWindow.classList.remove('active');
      }
      else {
        modalWindow.classList.add('active');
      }
  
      let exitBut = modalWindow.querySelector('.exitBut');
  
      exitBut.addEventListener('click', function() {
        modalWindow.classList.remove('active');
      })
      let BattonOk = modalWindow.querySelector('.modal__close-button_ok');
  
      BattonOk.addEventListener('click', function() {
        modalWindow.classList.remove('active');
      })
    } 
})();  */
(function () {
    document.addEventListener('DOMContentLoaded',function() {
    const contactButton = document.querySelector('.contactButton');
  
    const modalForm = document.querySelector('.modal');
    
    const closeButtonOk = modalForm.querySelector('.modal__close-button_ok');
  
    const closeButton = modalForm.querySelector('.exitBut');
  
    contactButton.addEventListener('click', function (e) {
      modalForm.classList.add('modal_active');
    });
  
    closeButtonOk.addEventListener('click', function (e) {
      e.preventDefault();
      modalForm.classList.remove('modal_active');
    });
  
    closeButton.addEventListener('click', function (e) {
      e.preventDefault();
      modalForm.classList.remove('modal_active');
    });
  });
})(); 
  
   
    
      
      
      
  
  
    