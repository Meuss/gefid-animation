window.onload = setTimeout(load_animation(), 2000);

function load_animation() {
  single_animations('#solution', 5);
}
function single_animations(id, x) {
  var shape = document.querySelector(id);
  shape.classList.add('hidden');
  window.setTimeout(function() {
    shape.classList.remove('hidden');
    var length = shape.getTotalLength();
    shape.style.transition = shape.style.WebkitTransition = 'none';
    shape.style.strokeDasharray = length + ' ' + length;
    shape.style.strokeDashoffset = length;
    shape.getBoundingClientRect();
    shape.style.transition = shape.style.WebkitTransition = 'stroke-dashoffset ' + x + 's linear';
    shape.style.strokeDashoffset = '0';
  }, 300);
}

document.querySelector('button').addEventListener('click', function() {
  load_animation();
});
