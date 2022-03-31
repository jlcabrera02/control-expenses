import PrintConceptos from "./printConceptos.js";

const d = document,
  form = d.createElement("form"),
  data = localStorage.getItem("data");

const FormControlExpenses = () => {
  form.innerHTML = `
    <input type="text" placeholder="Concepto" name="concepto">
    <input type="number" placeholder="monto" name="monto">
    <input type="submit">
`;

  return form;
};

const datos = [];

if (data) {
  JSON.parse(data).datos.forEach((el) => {
    datos.push({
      concepto: el.concepto,
      monto: el.monto,
    });
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  datos.push({
    concepto: e.target.concepto.value,
    monto: e.target.monto.value,
  });
  localStorage.setItem("data", JSON.stringify({ datos }));
  PrintConceptos();
});

export default FormControlExpenses;
