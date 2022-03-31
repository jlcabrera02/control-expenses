const d = document,
  div = d.createElement("div");

const PrintConceptos = () => {
  let datos = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data")).datos
    : [];
  console.log("funcionandos");
  div.innerHTML = "";
  if (datos.length > 0) {
    datos.forEach((el) => {
      let div2 = d.createElement("div");
      div2.innerHTML = `
        <p>${el.concepto}</p>
        <p>${el.monto}</p>
      `;
      div.appendChild(div2);
    });
  } else {
    div.innerHTML = `
      <p>Sin datos</p>
    `;
  }
  return div;
};

export default PrintConceptos;
