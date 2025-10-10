document.addEventListener('DOMContentLoaded', function(){
  const body = document.body;
  const toggle = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('theme');
  if(saved === 'light') body.classList.remove('dark-mode'), body.classList.add('light-mode');
  else body.classList.add('dark-mode');

  toggle && toggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
  });

  // burger
  const burger = document.getElementById('burger');
  const nav = document.getElementById('main-nav');
  burger && burger.addEventListener('click', ()=> nav.classList.toggle('open'));

  // project filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project-card');
  filterBtns.forEach(btn => btn.addEventListener('click', ()=>{
    filterBtns.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    projects.forEach(p => {
      if(f==='*' || p.dataset.category===f) p.style.display='';
      else p.style.display='none';
    });
  }));

  // contact form
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const fd = new FormData(form);
      if(!fd.get('name') || !fd.get('email') || !fd.get('message')){
        status.textContent = 'Merci de remplir tous les champs.';
        status.style.color = 'tomato';
        return;
      }
      status.textContent = 'Prêt à envoyer — configure EmailJS pour l\'envoi.';
      status.style.color = '';
    });
  }
});