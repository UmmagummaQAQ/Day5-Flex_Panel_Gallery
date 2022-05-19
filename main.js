const panels = document.querySelectorAll('.panel');
let lastClickPanel = document.querySelector('.panels');

function clickHandler() {
  if (this !== lastClickPanel) {
    lastClickPanel.classList.remove('open');
    lastClickPanel = this;
  }
  this.classList.toggle('open');
}
// function transitionHandler(e) {
//   console.log(e);
//   if (e.propertyName.indexOf('flex') !== -1) {
//     this.classList.toggle('open-active')
//   }
// }
//transition会因为属性的数量触发不同的次数，有时候会显示不出你设置的效果
//所以，这里对'flex'这个属性是否出现先做了一个条件判断，确保出现'flex'属性后再设置toggle切换到open-active

panels.forEach(panel => {
  panel.addEventListener('click', clickHandler);
 
})
