function validateForm() {
  let valid = true;

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const website = document.getElementById('website');
  const message = document.getElementById('message');

  document.getElementById('nameError').textContent = name.value.trim() ? '' : 'This field is required';
  document.getElementById('emailError').textContent = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i.test(email.value) ? '' : 'A valid email address is required';
  document.getElementById('websiteError').textContent = /^(https?:\/\/)?([\w\-]+\.)+[a-z]{2,6}(\/[\w\-./?%&=]*)?$/i.test(website.value) ? '' : 'A valid url is required';
  document.getElementById('messageError').textContent = message.value.trim() ? '' : 'This field is required';

  if (!name.value.trim() || !/^[^ ]+@[^ ]+\.[a-z]{2,3}$/i.test(email.value) || 
      !/^(https?:\/\/)?([\w\-]+\.)+[a-z]{2,6}(\/[\w\-./?%&=]*)?$/i.test(website.value) || 
      !message.value.trim()) {
    valid = false;
  }

  return valid;
}
