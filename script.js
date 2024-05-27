function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // change de profile picture

  const img = document.querySelector(".profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "https://github.com/raphaelcostalima.png")
  } else {
    img.setAttribute("src", "./assets/light-photo-avatar.jpg")
    img.setAttribute("alt", "Cap avatar profile picture dark mode")
  }
}
