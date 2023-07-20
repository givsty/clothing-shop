const modal = () =>{
  setTimeout(() => {
    const modalWindow = document.querySelector(".modal-window");
    modalWindow.innerHTML = `
    <div class="modal-bg">
      <div class="modal-body">
        <div class="modal-header">
          <h3>Скидка 10%</h3>
          <div class="modal-close">X</div>
        </div>
        <div class="modal-body__content">
          <input type="text" class="modal__input">
          <span>Введите email и получите скидку 10%</span>
        </div>
      </div>
    </div>
    `;
    const modalClose = document.querySelector(".modal-close");
    modalClose.addEventListener("click", () => {
      modalWindow.style.display = 'none';
    });
    
  }, 2000);  
}

export default modal;