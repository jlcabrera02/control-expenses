import InputExpenses from "./components/InputExpenses.js";
import FormControlExpenses from "./components/FormControlExpenses.js";
import PrintConceptos from "./components/printConceptos.js";
const d = document,
  root = d.getElementById("root");

const app = () => {
  root.appendChild(InputExpenses());
  root.appendChild(FormControlExpenses());
  root.appendChild(PrintConceptos());
};

d.addEventListener("DOMContentLoaded", app);

export default app;
