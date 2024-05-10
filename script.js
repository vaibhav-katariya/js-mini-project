var color = ["#12f536", "#000", "#ffff00", "#ff00ff", "#11f666"];
var image = [
  "https://media.istockphoto.com/id/533214015/photo/seville-saint-peter-the-apostle-paint.webp?b=1&s=170667a&w=0&k=20&c=Zye48IUMQfT-X29kKtEhgaH06PH_-P8OK-P6cTbDujo=",
  "https://media.istockphoto.com/id/806664854/photo/modern-watercolor-portrait-of-a-young-woman.webp?b=1&s=170667a&w=0&k=20&c=JqasX4GG2ANZfitQ7oda4uuYEnBkg8ikYXDalp7UytY=",
  "https://media.istockphoto.com/id/1207576796/photo/creative-young-artist-painting-at-home.webp?b=1&s=170667a&w=0&k=20&c=lGp2sEcuBmmVJDuXoEyR0fqXRYG5BecCv6wOnPcGbR4=",
  "https://media.istockphoto.com/id/1183183783/photo/female-artist-works-on-abstract-oil-painting-moving-paint-brush-energetically-she-creates.webp?b=1&s=170667a&w=0&k=20&c=Mc1jvQ6kiL_JatrAfmDI-5WoB3le18ySmJcz33pUxjU=",
  "https://media.istockphoto.com/id/484217960/photo/group-of-preschoolers-in-art-class-painting-pictures.webp?b=1&s=170667a&w=0&k=20&c=qK_YKkJMorLEGT_3mfPmaTln4-yFWI0_GR6N0ugxcB4=",
];
var quote = [
  "In every stroke lies a universe, where the soul speaks in colors.",
  "Paintings are portals to the artist's imagination, inviting us to journey beyond the canvas.",
  "With each brushstroke, a painter breathes life into dreams, turning pigment into poetry.",
  "In the stillness of a painting, echoes of emotions resonate, speaking volumes without uttering a word.",
  "Art is the language of the heart, and paintings are its most eloquent dialect, whispering truths that resonate through generations.",
];
var currentIndex = 0;
var intervalId;
var colorBox = document.getElementById("box1");
var imageBox = document.getElementById("imageBox");
var quoteBox = document.getElementById("quoteBox");

function changeHandler() {
  colorBox.style.backgroundColor = color[currentIndex];
  imageBox.src = image[currentIndex];
  quoteBox.innerHTML = `"${quote[currentIndex]}"`;
  if (color.length || image.length || quote.length) {
    currentIndex++;
  }
  colorBox.style.transform = `rotate(${currentIndex * 100}deg)`;
  colorBox.style.transition = `0.5s`;

  if (currentIndex == color.length || currentIndex == image.length || currentIndex == quote.length) {
    clearInterval(intervalId);
  }
}

function start() {
  intervalId = setInterval(changeHandler, 2000);
}

function stop() {
  clearInterval(intervalId);
}
