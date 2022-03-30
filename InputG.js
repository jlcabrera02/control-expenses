const d = document,
  div = d.createElement("div"),
  label = d.createElement("label"),
  p = d.createElement("p"),
  input = d.createElement("input"),
  credito = localStorage.getItem("credito");

const InputG = (e) => {
  if (!credito) {
    p.textContent = "Agregar dinero disponible";
    input.placeholder = "dinero disponible";
    input.type = "number";

    localStorage.setItem("credito", e.target.value);

    label.appendChild(p);
    label.appendChild(input);
    div.appendChild(label);
  } else {
    div.innerHTML = `
    <p>${localStorage.getItem("credito")}</p>
    `;
  }

  return div;
};

input.addEventListener("change", InputG);

export default InputG;
