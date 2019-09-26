window.onload = setTimeout(greensockanim(), 4000);

document.querySelector('button').addEventListener('click', function() {
  greensockanim();
});

function greensockanim() {
  var paths = Array.prototype.slice.call(document.querySelectorAll('#solution path')).reverse();
  var tl = new TimelineLite();
  tl.set(paths, { opacity: 0 });
  tl.staggerTo(paths, 0.1, { opacity: 1 }, 0.01, 0.1);
}
