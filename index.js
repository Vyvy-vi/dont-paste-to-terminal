document.addEventListener("copy", (event) => {
  event.clipboardData.setData(
    "text/plain",
    `Hmmm this isn't right.`
  );
  event.preventDefault();
});

const target = document.querySelector("#target");

target.addEventListener("paste", (event) => {
  event.preventDefault();

  let paste = (event.clipboardData || window.clipboardData).getData("text");
  paste = "Can't paste in here";
  const selection = window.getSelection();
  if (!selection.rangeCount) return;
  selection.deleteFromDocument();
  selection.getRangeAt(0).insertNode(document.createTextNode(paste));
  selection.collapseToEnd();
});
