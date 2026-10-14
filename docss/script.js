// Datos locales de demostración. No se envían ni guardan en un servidor.
const categorias = [
  { id: "C-01", nombre: "Analgésicos", descripcion: "Productos para el alivio del dolor y la fiebre.", activa: true },
  { id: "C-02", nombre: "Antibióticos", descripcion: "Medicamentos clasificados como antibióticos.", activa: true },
  { id: "C-03", nombre: "Antihistamínicos", descripcion: "Productos para el tratamiento de alergias.", activa: true },
  { id: "C-04", nombre: "Gastrointestinales", descripcion: "Productos relacionados con el sistema digestivo.", activa: true },
  { id: "C-05", nombre: "Antidiabéticos", descripcion: "Medicamentos utilizados para el control de la diabetes.", activa: true },
  { id: "C-06", nombre: "Antihipertensivos", descripcion: "Medicamentos clasificados como antihipertensivos.", activa: true }
];

const fabricantes = [
  { id: "F-01", nombre: "Laboratorios Nova", telefono: "555-0101", correo: "contacto@nova.example", direccion: "Av. Salud 120, Ciudad de México", pais: "México", sitioWeb: "https://nova.example" },
  { id: "F-02", nombre: "Farmacéutica del Centro", telefono: "555-0102", correo: "contacto@centro.example", direccion: "Calle Ejemplo 45, Puebla", pais: "México", sitioWeb: "" },
  { id: "F-03", nombre: "Laboratorios Altura", telefono: "555-0103", correo: "contacto@altura.example", direccion: "Calz. del Laboratorio 80, Guadalajara", pais: "México", sitioWeb: "https://altura.example" },
  { id: "F-04", nombre: "FarmaVida MX", telefono: "555-0104", correo: "contacto@farmavida.example", direccion: "Av. Central 18, Monterrey", pais: "México", sitioWeb: "" },
  { id: "F-05", nombre: "Prisma Laboratorios", telefono: "555-0105", correo: "contacto@prisma.example", direccion: "Calle Prisma 210, Ciudad de México", pais: "México", sitioWeb: "https://prisma.example" },
  { id: "F-06", nombre: "BioNova", telefono: "555-0106", correo: "contacto@bionova.example", direccion: "Blvd. Ciencia 64, Querétaro", pais: "México", sitioWeb: "" }
];

const productos = [
  { id: "P-001", nombre: "Paracetamol 500 mg", principio: "Paracetamol", presentacion: "Tableta", concentracion: "500 mg", contenido: "20 tabletas", categoriaId: "C-01", fabricanteId: "F-01", precio: 38.5, receta: false, estado: "Activo" },
  { id: "P-002", nombre: "Ibuprofeno 400 mg", principio: "Ibuprofeno", presentacion: "Tableta", concentracion: "400 mg", contenido: "20 tabletas", categoriaId: "C-01", fabricanteId: "F-02", precio: 52, receta: false, estado: "Activo" },
  { id: "P-003", nombre: "Amoxicilina 500 mg", principio: "Amoxicilina", presentacion: "Cápsula", concentracion: "500 mg", contenido: "12 cápsulas", categoriaId: "C-02", fabricanteId: "F-03", precio: 96, receta: true, estado: "Activo" },
  { id: "P-004", nombre: "Loratadina 10 mg", principio: "Loratadina", presentacion: "Tableta", concentracion: "10 mg", contenido: "10 tabletas", categoriaId: "C-03", fabricanteId: "F-04", precio: 44.5, receta: false, estado: "Activo" },
  { id: "P-005", nombre: "Omeprazol 20 mg", principio: "Omeprazol", presentacion: "Cápsula", concentracion: "20 mg", contenido: "14 cápsulas", categoriaId: "C-04", fabricanteId: "F-01", precio: 68, receta: false, estado: "Activo" },
  { id: "P-006", nombre: "Metformina 850 mg", principio: "Metformina", presentacion: "Tableta", concentracion: "850 mg", contenido: "30 tabletas", categoriaId: "C-05", fabricanteId: "F-05", precio: 73, receta: true, estado: "Activo" },
  { id: "P-007", nombre: "Losartán 50 mg", principio: "Losartán", presentacion: "Tableta", concentracion: "50 mg", contenido: "30 tabletas", categoriaId: "C-06", fabricanteId: "F-06", precio: 89, receta: true, estado: "Activo" },
  { id: "P-008", nombre: "Naproxeno 250 mg", principio: "Naproxeno", presentacion: "Tableta", concentracion: "250 mg", contenido: "20 tabletas", categoriaId: "C-01", fabricanteId: "F-02", precio: 57.5, receta: false, estado: "Inactivo" }
];

const lotes = [
  { productoId: "P-001", numero: "PAR-2606-A", fabricacion: "2026-06-04", caducidad: "2026-11-15", recibidas: 100, disponibles: 18 },
  { productoId: "P-001", numero: "PAR-2608-B", fabricacion: "2026-08-12", caducidad: "2027-08-12", recibidas: 80, disponibles: 45 },
  { productoId: "P-002", numero: "IBU-2607-A", fabricacion: "2026-07-10", caducidad: "2026-12-10", recibidas: 80, disponibles: 8 },
  { productoId: "P-003", numero: "AMX-2609-C", fabricacion: "2026-09-01", caducidad: "2027-09-01", recibidas: 60, disponibles: 24 },
  { productoId: "P-005", numero: "OME-2610-A", fabricacion: "2026-10-01", caducidad: "2027-10-01", recibidas: 50, disponibles: 33 }
];

const compras = [
  { fecha: "2026-10-10", subtotal: 3250, descuentos: 125, impuestos: 0, total: 3125, estado: "Recibida", lotes: ["IBU-2607-A", "OME-2610-A"] },
  { fecha: "2026-10-05", subtotal: 5760, descuentos: 160, impuestos: 0, total: 5600, estado: "Recibida", lotes: ["PAR-2608-B"] },
  { fecha: "2026-09-28", subtotal: 2400, descuentos: 0, impuestos: 0, total: 2400, estado: "Recibida", lotes: ["AMX-2609-C"] },
  { fecha: "2026-09-20", subtotal: 1890, descuentos: 90, impuestos: 0, total: 1800, estado: "Recibida", lotes: ["PAR-2606-A"] }
];

const ventas = [
  { fecha: "2026-10-14T10:25", productos: ["Paracetamol 500 mg", "Loratadina 10 mg"], subtotal: 135.5, descuentos: 0, impuestos: 0, total: 135.5, metodo: "Efectivo", estado: "Completada" },
  { fecha: "2026-10-14T09:48", productos: ["Omeprazol 20 mg"], subtotal: 68, descuentos: 5, impuestos: 0, total: 63, metodo: "Tarjeta", estado: "Completada" },
  { fecha: "2026-10-13T17:32", productos: ["Ibuprofeno 400 mg", "Paracetamol 500 mg"], subtotal: 90.5, descuentos: 0, impuestos: 0, total: 90.5, metodo: "Efectivo", estado: "Completada" },
  { fecha: "2026-10-13T16:10", productos: ["Amoxicilina 500 mg"], subtotal: 96, descuentos: 0, impuestos: 0, total: 96, metodo: "Transferencia", estado: "Completada" },
  { fecha: "2026-10-12T12:06", productos: ["Paracetamol 500 mg"], subtotal: 38.5, descuentos: 0, impuestos: 0, total: 38.5, metodo: "Efectivo", estado: "Pendiente" }
];

const moneda = new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" });
const fechaCorta = new Intl.DateTimeFormat("es-MX", { day: "2-digit", month: "short", year: "numeric" });
const fechaHora = new Intl.DateTimeFormat("es-MX", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit", hour12: false });
const $ = (selector) => document.querySelector(selector);

function escapar(texto) {
  return String(texto).replace(/[&<>"']/g, (caracter) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[caracter]);
}

function fechaLocal(valor, incluyeHora = false) {
  const fecha = new Date(incluyeHora ? valor : `${valor}T12:00:00`);
  return incluyeHora ? fechaHora.format(fecha) : fechaCorta.format(fecha);
}

function existenciaPorProducto(productoId) {
  return lotes.filter((lote) => lote.productoId === productoId).reduce((total, lote) => total + lote.disponibles, 0);
}

function productoDeLote(lote) {
  return productos.find((producto) => producto.id === lote.productoId);
}

function categoriaDeProducto(producto) {
  return categorias.find((categoria) => categoria.id === producto.categoriaId);
}

function fabricanteDeProducto(producto) {
  return fabricantes.find((fabricante) => fabricante.id === producto.fabricanteId);
}

function estadoLote(lote) {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  const caducidad = new Date(`${lote.caducidad}T00:00:00`);
  const dias = Math.ceil((caducidad - hoy) / 86400000);
  if (dias < 0) return { texto: "Caducado", clase: "status-danger", dias };
  if (dias <= 90) return { texto: "Próximo a caducar", clase: "status-warning", dias };
  return { texto: "Vigente", clase: "status-blue", dias };
}

function etiquetaEstado(estado) {
  const normalizado = estado.toLocaleLowerCase("es-MX");
  let clase = "status";
  if (["pendiente", "bajo stock", "próximo a caducar"].includes(normalizado)) clase = "status-warning";
  if (["cancelada", "cancelado", "caducado"].includes(normalizado)) clase = "status-danger";
  if (["sin existencias", "inactivo"].includes(normalizado)) clase = "status-neutral";
  if (["vigente"].includes(normalizado)) clase = "status-blue";
  return `<span class="status ${clase === "status" ? "" : clase}">${escapar(estado)}</span>`;
}

function cargarFechaActual() {
  const ahora = new Date();
  $("#today-label").textContent = new Intl.DateTimeFormat("es-MX", { weekday: "short", day: "numeric", month: "short", year: "numeric" }).format(ahora);
}

function dibujarInicio() {
  const disponibles = productos.filter((producto) => producto.estado === "Activo" && existenciaPorProducto(producto.id) > 0).length;
  const proximos = lotes.filter((lote) => lote.disponibles > 0 && estadoLote(lote).dias >= 0 && estadoLote(lote).dias <= 90).sort((a, b) => a.caducidad.localeCompare(b.caducidad));
  $("#metric-products").textContent = disponibles;
  $("#metric-expiring").textContent = proximos.length;
  $("#metric-sales").textContent = ventas.length;

  const lotesInicio = proximos.slice(0, 4);
  $("#dashboard-expiring").innerHTML = lotesInicio.length ? lotesInicio.map((lote) => {
    const producto = productoDeLote(lote);
    return `<div class="compact-row"><div><span class="compact-primary">${escapar(producto?.nombre ?? "Producto")}</span><span class="compact-secondary">Lote ${escapar(lote.numero)}</span></div><div class="compact-right"><strong class="warning-text">${fechaCorta.format(new Date(`${lote.caducidad}T12:00:00`))}</strong><small>${lote.disponibles} disponibles</small></div></div>`;
  }).join("") : `<div class="empty-state">No hay lotes próximos a caducar.</div>`;

  $("#dashboard-sales").innerHTML = ventas.slice(0, 4).map((venta) => `<tr><td>${fechaLocal(venta.fecha, true)}</td><td>${escapar(venta.productos.join(", "))}</td><td class="money">${moneda.format(venta.total)}</td><td>${etiquetaEstado(venta.estado)}</td></tr>`).join("");
}

function dibujarFiltroCategorias() {
  $("#category-filter").insertAdjacentHTML("beforeend", categorias.map((categoria) => `<option value="${escapar(categoria.id)}">${escapar(categoria.nombre)}</option>`).join(""));
}

function dibujarProductos() {
  const busqueda = $("#product-search").value.trim().toLocaleLowerCase("es-MX");
  const categoria = $("#category-filter").value;
  const filtrados = productos.filter((producto) => {
    const categoriaProducto = categoriaDeProducto(producto);
    const fabricante = fabricanteDeProducto(producto);
    const coincideCategoria = !categoria || producto.categoriaId === categoria;
    const texto = [producto.nombre, producto.principio, producto.presentacion, producto.concentracion, producto.contenido, fabricante?.nombre, categoriaProducto?.nombre].join(" ").toLocaleLowerCase("es-MX");
    return coincideCategoria && texto.includes(busqueda);
  });
  $("#products-table").innerHTML = filtrados.length ? filtrados.map((producto) => {
    const categoria = categoriaDeProducto(producto);
    const fabricante = fabricanteDeProducto(producto);
    const detalleFabricante = fabricante ? `<details class="reference-details"><summary>${escapar(fabricante.nombre)}</summary><div class="reference-popover"><span><b>Teléfono:</b> ${escapar(fabricante.telefono)}</span><span><b>Correo:</b> ${escapar(fabricante.correo)}</span><span><b>Dirección:</b> ${escapar(fabricante.direccion)}</span><span><b>País:</b> ${escapar(fabricante.pais)}</span>${fabricante.sitioWeb ? `<span><b>Sitio web:</b> ${escapar(fabricante.sitioWeb)}</span>` : ""}</div></details>` : "—";
    const detalleCategoria = categoria ? `<details class="reference-details"><summary>${escapar(categoria.nombre)}</summary><div class="reference-popover"><span>${escapar(categoria.descripcion)}</span><span>Estado: ${categoria.activa ? "Activa" : "Inactiva"}</span></div></details>` : "—";
    return `<tr><td><span class="cell-main">${escapar(producto.nombre)}</span><span class="cell-sub">${escapar(producto.id)}</span></td><td>${escapar(producto.principio)}</td><td>${escapar(producto.presentacion)}</td><td>${escapar(producto.concentracion)}</td><td>${escapar(producto.contenido)}</td><td>${detalleCategoria}</td><td>${detalleFabricante}</td><td class="price-cell money">${moneda.format(producto.precio)}</td><td><span class="rx-tag ${producto.receta ? "yes" : ""}">${producto.receta ? "Sí" : "No"}</span></td><td>${etiquetaEstado(producto.estado)}</td></tr>`;
  }).join("") : `<tr><td colspan="9" class="empty-state">No se encontraron productos.</td></tr>`;
  $("#products-count").textContent = `${filtrados.length} de ${productos.length} productos`;
}

function dibujarLotes() {
  const ordenados = [...lotes].sort((a, b) => a.caducidad.localeCompare(b.caducidad));
  $("#lots-table").innerHTML = ordenados.map((lote) => {
    const producto = productoDeLote(lote);
    const estado = estadoLote(lote);
    return `<tr><td><span class="cell-main">${escapar(producto?.nombre ?? "Producto")}</span></td><td>${escapar(lote.numero)}</td><td>${fechaLocal(lote.fabricacion)}</td><td class="${estado.dias >= 0 && estado.dias <= 90 ? "warning-text" : ""}">${fechaLocal(lote.caducidad)}</td><td>${lote.recibidas}</td><td>${lote.disponibles}</td><td>${etiquetaEstado(estado.texto)}</td></tr>`;
  }).join("");
  $("#lots-count").textContent = `${lotes.length} lotes`;
}

function dibujarCompras() {
  $("#purchases-table").innerHTML = compras.map((compra) => {
    const lotesCompra = compra.lotes.map((numero) => {
      const lote = lotes.find((registro) => registro.numero === numero);
      const producto = lote && productoDeLote(lote);
      return `${numero}${producto ? ` — ${producto.nombre}` : ""}`;
    });
    return `<tr><td>${fechaLocal(compra.fecha)}</td><td class="money">${moneda.format(compra.subtotal)}</td><td class="money">${moneda.format(compra.descuentos)}</td><td class="money">${moneda.format(compra.impuestos)}</td><td class="price-cell money">${moneda.format(compra.total)}</td><td>${etiquetaEstado(compra.estado)}</td><td><details class="lots-details"><summary>${compra.lotes.length} ${compra.lotes.length === 1 ? "lote" : "lotes"}</summary><ul>${lotesCompra.map((numero) => `<li>${escapar(numero)}</li>`).join("")}</ul></details></td></tr>`;
  }).join("");
  $("#purchases-count").textContent = `${compras.length} compras`;
}

function dibujarVentas() {
  $("#sales-table").innerHTML = ventas.map((venta) => `<tr><td>${fechaLocal(venta.fecha, true)}</td><td>${venta.productos.map(escapar).join(", ")}</td><td class="money">${moneda.format(venta.subtotal)}</td><td class="money">${moneda.format(venta.descuentos)}</td><td class="money">${moneda.format(venta.impuestos)}</td><td class="price-cell money">${moneda.format(venta.total)}</td><td>${escapar(venta.metodo)}</td><td>${etiquetaEstado(venta.estado)}</td></tr>`).join("");
  $("#sales-count").textContent = `${ventas.length} ventas`;
}

const nombresVistas = { inicio: "Inicio", productos: "Productos", lotes: "Lotes", compras: "Compras", ventas: "Ventas" };
function mostrarVista(nombre) {
  document.querySelectorAll(".view").forEach((vista) => {
    const activa = vista.id === `view-${nombre}`;
    vista.hidden = !activa;
    vista.classList.toggle("is-visible", activa);
  });
  document.querySelectorAll(".nav-item").forEach((boton) => {
    const activa = boton.dataset.view === nombre;
    boton.classList.toggle("is-active", activa);
    if (activa) boton.setAttribute("aria-current", "page");
    else boton.removeAttribute("aria-current");
  });
  $("#breadcrumb-current").textContent = nombresVistas[nombre] ?? "Inicio";
}

const formularios = {
  productos: [
    ["Nombre", "text"], ["Principio activo", "text"], ["Presentación", "text"], ["Concentración", "text"], ["Contenido", "text"], ["Categoría", "select", categorias.map((categoria) => categoria.nombre)], ["Fabricante", "select", fabricantes.map((fabricante) => fabricante.nombre)], ["Precio", "number"], ["Requiere receta", "select", ["Sí", "No"]], ["Estado", "select", ["Activo", "Inactivo"]]
  ],
  lotes: [
    ["Producto", "select", productos.map((producto) => producto.nombre)], ["Número de lote", "text"], ["Fecha de fabricación", "date"], ["Fecha de caducidad", "date"], ["Unidades recibidas", "number"], ["Unidades disponibles", "number"], ["Estado", "select", ["Vigente", "Próximo a caducar", "Caducado"]]
  ],
  compras: [
    ["Fecha", "date"], ["Subtotal", "number"], ["Descuentos", "number"], ["Impuestos", "number"], ["Total", "number"], ["Estado", "select", ["Recibida", "Pendiente", "Cancelada"]], ["Lotes recibidos", "textarea"]
  ],
  ventas: [
    ["Fecha y hora", "datetime-local"], ["Productos", "textarea"], ["Subtotal", "number"], ["Descuentos", "number"], ["Impuestos", "number"], ["Total", "number"], ["Método de pago", "select", ["Efectivo", "Tarjeta", "Transferencia"]], ["Estado", "select", ["Completada", "Pendiente", "Cancelada"]]
  ]
};

function abrirFormulario(tipo) {
  const dialogo = $("#entry-dialog");
  const titulo = { productos: "Nuevo producto", lotes: "Nuevo lote", compras: "Nueva compra", ventas: "Nueva venta" }[tipo];
  $("#dialog-title").textContent = titulo;
  $("#dialog-fields").innerHTML = formularios[tipo].map(([etiqueta, tipoCampo, opciones]) => {
    const id = `field-${etiqueta.toLocaleLowerCase("es-MX").replace(/[^a-z0-9]+/g, "-")}`;
    let campo;
    if (tipoCampo === "select") {
      campo = `<select id="${id}" name="${id}">${opciones.map((opcion) => `<option>${escapar(opcion)}</option>`).join("")}</select>`;
    } else if (tipoCampo === "textarea") {
      campo = `<textarea id="${id}" name="${id}" placeholder="Escribe aquí"></textarea>`;
    } else {
      campo = `<input id="${id}" name="${id}" type="${tipoCampo}" ${tipoCampo === "number" ? 'min="0" step="0.01"' : ""}>`;
    }
    return `<label class="field ${tipoCampo === "textarea" ? "full" : ""}" for="${id}">${escapar(etiqueta)}${campo}</label>`;
  }).join("");
  dialogo.showModal();
}

let toastTimer;
function mostrarToast(mensaje) {
  const toast = $("#toast");
  toast.textContent = mensaje;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

document.querySelectorAll("[data-view]").forEach((boton) => boton.addEventListener("click", () => mostrarVista(boton.dataset.view)));
document.querySelectorAll("[data-go-view]").forEach((boton) => boton.addEventListener("click", () => mostrarVista(boton.dataset.goView)));
document.querySelectorAll("[data-open-form]").forEach((boton) => boton.addEventListener("click", () => abrirFormulario(boton.dataset.openForm)));
$("#product-search").addEventListener("input", dibujarProductos);
$("#category-filter").addEventListener("change", dibujarProductos);
$("#close-dialog").addEventListener("click", () => $("#entry-dialog").close());
$("#cancel-dialog").addEventListener("click", () => $("#entry-dialog").close());
$("#entry-form").addEventListener("submit", (evento) => {
  evento.preventDefault();
  $("#entry-dialog").close();
  mostrarToast("Modo de demostración: no se guardaron los datos.");
});

cargarFechaActual();
dibujarFiltroCategorias();
dibujarInicio();
dibujarProductos();
dibujarLotes();
dibujarCompras();
dibujarVentas();
