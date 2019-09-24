window.onload = setTimeout(load_animation(), 2000);

function load_animation() {
  single_animations('#solution', 4);
}
function single_animations(id, duration) {
  const shape = document.querySelector(id);
  shape.classList.add('hidden');
  window.setTimeout(function() {
    shape.classList.remove('hidden');
    const length = shape.getTotalLength();
    shape.style.transition = shape.style.WebkitTransition = 'none';
    shape.style.strokeDasharray = length + ' ' + length;
    // shape.style.strokeDasharray = length / 100 + ' ' + length / 100 + ' ' + length / 100 + ' ' + length / 100;
    shape.style.strokeDashoffset = length;
    shape.getBoundingClientRect();
    shape.style.transition = shape.style.WebkitTransition = 'stroke-dashoffset ' + duration + 's linear';
    shape.style.strokeDashoffset = '0';
  }, 300);
}

document.querySelector('button').addEventListener('click', function() {
  load_animation();
});
