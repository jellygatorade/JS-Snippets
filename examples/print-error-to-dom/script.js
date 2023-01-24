function appendErrorDOM(error) {
  const newDiv = document.createElement("div");
  newDiv.innerText = error;
  document.body.appendChild(newDiv);
}

//createAppendErrorDOM(newError);

try {
  nonExistentFunction();
} catch (error) {
  appendErrorDOM(error);
  if (error.stack) {
    appendErrorDOM(error.stack);
  }
  // Expected output: ReferenceError: nonExistentFunction is not defined
  // (Note: the exact output may be browser-dependent)
}
