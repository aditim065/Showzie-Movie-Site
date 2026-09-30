// JavaScript file: script.js


//click trailer
// Access modal element
const modal = document.getElementById("trailerModal");

// Access trigger button
const btn = document.getElementById("trailerBtn");

// Access close icon
const span = document.getElementsByClassName("close")[0];

// Open modal
btn.onclick = function () {
  modal.style.display = "block";
};

// Close modal when 'x' is clicked
span.onclick = function () {
  modal.style.display = "none";
};

// Close modal when clicking outside
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//toggle

function toggleMode() {
  const body = document.body;
  const icon = document.getElementById("modeIcon");

  body.classList.toggle("light-mode");

  icon.textContent = body.classList.contains("light-mode") ? "🌞" : "🌙";
}

//mylist

function addToWatchlist(title) {
  let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
  if (!watchlist.includes(title)) {
    watchlist.push(title);
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
    alert(`"${title}" added to your watchlist!`);
  } else {
    alert(`"${title}" is already in your watchlist.`);
  }
}

// try:
function gotopageromance(name){
  if(name==="1"){
    open("https://www.imdb.com/title/tt2582846/","_blank");
  }else if(name==="2"){
    open("https://www.imdb.com/title/tt18184012/","_blank");
  }else if(name==="3"){
    open("https://www.imdb.com/title/tt8590896/","_blank");
}else if(name==="4"){
    open("https://www.imdb.com/title/tt0120338/","_blank");
}else if(name==="5"){
    open("https://www.imdb.com/title/tt1024943/","_blank");
}else if(name==="6"){
    open("https://www.imdb.com/title/tt20850406/","_blank");
}else if(name==="7"){
    open("https://www.imdb.com/title/tt2178470/","_blank");
}else if(name==="8"){
    open("https://www.imdb.com/title/tt3075360/","_blank");
}else if(name==="9"){
    open("https://www.imdb.com/title/tt2075277/","_blank");
}else if(name==="10"){
    open("https://www.imdb.com/title/tt0242256/","_blank");
}else if(name==="11"){
    open("https://www.imdb.com/title/tt7019842/","_blank");
}
}

function gotopagehorror(name){
  if(name==="1"){
    window.open("https://www.imdb.com/title/tt15474916/","_blank");
  }
  else if(name==="2"){
    open("https://www.imdb.com/title/tt7329858/","_blank");
  }else if(name==="3"){
    open("https://www.imdb.com/title/tt1457767/","_blank");
  }else if(name==="4"){
    open("https://www.imdb.com/title/tt0991346/","_blank");
  }else if(name==="5"){
    open("https://www.imdb.com/title/tt1339248/","_blank");
  }else if(name==="6"){
    open("https://www.imdb.com/title/tt4432480/","_blank");
  }else if(name==="7"){
    open("https://www.imdb.com/title/tt8042248/","_blank");
  }else if(name==="8"){
    open("https://www.imdb.com/title/tt4010302/","_blank");
  }else if(name==="9"){
    open("https://www.imdb.com/title/tt1361809/","_blank");
  }else if(name==="10"){
    open("https://www.imdb.com/title/tt13773770/","_blank");
  }
}
function gotopagedrama(name) {
  if (name === "1") {
    open("https://www.imdb.com/title/tt0413573/", "_blank"); // Grey's Anatomy
  } else if (name === "2") {
    open("https://www.imdb.com/title/tt2075277/", "_blank"); // Paramathma
  } else if (name === "3") {
    open("https://www.imdb.com/title/tt6483832/", "_blank"); // The Resident
    } else if (name === "4") {
    open("https://www.imdb.com/title/tt7466810/", "_blank"); //777 Charlie
  } else if (name === "5") {
    open("https://www.imdb.com/title/tt21108774/", "_blank"); // The Buccaneers
  } else if (name === "6") {
    open("https://www.imdb.com/title/tt0304415/", "_blank"); // Mona Lisa Smile
  } else if (name === "7") {
    open("https://www.imdb.com/title/tt37629310/", "_blank"); // Su from So
  } else if (name === "8") {
    open("https://www.imdb.com/title/tt3281548/", "_blank"); // Little Women
  } else if (name === "9") {
    open("https://www.imdb.com/title/tt15327088/", "_blank"); // Kaantara
  } else if (name === "10") {
    open("https://www.imdb.com/title/tt8737614/", "_blank"); // Manjili
  } else if (name === "11") {
    open("https://www.imdb.com/title/tt7098658/", "_blank"); // Raazi
  } else if (name === "12") {
    open("https://www.imdb.com/title/tt33888131/", "_blank"); // Aap Jaisa Koi
  }
}
function gotopageanimated(name) {
  if (name === "1") {
    open("https://www.imdb.com/title/tt3521164/", "_blank"); // Moana
  } else if (name === "2") {
    open("https://www.imdb.com/title/tt13186482/", "_blank"); // Mufasa the Lion King
  } else if (name === "3") {
    open("https://www.imdb.com/title/tt15789038/", "_blank"); // Elemental
  } else if (name === "4") {
    open("https://www.imdb.com/title/tt2321492/", "_blank"); // Krishna aur Kans
  } else if (name === "5") {
    open("https://www.imdb.com/title/tt21692408/", "_blank"); // Kung Fu Panda 4
  } else if (name === "6") {
    open("https://www.imdb.com/title/tt4183924/", "_blank"); // Ghatothkach
  } else if (name === "7") {
    open("https://www.imdb.com/title/tt0472181/", "_blank"); // The Smurfs
  } else if (name === "8") {
    open("https://www.imdb.com/title/tt3040964/", "_blank"); // The Jungle Book
  } else if (name === "9") {
    open("https://www.imdb.com/title/tt0952640/", "_blank"); // Alvin and the Chipmunks
  } else if (name === "10") {
    open("https://www.imdb.com/title/tt2380307/", "_blank"); // Coco
  } else if (name === "11") {
    open("https://www.imdb.com/title/tt3874544/", "_blank"); // Boss Baby
  } else if (name === "12") {
    open("https://www.imdb.com/title/tt1323594/", "_blank"); // Despicable Me
  }
}
function gotopagetvshows(name) {
  if (name === "1") {
    open("https://www.imdb.com/title/tt0413573/", "_blank"); // Grey’s Anatomy
  } else if (name === "2") {
    open("https://www.imdb.com/title/tt33098081/", "_blank"); // The Royals
  } else if (name === "3") {
    open("https://www.imdb.com/title/tt6483832/", "_blank"); // The Resident
  } else if (name === "4") {
    open("https://www.imdb.com/title/tt21108774/", "_blank"); // The Buccaneers
  } else if (name === "5") {
    open("https://www.imdb.com/title/tt4574334/", "_blank"); // Stranger Things
  } else if (name === "6") {
    open("https://www.imdb.com/title/tt1405406/", "_blank"); // The Vampire Diaries
  } else if (name === "7") {
    open("https://www.imdb.com/title/tt0397442/", "_blank"); // Gossip Girls
  } else if (name === "8") {
    open("https://www.imdb.com/title/tt9544034/", "_blank"); // The Family Man
  } else if (name === "9") {
    open("https://www.imdb.com/title/tt2442560/", "_blank"); // Peaky Blinders
  } else if (name === "10") {
    open("https://www.imdb.com/title/tt1442437/", "_blank"); // Modern Family
  } else if (name === "11") {
    open("https://www.imdb.com/title/tt10062292/", "_blank"); // Never Have I Ever
  } else if (name === "12") {
    open("https://www.imdb.com/title/tt10293938/", "_blank"); // Outer Banks
  } else if (name === "13") {
    open("https://www.imdb.com/title/tt0238784/", "_blank"); // Gilmore Girls
  } else if (name === "14") {
    open("https://www.imdb.com/title/tt5420376/", "_blank"); // Riverdale
  } else if (id === "15") {
  open("https://www.imdb.com/title/tt10813940/", "_blank" ); // Ginny and Georgia
}
}
function gotopagescifi(name) {
  if (name === "1") {
    open("https://www.imdb.com/title/tt0499549/", "_blank"); // Avatar
  } else if (name === "2") {
    open("https://www.imdb.com/title/tt1562871/", "_blank"); // Ra One
  } else if (name === "3") {
    open("https://www.imdb.com/title/tt5465216/", "_blank"); // Mukunda Murari
  } else if (name === "4") {
    open("https://www.imdb.com/title/tt1029231/", "_blank"); // Krrish 3
  } else if (name === "5") {
    open("https://www.imdb.com/title/tt1160419/", "_blank"); // Dune
  } else if (name === "6") {
    open("https://www.imdb.com/title/tt7998242/", "_blank"); // Avane Srimannnarayana
  } else if (name === "7") {
    open("https://www.imdb.com/title/tt23875550/", "_blank"); // UI
  } else if (name === "8") {
    open("https://www.imdb.com/title/tt1318514/", "_blank"); // Rise of the Planet of the Apes
  } else if (name === "9") {
    open("https://www.imdb.com/title/tt1447500/", "_blank"); // Magadheera
  } else if (name === "10") {
    open("https://www.imdb.com/title/tt0816692/", "_blank"); // Interstellar
  } else if (name === "11") {
    open("https://www.imdb.com/title/tt0249371/", "_blank"); // Asoka
  }
}
function gotopageaction(name) {
  if(name === "1"){
    open("https://www.imdb.com/title/tt31036941/");
  } else if(name === "2"){
    open("https://www.imdb.com/title/tt10698680/");
  } else if(name === "3"){
    open("https://www.imdb.com/title/tt27853611/");
  } else if(name === "4"){
    open("https://www.imdb.com/title/tt7181546/");
  } else if(name === "5"){
    open("https://www.imdb.com/title/tt2631186/");
  } else if(name === "6"){
    open("https://www.imdb.com/title/tt4154796/");
  } else if(name === "7"){
    open("https://www.imdb.com/title/tt0441048/");
  } else if(name === "8"){
    open("https://www.imdb.com/title/tt12735488/");
  } else if(name === "9"){
    open("https://www.imdb.com/title/tt7430722/");
  } else if(name === "10"){
    open("https://www.imdb.com/title/tt23398540/");
  } else if(name === "11"){
    open("https://www.imdb.com/title/tt23804696/");
  } else if(name === "12"){
    open("https://www.imdb.com/title/tt8291224/");
  } else if(name === "13"){
    open("https://www.imdb.com/title/tt9260636/");
  } else if(name === "14"){
    open("https://www.imdb.com/title/tt11663228/");
  }
}