document.getElementById('tester-form').addEventListener('submit', function (event) {
  event.preventDefault();
  if (!this.reportValidity()) return;
  const data = new FormData(this);
  const body = 'I would like to test ParkSpoting.\n\nEmail: ' + data.get('email').trim() + '\nCity: ' + data.get('city').trim() + '\nPhone: ' + data.get('phone');
  window.location.href = 'mailto:support@parkspoting.com?subject=' + encodeURIComponent('ParkSpoting tester signup') + '&body=' + encodeURIComponent(body);
  document.getElementById('signup-status').textContent = 'Finish sending your request in your email app. If it did not open, email support@parkspoting.com with the details above.';
});
