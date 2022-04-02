const notifToggler = document.querySelector("#notif-toggler");
const notifTogglee = document.querySelector("#notif-togglee");





notifToggler.addEventListener('click', () => {
  if (notifTogglee.classList.contains('hidden')) notifTogglee.classList.remove('hidden');
  else notifTogglee.classList.add('hidden');
});
