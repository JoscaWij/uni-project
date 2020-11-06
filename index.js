console.clear()

const rootStyle = document.documentElement.style;
const toggleButton = document.querySelector('.header_theme-btn')

rootStyle.setProperty("--highlight-color", "#f2f2f2");
rootStyle.setProperty("--main-color", "rgba(0, 4, 11)");
rootStyle.setProperty("--highlight-gradient", `linear-gradient(
    -90deg,
    rgba(4, 0, 66, 1) 0%,
    rgba(0, 4, 11, 1) 50%,
    rgba(0, 6, 52, 1) 100%
  )`);
rootStyle.setProperty("--background-gradient", `linear-gradient(
    180deg,
    rgba(242, 242, 242, 1) 0%,
    rgba(231, 229, 229, 1) 44%,
    rgba(219, 219, 219, 1) 100%
  )`);

toggleButton.addEventListener("click", () => {
  const isLight = rootStyle.getPropertyValue("--highlight-color") === "#f2f2f2";

  if (isLight) {
    rootStyle.setProperty("--highlight-color", "rgba(0, 4, 11)");
    rootStyle.setProperty("--main-color", "#f2f2f2");
    rootStyle.setProperty("--highlight-gradient", `linear-gradient(
        180deg,
          rgba(242, 242, 242, 1) 0%,
          rgba(231, 229, 229, 1) 44%,
          rgba(219, 219, 219, 1) 100%
        )`);
      rootStyle.setProperty("--background-gradient", `linear-gradient(
          -90deg,
          rgba(4, 0, 66, 1) 0%,
          rgba(0, 4, 11, 1) 50%,
          rgba(0, 6, 52, 1) 100%
        )`);
} else {
    rootStyle.setProperty("--highlight-color", "#f2f2f2");
    rootStyle.setProperty("--main-color", "rgba(0, 4, 11)");
    rootStyle.setProperty("--highlight-gradient", `linear-gradient(
        -90deg,
        rgba(4, 0, 66, 1) 0%,
        rgba(0, 4, 11, 1) 50%,
        rgba(0, 6, 52, 1) 100%
      )`);
    rootStyle.setProperty("--background-gradient", `linear-gradient(
        180deg,
        rgba(242, 242, 242, 1) 0%,
        rgba(231, 229, 229, 1) 44%,
        rgba(219, 219, 219, 1) 100%
      )`);
  }
});