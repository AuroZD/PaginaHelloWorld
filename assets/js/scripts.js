/* DATA */
const team = [
  { name: "Ana Guadalupe Martinez Colón",      role: "Presidenta",         color: "#00d4ff",    Image: "assets/img/ana.jpeg"},
  { name: "Jesús Sebastián Vázquez Zarco",   role: "Vicepresidente",     color: "#7b4fff",  Image: "assets/img/sebas.jpeg"},
  { name: "Enrique Emiliano Cano García",     role: "Secretario técnico",         color: "#f5c542", Image: "assets/img/enrique.jpeg"},
  { name: "Eric Leonardo Rosales Sánchez",    role: "Director de Estrategia y Planeación",           color: "#ff6b6b",  Image: "assets/img/eric.jpeg"},
];
const activities = [
  { icon:"💡", title:"Fortalecer habilidades técnicas", desc:"Organizar talleres, cursos y sesiones prácticas enfocadas en programación..." },
  { icon:"💪", title:"Fortalecer habilidades blandas", desc:"Fomentar competencias como el trabajo en equipo, liderazgo, comunicación efectiva..." },
  { icon:"🏆", title:"Preparar equipos para competencias", desc:"Formar, entrenar y coordinar equipos multidisciplinarios..." },
  { icon:"🛠️", title:"Interdisciplinariedad", desc:"Fomentar la interacción y la colaboración interdisciplinaria entre las distintas ingenierías..." },
  { icon:"📣", title:"Proyección institucional", desc:"Contribuir a la proyección y representación institucional de la FES Aragón..." },
];

/* RENDER TEAM */
const teamGrid = document.getElementById('teamGrid');
team.forEach(m => {
    teamGrid.innerHTML += `
    <div class="team-card reveal">
      <div class="avatar" style="overflow: hidden; border: 2px solid ${m.color}"</div>
        <img src="${m.Image}" alt="${m.name}" style="width: 100%; height: 100%; object-fit: cover;">
        </div> 
      <h3>${m.name}</h3>
      <p class="team-role">${m.role}</p>
    </div>`;
});

/* RENDER ACTIVITIES */
const actGrid = document.getElementById('actGrid');
activities.forEach((a,i) => {
  actGrid.innerHTML += `
    <div class="act-card reveal">
      <div class="act-number">${String(i+1).padStart(2,'0')}</div>
      <div class="act-icon">${a.icon}</div>
      <h3>${a.title}</h3>
      <p>${a.desc}</p>
    </div>`;
});

/* HAMBURGER */
const ham = document.getElementById('ham');
const mob = document.getElementById('mobileMenu');
ham.addEventListener('click', () => {
  ham.classList.toggle('open');
  mob.classList.toggle('open');
});
document.querySelectorAll('.mob-link').forEach(l => l.addEventListener('click', () => {
  ham.classList.remove('open'); mob.classList.remove('open');
}));

/* SCROLL REVEAL */
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

/* ── FORM ── */
// Se envuelve todo el evento para asegurarse de que el HTML ya exista
document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('submitBtn');
    const mensajeExito = document.getElementById('formSuccess');
    if (boton) {
        boton.addEventListener('click', () => {
            // Solo se ocupará el botón si el formulario es válido
            boton.style.display = 'none';
            if (mensajeExito) mensajeExito.style.display = 'block';
        });
    }
});