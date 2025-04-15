const translations = {
  it: {
    title: "Benvenuto su FriendlyTouch",
    subtitle: "Connettiti con un nuovo amico ogni giorno!",
    desc: "Clicca sotto per iniziare gratuitamente!",
  },
  en: {
    title: "Welcome to FriendlyTouch",
    subtitle: "Connect with a new friend every day!",
    desc: "Click below to start for free!",
  }
};

function switchLang(lang) {
  document.getElementById("title").textContent = translations[lang].title;
  document.getElementById("subtitle").textContent = translations[lang].subtitle;
  document.getElementById("desc").textContent = translations[lang].desc;
}
