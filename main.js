// main.js - interactions
document.addEventListener('DOMContentLoaded', function(){
  // theme
  const toggle = document.getElementById('theme-toggle');
  const body = document.body;
  const saved = localStorage.getItem('theme');
  if(saved === 'light') body.classList.add('light-mode');
  toggle && toggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
  });

  // burger toggle
  const burger = document.getElementById('burger');
  const nav = document.getElementById('main-nav');
  burger && burger.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // filter projects
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project-card');
  filterBtns.forEach(btn => btn.addEventListener('click', () => {
    filterBtns.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    projects.forEach(p => {
      if(f === '*' || p.dataset.category === f) p.style.display = '';
      else p.style.display = 'none';
    });
  }));

  // contact form - simple validation + feedback, uses EmailJS if configured
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const formData = new FormData(form);
      const name = formData.get('name'), email = formData.get('email'), message = formData.get('message');
      if(!name || !email || !message){
        status.textContent = 'Merci de remplir tous les champs.';
        status.style.color = 'tomato';
        return;
      }
      status.textContent = 'Envoi en cours…';
      status.style.color = '';
      // Try to send via EmailJS if available
      if(window.emailjs){
        emailjs.sendForm('service_nkgb4gz','template_8ji7se4', form)
          .then(()=>{ status.textContent = 'Message envoyé ✅'; status.style.color = 'green'; form.reset(); })
          .catch(()=>{ status.textContent = 'Erreur lors de l\'envoi. Merci de réessayer.'; status.style.color = 'tomato'; });
      } else {
        // fallback: show message and instruct user
        status.innerHTML = 'Prêt à envoyer — configure EmailJS pour envoyer réellement le message.';
      }
    });
  }

});
