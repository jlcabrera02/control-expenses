import InputG from "./InputG.js";

const d = document,
  root = d.getElementById("root"),
  credito = localStorage.getItem("credito");

const app = () => {
  root.appendChild(InputG());
};

d.addEventListener("DOMContentLoaded", app);

export default app;
