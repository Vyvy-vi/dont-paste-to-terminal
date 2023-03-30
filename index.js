document.addEventListener("copy", (event) => {
  console.log(`Trying to copy from website: ${event.clipboardData}`);
  event.clipboardData.setData(
    "text/plain",
    `Hmmm this isn't right.`
  );
  event.preventDefault();
});

const target = document.querySelector("textarea.target");
target.addEventListener("paste", (event) => {
  event.preventDefault();

  let paste = (event.clipboardData || window.clipboardData).getData("text");
  console.log(`Trying to paste this: ${paste}`);
  paste = "Can't paste in here";
  target.textContent = paste;
});
