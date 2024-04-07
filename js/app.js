/*
 * Typewriter effect for the text in the hero section.
 */
function typewriter() {
  const elements = document.querySelectorAll('.type-anim');
  elements.forEach(function (element) {
    const text = element.innerHTML;
    element.innerText = '';
    let index = 0;

    function type() {
      if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 50); // Adjust typing speed (milliseconds)
      }
    }

    type();
  });
}

/*
 * Space the upper 'hero' content from the header, so that it doesn't overlap.
 */
function spaceUpperContent() {
  const elementHeight = document.getElementById('header').offsetHeight;
  document.getElementById('hero').style.marginTop = elementHeight + 'px';
}

/*
 * Resize the theme button to be a square.
 */
function resizeThemeButton() {
  const themeButton = document.getElementById('theme-button');
  const themeButtonHeight = themeButton.offsetHeight;
  themeButton.style.width = themeButtonHeight + 'px';

}

/*
 * Check the user's theme preference and apply it to the page.
 */
function checkUserThemePref() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    document.getElementById('theme-button').classList.add('fa-moon');
    document.getElementById('theme-button').classList.remove('fa-sun');
  }
}

/*
 * Resize the lower content to be 100% of the viewport height, minus the header.
 */
function resizeLowerContent() {
  const elementHeight = document.getElementById('header').offsetHeight;
  document.getElementById('hero').style.height = 'calc(100vh - ' + elementHeight + 'px)';
}

/*
 * Add event listener for DOMContentLoaded event to run functions when the page is loaded.
 */
document.addEventListener('DOMContentLoaded', function () {
  typewriter();
  //spaceUpperContent();
  resizeThemeButton();
  checkUserThemePref();
  //resizeLowerContent();
});

document.getElementById('theme-button').addEventListener('click', function () {
  const body = document.body;
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');

  const themeButton = document.getElementById('theme-button');
  themeButton.classList.toggle('fa-sun');
  themeButton.classList.toggle('fa-moon');
});
