import btnRemoveCredito from "./btnRemoveCredito.js";
import InputExpenses from "./components/InputExpenses.js";
const d = document,
  root = d.getElementById("root");

const app = () => {
  root.appendChild(InputExpenses());
};

d.addEventListener("DOMContentLoaded", app);

export default app;
