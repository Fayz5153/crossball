document.getElementById("burger__btn").onclick = function() {handleBurger()};
function handleBurger() {
  document.getElementById("nav").classList.toggle("nav__show");
  document.getElementById("burger__btn").classList.toggle("btn__close");
}

document.getElementById("sub__menu__name").onclick = function() {subMenu()};
function subMenu() {
  document.getElementById("sub__menu__content").classList.toggle("sub__menu__active");
  document.getElementById("arrow").classList.toggle("ar__down");
}

document.addEventListener('DOMContentLoaded', () => {
  
  const getSort = ({ target }) => {
    const order = (target.dataset.order = -(target.dataset.order || -1));
    const index = [...target.parentNode.cells].indexOf(target);
    const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
    const comparator = (index, order) => (a, b) => order * collator.compare(
      a.children[index].innerHTML,
      b.children[index].innerHTML
    );
    
    for(const tBody of target.closest('table').tBodies)
      tBody.append(...[...tBody.rows].sort(comparator(index, order)));

    for(const cell of target.parentNode.cells)
      cell.classList.toggle('sorted', cell === target);
  };
  
  document.querySelectorAll('.table_sort thead').forEach(tableTH => tableTH.addEventListener('click', () => getSort(event)));
  
});