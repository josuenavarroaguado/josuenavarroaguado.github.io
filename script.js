const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

document.querySelectorAll('[data-contact-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(`Technology challenge from ${data.get('name') || 'website'}`);
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nCompany: ${data.get('company')}\nEmail: ${data.get('email')}\nRole: ${data.get('role')}\nChallenge: ${data.get('challenge')}\n\n${data.get('message')}`
    );
    window.location.href = `mailto:josuenavarroaguado@outlook.com?subject=${subject}&body=${body}`;
  });
});

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});
