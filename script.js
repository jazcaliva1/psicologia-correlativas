const materias = [
  {
    codigo: "01",
    nombre: "Introducción a la Psicología",
    ciclo: "CFB",
    prerrequisitos: []
  },
  {
    codigo: "02",
    nombre: "Epistemología",
    ciclo: "CFB",
    prerrequisitos: []
  },
  {
    codigo: "10",
    nombre: "Psicología del Desarrollo I",
    ciclo: "CFE",
    prerrequisitos: ["01", "02"]
  },
  {
    codigo: "20",
    nombre: "Psicopatología",
    ciclo: "Profesional",
    prerrequisitos: ["10"]
  }
];

const container = document.getElementById("malla");

materias.forEach(m => {
  const div = document.createElement("div");
  div.className = "materia";
  div.setAttribute("data-ciclo", m.ciclo);
  div.innerHTML = <strong>${m.nombre}</strong><br><em>Código: ${m.codigo}</em><br>Prerrequisitos: ${m.prerrequisitos.join(", ") || "Ninguno"};
  container.appendChild(div);
});
