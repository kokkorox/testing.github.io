// ====== EDIT ONLY THIS BLOCK ======
const DATA = {
  name: "Your Name",
  tagline: "Crafting the sound of cinema.",
  about: "Write your biography here: where you started, your style, your journey in film music.",
  email: "you@example.com",
  stats: [["25+","Films"],["100+","Songs"],["10","Years"]],
  films: [
    {title:"Movie One", year:"2024", role:"Music Director", poster:"images/film1.jpg"},
    {title:"Movie Two", year:"2023", role:"Composer", poster:"images/film2.jpg"}
  ],
  music: [
    {title:"Song Title", film:"Movie One", cover:"images/song1.jpg", link:"https://youtube.com"}
  ],
  gallery: ["images/g1.jpg","images/g2.jpg","images/g3.jpg"],
  social: [["YouTube","https://youtube.com"],["Instagram","https://instagram.com"],["Spotify","https://spotify.com"]]
};
// ==================================
const $ = id => document.getElementById(id);
document.title = DATA.name + " | Composer & Music Director";
["logoName","heroName","footName"].forEach(i => $(i).textContent = DATA.name);
$("heroLine").textContent = DATA.tagline;
$("aboutText").textContent = DATA.about;
$("email").textContent = DATA.email; $("email").href = "mailto:" + DATA.email;
$("year").textContent = new Date().getFullYear();
$("stats").innerHTML = DATA.stats.map(s => `<div class="stat"><b>${s[0]}</b>${s[1]}</div>`).join("");
$("filmGrid").innerHTML = DATA.films.map(f => `<div class="card"><img src="${f.poster}" alt="${f.title}" loading="lazy"><div><h3>${f.title}</h3><p>${f.year} • ${f.role}</p></div></div>`).join("");
$("musicGrid").innerHTML = DATA.music.map(m => `<div class="card"><img src="${m.cover}" alt="${m.title}" loading="lazy"><div><h3>${m.title}</h3><p>${m.film}</p><a href="${m.link}" target="_blank" rel="noopener">▶ Listen</a></div></div>`).join("");
$("galleryGrid").innerHTML = DATA.gallery.map(g => `<img src="${g}" alt="Gallery photo" loading="lazy">`).join("");
$("social").innerHTML = DATA.social.map(s => `<a href="${s[1]}" target="_blank" rel="noopener">${s[0]}</a>`).join("");
const lb = $("lightbox");
document.querySelectorAll(".gallery img").forEach(i => i.onclick = () => { lb.querySelector("img").src = i.src; lb.classList.add("on"); });
lb.onclick = () => lb.classList.remove("on");
