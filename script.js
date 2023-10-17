const showKeyCode = (e) => {
  const insert = document.getElementById("insert");
  //object needed to store key values
  insert.innerHTML = "";
  const keyCodes = {
    "e.key": e.key === "" ? "space" : e.key,
    "e.keyCode": e.keyCode,
    "e.code": e.code,
  };
  //loop over the object to generate the HTML elements and Text nodes
  for (let key in keyCodes) {
    const div = document.createElement("div");
    div.className = "key";
    const small = document.createElement("small");
    const keyText = document.createTextNode(key);
    const valueText = document.createTextNode(keyCodes[key]);
    small.appendChild(keyText);
    div.appendChild(valueText);
    div.appendChild(small);
    insert.appendChild(div);
  }
};

window.addEventListener("keydown", showKeyCode);
