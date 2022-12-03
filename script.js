
const openNodeList = document.querySelectorAll(".open");
const modal_container = 
document.getElementById('modal_container');
const close = document.getElementById('close');

for (let i = 0; i < openNodeList.length; i++) {
    const open = openNodeList[i];
    open.addEventListener('click', () => {
        modal_container.classList.add('show');
    });
  }

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});

function closeModal() {
    document.getElementById('modal_container').classList.remove('show');
}