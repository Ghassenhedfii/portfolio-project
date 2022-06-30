var current = null;
window.onload = function () {
    document.getElementById('email').addEventListener('focus', function(e) {
        if (current) current.pause();
        current = anime({
          targets: 'path',
          strokeDashoffset: {
            value: 0,
            duration: 700,
            easing: 'easeOutQuart'
          },
          strokeDasharray: {
            value: '240 1386',
            duration: 700,
            easing: 'easeOutQuart'
          }
        });
      });
      
      document.getElementById('password').addEventListener('focus', function(e) {
        if (current) current.pause();
        current = anime({
          targets: 'path',
          strokeDashoffset: {
            value: -336,
            duration: 700,
            easing: 'easeOutQuart'
          },
          strokeDasharray: {
            value: '240 1386',
            duration: 700,
            easing: 'easeOutQuart'
          }
        });
      });
      
      document.getElementById('submit').addEventListener('focus', function(e) {
        if (current) current.pause();
        current = anime({
          targets: 'path',
          strokeDashoffset: {
            value: -730,
            duration: 700,
            easing: 'easeOutQuart'
          },
          strokeDasharray: {
            value: '530 1386',
            duration: 700,
            easing: 'easeOutQuart'
          }
        });
      });
}
function goToMainPage() {
  window.location.href="./Main page/Site2/Contact.html"
}
function goToMainPage2() {
  window.location.href="./Main page/Site1/Contact.html"
}
