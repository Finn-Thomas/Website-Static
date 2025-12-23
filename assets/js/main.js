document.addEventListener('DOMContentLoaded', function() {
  // Materialize init
  var elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems, { edge: 'left' });

  var sliders = document.querySelectorAll('.slider');
  M.Slider.init(sliders, {
    indicators: true,
    height: 420,
    interval: 6500,
    duration: 450
  });

  var collapsibles = document.querySelectorAll('.collapsible');
  M.Collapsible.init(collapsibles, {});
});
