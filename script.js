document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.accordion-toggle').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var panel = btn.nextElementSibling;
      var active = btn.classList.contains('active');

      // Close all other accordion items
      document.querySelectorAll('.accordion-toggle').forEach(function(b){
        b.classList.remove('active');
        b.nextElementSibling.style.maxHeight = null;
      });

      // Open this one if it was closed
      if(!active){
        btn.classList.add('active');
        panel.style.maxHeight = panel.scrollHeight+'px';
      }
    });
  });
});
