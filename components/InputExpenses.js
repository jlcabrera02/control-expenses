const d = document,
  div = d.createElement("div"),
  label = d.createElement("label"),
  p = d.createElement("p"),
  input = d.createElement("input"),
  form = d.createElement("form"),
  btn = d.createElement("button");

const InputExpenses = () => {
  const credito = localStorage.getItem("credito");
  div.innerHTML = "";

  console.log(!credito);
  if (!credito) {
    p.textContent = "Agregar dinero disponible";
    input.placeholder = "dinero disponible";
    input.type = "number";
    input.name = "credito";
    input.min = 100;
    input.max = 2000;
    btn.textContent = "Aceptar";
    btn.type = "submit";
    label.appendChild(p);
    label.appendChild(input);
    form.appendChild(label);
    form.appendChild(btn);
    form.onsubmit = setCredito;
    div.appendChild(form);
  } else {
    p.textContent = localStorage.getItem("credito");
    btn.textContent = "Editar crédito";
    btn.onclick = editCredito;
    div.appendChild(p);
    div.appendChild(btn);
  }
  console.log(div);
  return div;
};

function setCredito(event) {
  event.preventDefault();
  console.log(event);
  localStorage.setItem("credito", event.target.credito.value);
  InputExpenses();
}

function editCredito() {
  localStorage.removeItem("credito");
  InputExpenses();
}

export default InputExpenses;
