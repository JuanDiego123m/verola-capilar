/* =========================================================
   VEROLA CAPILAR
   SISTEMA DE CATÁLOGO, MARCAS, GALERÍAS Y PEDIDOS
========================================================= */

/* =========================================================
   1. CONFIGURACIÓN GENERAL
========================================================= */

const numeroWhatsApp = "573218963327";
const imagenPredeterminada =
    "https://placehold.co/600x600/f7f2ef/a96f6b?text=VEROLA+CAPILAR";

let carrito = [];

function obtenerProductos() {
    return Array.isArray(window.productos) ? window.productos : [];
}

function normalizarMarca(marca) {
    return String(marca || "")
        .trim()
        .toLocaleUpperCase("es-CO")
        .replace(/_/g, " ")
        .replace(/\s+/g, " ");
}

function escaparHTML(valor = "") {
    return String(valor).replace(/[&<>"']/g, caracter => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[caracter]);
}

function obtenerMarcaInicial() {
    const parametros = new URLSearchParams(window.location.search);
    const marca = parametros.get("marca");

    return marca ? normalizarMarca(marca) : "TODAS";
}

let marcaActual = obtenerMarcaInicial();


/* =========================================================
   2. CONFIGURACIÓN DE MARCAS
========================================================= */

const configuracionMarcas = {

    MILAGROS: {
        nombre: "MILAGROS",
        descripcion: "Encuentra shampoos, tratamientos, sérums, perfumes capilares y más productos de la marca Milagros.",
        logo: "img/milagros/logo-milagros.jpeg"
    },

    ETNIKER: {
        nombre: "ETNIKER",
        descripcion: "Explora los productos capilares de Etniker disponibles en nuestro catálogo.",
        logo: "img/etniker/logo-etniker.jpeg"
    },

    CLICK: {
        nombre: "CLICK HAIR",
        descripcion: "Conoce los productos Click Hair disponibles en Verola Capilar.",
        logo: "img/click_hair/Logo_click_hair.jpeg"
    },

    BOTANICO: {
        nombre: "RITUAL BOTÁNICO",
        descripcion: "Descubre los productos de Ritual Botánico disponibles en nuestro catálogo.",
        logo: "img/botanico/logo_botanico.jpeg"
    },

    POCION: {
        nombre: "LA POCIÓN",
        descripcion: "Explora los productos de La Poción disponibles en Verola Capilar.",
        logo: "img/pocion/logo-pocion.jpeg"
    },

    OLE: {
        nombre: "OLÉ",
        descripcion: "Explora los productos de Olé disponibles en Verola Capilar.",
        logo: "img/ole/Ole_logo.jpeg"
    }

};


function obtenerConfiguracionMarca(marca) {
    const normalizada = normalizarMarca(marca);

    return Object.entries(configuracionMarcas).find(([clave, config]) => {
        const nombre = normalizarMarca(config.nombre);

        return (
            nombre === normalizada ||
            nombre.replace(/\s/g, "") === normalizada.replace(/\s/g, "") ||
            normalizarMarca(clave) === normalizada
        );
    })?.[1];
}



function configurarVistaMarca() {
    const esVistaMarca = marcaActual !== "TODAS";

    // Elementos principales
    const heroPrincipal = document.querySelector(".hero");
    const portadaMarca = document.getElementById("marca-portada");
    const encabezado = document.querySelector(".section-header h2");

    // Mostrar u ocultar portada según la vista
    if (heroPrincipal) {
        heroPrincipal.hidden = esVistaMarca;
    }

    if (portadaMarca) {
        portadaMarca.hidden = !esVistaMarca;
    }

    // Vista general del catálogo
    if (!esVistaMarca) {
        document.title = "VEROLA CAPILAR | Catálogo";

        if (encabezado) {
            encabezado.textContent = "Nuestro catálogo";
        }

        return;
    }

    // Obtener configuración de la marca
    const config = obtenerConfiguracionMarca(marcaActual) || {
        nombre: marcaActual,
        descripcion: `Explora los productos de ${marcaActual} disponibles en Verola Capilar.`,
        logo: ""
    };

    // Elementos de la portada
    const titulo = document.getElementById("brand-title");
    const descripcion = document.getElementById("brand-description");
    const logoImagen = document.getElementById("brand-logo-image");
    const logoTexto = document.getElementById("brand-logo-text");

    // Actualizar título y descripción
    if (titulo) {
        titulo.textContent = config.nombre;
    }

    if (descripcion) {
        descripcion.textContent = config.descripcion;
    }

    // Actualizar encabezado del catálogo
    if (encabezado) {
        encabezado.textContent = `Catálogo ${config.nombre}`;
    }

    // Configurar logo alternativo de texto
    if (logoTexto) {
        logoTexto.textContent = config.nombre;
        logoTexto.hidden = false;
    }

    // Configurar imagen del logo
    if (logoImagen) {
        logoImagen.hidden = true;
        logoImagen.removeAttribute("src");
        logoImagen.alt = `Logo ${config.nombre}`;

        logoImagen.onload = () => {
            logoImagen.hidden = false;

            if (logoTexto) {
                logoTexto.hidden = true;
            }
        };

        logoImagen.onerror = () => {
            logoImagen.hidden = true;

            if (logoTexto) {
                logoTexto.hidden = false;
            }
        };

        if (config.logo) {
            logoImagen.src = config.logo;
        }
    }

    // Actualizar título de la pestaña
    document.title = `${config.nombre} | VEROLA CAPILAR`;
}


/* =========================================================
   3. PRECIOS Y DESCUENTOS
========================================================= */

function formatearPrecio(precio) {
    const valor = Number(precio);

    return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0
    }).format(Number.isFinite(valor) ? valor : 0);
}


function obtenerPrecioFinal(producto) {
    const precio = Number(producto.precio);
    const oferta = Number(producto.precioOferta);

    const ofertaValida =
        producto.precioOferta !== null &&
        producto.precioOferta !== undefined &&
        producto.precioOferta !== "" &&
        Number.isFinite(oferta) &&
        Number.isFinite(precio) &&
        oferta > 0 &&
        oferta < precio;

    return ofertaValida ? oferta : (Number.isFinite(precio) ? precio : 0);
}


function tieneDescuento(producto) {
    return obtenerPrecioFinal(producto) < Number(producto.precio);
}


function mostrarPrecio(producto) {
    if (tieneDescuento(producto)) {
        return `
            <div class="product-prices">
                <span class="price-original">
                    ${formatearPrecio(producto.precio)}
                </span>
                <strong class="price-offer">
                    ${formatearPrecio(obtenerPrecioFinal(producto))}
                </strong>
            </div>
        `;
    }

    return `
        <strong class="product-price">
            ${formatearPrecio(producto.precio)}
        </strong>
    `;
}


/* =========================================================
   4. IMÁGENES Y GALERÍAS
========================================================= */

function obtenerImagenesProducto(producto) {
    if (Array.isArray(producto.imagenes) && producto.imagenes.length) {
        return producto.imagenes.filter(imagen =>
            typeof imagen === "string" && imagen.trim() !== ""
        );
    }
    return producto.imagen ? [producto.imagen] : [];
}


function cambiarImagenGaleria(galeria, nuevoIndice) {
    if (!galeria || !galeria.imagenes?.length) return;

    const imagenPrincipal = galeria.querySelector(".product-main-image");
    if (!imagenPrincipal) return;

    const imagenes = galeria.imagenes;
    const indice = (nuevoIndice + imagenes.length) % imagenes.length;

    galeria.indiceActual = indice;
    imagenPrincipal.src = imagenes[indice];
    imagenPrincipal.alt = `${galeria.nombreProducto} - Imagen ${indice + 1}`;

    galeria.querySelectorAll(".gallery-dot").forEach((indicador, posicion) => {
        indicador.classList.toggle("active", posicion === indice);
    });
}


function configurarGaleria(tarjeta, producto) {
    const galeria = tarjeta.querySelector(".product-image");
    if (!galeria) return;

    const imagenes = obtenerImagenesProducto(producto);

    galeria.imagenes = imagenes;
    galeria.nombreProducto = producto.nombre || "Producto";
    galeria.indiceActual = 0;

    if (imagenes.length <= 1) return;

    galeria.querySelector(".gallery-prev")?.addEventListener("click", () => {
        cambiarImagenGaleria(galeria, galeria.indiceActual - 1);
    });

    galeria.querySelector(".gallery-next")?.addEventListener("click", () => {
        cambiarImagenGaleria(galeria, galeria.indiceActual + 1);
    });

    galeria.querySelectorAll(".gallery-dot").forEach(indicador => {
        indicador.addEventListener("click", () => {
            cambiarImagenGaleria(galeria, Number(indicador.dataset.index));
        });
    });
}


/* =========================================================
   5. INFORMACIÓN Y DETALLES DE PRODUCTOS
========================================================= */

function obtenerDetallesProducto(producto) {
    if (Array.isArray(producto.detalles)) {
        return producto.detalles.filter(Boolean).map(String);
    }
    if (Array.isArray(producto.detalle)) {
        return producto.detalle.filter(Boolean).map(String);
    }
    if (typeof producto.detalle === "string" && producto.detalle.trim()) {
        return producto.detalle
            .split(/\n|•|(?:\s-\s)/)
            .map(texto => texto.trim())
            .filter(Boolean);
    }
    return [];
}


/* =========================================================
   6. MODAL DE DETALLES
========================================================= */

function crearModalDetalles() {
    let overlay = document.getElementById("detalle-overlay");
    if (overlay) return overlay;

    overlay = document.createElement("div");
    overlay.id = "detalle-overlay";
    overlay.className = "detail-overlay";
    overlay.hidden = true;

    overlay.innerHTML = `
        <div class="detail-modal" role="dialog" aria-modal="true" aria-labelledby="detail-title">
            <button type="button" class="detail-close" aria-label="Cerrar detalles">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <span class="detail-category"></span>
            <h2 id="detail-title"></h2>
            <p class="detail-intro"></p>
            <div class="detail-content"></div>
            <button type="button" class="detail-accept">Entendido</button>
        </div>
    `;

    document.body.appendChild(overlay);

    overlay.querySelector(".detail-close").addEventListener("click", cerrarDetalleProducto);
    overlay.querySelector(".detail-accept").addEventListener("click", cerrarDetalleProducto);
    overlay.addEventListener("click", event => {
        if (event.target === overlay) cerrarDetalleProducto();
    });

    return overlay;
}


function mostrarDetalleProducto(id) {
    const producto = obtenerProductos().find(item => String(item.id) === String(id));
    if (!producto) return;

    const overlay = crearModalDetalles();

    overlay.querySelector(".detail-category").textContent = producto.categoria || "PRODUCTO";
    overlay.querySelector("#detail-title").textContent = producto.nombre || "Detalle del producto";
    overlay.querySelector(".detail-intro").textContent = producto.descripcion || "";

    const contenido = overlay.querySelector(".detail-content");
    contenido.replaceChildren();

    const detalles = obtenerDetallesProducto(producto);

    if (detalles.length) {
        const lista = document.createElement("ul");
        lista.className = "detail-list";
        detalles.forEach(detalle => {
            const elemento = document.createElement("li");
            elemento.textContent = detalle;
            lista.appendChild(elemento);
        });
        contenido.appendChild(lista);
    } else if (producto.descripcion) {
        const parrafo = document.createElement("p");
        parrafo.textContent = producto.descripcion;
        contenido.appendChild(parrafo);
    } else {
        const parrafo = document.createElement("p");
        parrafo.textContent = "No hay información adicional para este producto.";
        contenido.appendChild(parrafo);
    }

    overlay.hidden = false;
    document.body.classList.add("no-scroll");
    overlay.querySelector(".detail-close").focus();
}


function cerrarDetalleProducto() {
    const overlay = document.getElementById("detalle-overlay");
    if (overlay) overlay.hidden = true;

    if (!document.getElementById("carrito-overlay")?.classList.contains("show")) {
        document.body.classList.remove("no-scroll");
    }
}


/* =========================================================
   7. MOSTRAR PRODUCTOS
========================================================= */

function mostrarProductos(lista = obtenerProductos()) {
    const contenedor = document.getElementById("productos");
    if (!contenedor) return;

    contenedor.innerHTML = "";

    if (!lista.length) {
        contenedor.innerHTML = `
            <div class="no-results">
                <div class="no-results-icon"><i class="fa-solid fa-magnifying-glass"></i></div>
                <h3>No encontramos productos</h3>
                <p>Intenta realizar otra búsqueda o seleccionar otra marca.</p>
            </div>
        `;
        return;
    }

    lista.forEach(producto => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "product-card";

        const imagenes = obtenerImagenesProducto(producto);
        const tieneVariasImagenes = imagenes.length > 1;
        const imagenPrincipal = imagenes[0] || imagenPredeterminada;
        const disponible = producto.disponible === true;
        const detalles = obtenerDetallesProducto(producto);
        const tieneDetalles = Boolean(producto.descripcion) || detalles.length > 0;

        const estadoProducto = disponible
            ? `<span class="product-status available"><i class="fa-solid fa-circle-check"></i> DISPONIBLE</span>`
            : `<span class="product-status unavailable"><i class="fa-solid fa-circle-xmark"></i> AGOTADO</span>`;

        const galeria = `
            <div class="product-image">
                <img
                    class="product-main-image"
                    src="${escaparHTML(imagenPrincipal)}"
                    alt="${escaparHTML(producto.nombre || "Producto")}"
                    loading="lazy"
                    onerror="this.onerror=null;this.src='${imagenPredeterminada}'"
                >

                ${tieneVariasImagenes ? `
                    <button type="button" class="gallery-arrow gallery-prev" aria-label="Imagen anterior">
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <button type="button" class="gallery-arrow gallery-next" aria-label="Imagen siguiente">
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                    <div class="gallery-indicators">
                        ${imagenes.map((_, indice) => `
                            <button
                                type="button"
                                class="gallery-dot ${indice === 0 ? "active" : ""}"
                                data-index="${indice}"
                                aria-label="Ver imagen ${indice + 1}"
                            ></button>
                        `).join("")}
                    </div>
                ` : ""}

                ${estadoProducto}
                <span class="product-badge">${escaparHTML(producto.marca || "VEROLA")}</span>
            </div>
        `;

        const presentacion = producto.presentacion
            ? `<span class="product-presentation">${escaparHTML(producto.presentacion)}</span>`
            : "";

        const marca = producto.marca
            ? `<span class="product-brand">${escaparHTML(producto.marca)}</span>`
            : "";

        const botonDetalles = tieneDetalles
            ? `
                <button type="button" class="details-button" data-detail-id="${escaparHTML(producto.id)}">
                    Ver detalles <i class="fa-solid fa-arrow-right"></i>
                </button>
            `
            : "";

        const botonAgregar = disponible
            ? `
                <button type="button" class="add-button" data-add-id="${escaparHTML(producto.id)}">
                    <i class="fa-solid fa-plus"></i> Agregar
                </button>
            `
            : `
                <button type="button" class="add-button disabled" disabled>No disponible</button>
            `;

        tarjeta.innerHTML = `
            ${galeria}
            <div class="product-info">
                <span class="product-category">${escaparHTML(producto.categoria || "")}</span>
                ${presentacion}
                <h3>${escaparHTML(producto.nombre || "Producto")}</h3>
                ${marca}
                <p class="product-description"></p>
                ${botonDetalles}
                <div class="product-bottom">
                    ${mostrarPrecio(producto)}
                    ${botonAgregar}
                </div>
            </div>
        `;

        const descripcionElemento = tarjeta.querySelector(".product-description");
        const descripcion = String(producto.descripcion || "");
        descripcionElemento.textContent =
            descripcion.length > 115
                ? `${descripcion.slice(0, 115).trim()}...`
                : descripcion;

        contenedor.appendChild(tarjeta);

        configurarGaleria(tarjeta, producto);

        tarjeta.querySelector("[data-detail-id]")?.addEventListener("click", () => {
            mostrarDetalleProducto(producto.id);
        });

        tarjeta.querySelector("[data-add-id]")?.addEventListener("click", () => {
            agregarAlCarrito(producto.id);
        });
    });
}


/* =========================================================
   8. MOSTRAR MARCAS
========================================================= */

function mostrarMarcas() {
    const contenedor = document.getElementById("categorias");
    if (!contenedor) return;

    const marcas = [
        "Todas",
        ...new Set(
            obtenerProductos()
                .map(producto => producto.marca)
                .filter(Boolean)
        )
    ];

    contenedor.innerHTML = "";

    marcas.forEach(marca => {
        const boton = document.createElement("button");
        boton.type = "button";
        boton.textContent = marca === "Todas" ? "Todas las marcas" : marca;

        const activa = marca === "Todas"
            ? marcaActual === "TODAS"
            : normalizarMarca(marca) === marcaActual;

        boton.className = activa ? "category-button active" : "category-button";

        boton.addEventListener("click", () => {
            seleccionarMarca(marca);
        });

        contenedor.appendChild(boton);
    });
}


/* =========================================================
   9. SELECCIONAR MARCA
========================================================= */

function seleccionarMarca(marca) {
    marcaActual = marca === "Todas" ? "TODAS" : normalizarMarca(marca);

    const nuevaURL = marcaActual === "TODAS"
        ? "index.html"
        : `index.html?marca=${encodeURIComponent(marca)}`;

    window.history.pushState({}, "", nuevaURL);

    configurarVistaMarca();
    mostrarMarcas();
    filtrarProductos();

    document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });
}


window.addEventListener("popstate", () => {
    marcaActual = obtenerMarcaInicial();
    configurarVistaMarca();
    mostrarMarcas();
    filtrarProductos();
});


/* =========================================================
   10. BUSCADOR Y FILTROS
========================================================= */

function filtrarProductos() {
    const buscador = document.getElementById("buscador");
    const texto = (buscador?.value || "").toLocaleLowerCase("es-CO").trim();
    const todosLosProductos = obtenerProductos();

    const resultado = todosLosProductos.filter(producto => {
        const coincideMarca =
            marcaActual === "TODAS" ||
            normalizarMarca(producto.marca) === marcaActual;

        const detalles = obtenerDetallesProducto(producto).join(" ");
        const contenidoBusqueda = [
            producto.nombre,
            producto.descripcion,
            producto.marca,
            producto.presentacion,
            producto.categoria,
            detalles
        ]
            .filter(Boolean)
            .join(" ")
            .toLocaleLowerCase("es-CO");

        const coincideBusqueda = contenidoBusqueda.includes(texto);
        const visibleEnInicio =
            marcaActual !== "TODAS" ||
            texto !== "" ||
            producto.destacado === true;

        return coincideMarca && coincideBusqueda && visibleEnInicio;
    });

    mostrarProductos(resultado);
}


function buscarProductos() {
    filtrarProductos();
}


/* =========================================================
   11. AGREGAR PRODUCTOS AL CARRITO
========================================================= */

function agregarAlCarrito(id) {
    const producto = obtenerProductos().find(item => String(item.id) === String(id));

    if (!producto) {
        mostrarNotificacion("No se encontró el producto.");
        return;
    }

    if (producto.disponible !== true) {
        mostrarNotificacion("Este producto no está disponible.");
        return;
    }

    const existente = carrito.find(item => String(item.id) === String(id));

    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push({
            ...producto,
            precioFinal: obtenerPrecioFinal(producto),
            cantidad: 1
        });
    }

    actualizarCarrito();
    mostrarNotificacion(
        `${producto.nombre}${producto.presentacion ? ` (${producto.presentacion})` : ""} fue agregado al pedido.`
    );
}


/* =========================================================
   12. ACTUALIZAR CARRITO
========================================================= */

function actualizarCarrito() {
    const contenedor = document.getElementById("carrito-productos");
    const contador = document.getElementById("contador-carrito");
    const totalElemento = document.getElementById("carrito-total");

    if (!contenedor || !contador || !totalElemento) return;

    contenedor.innerHTML = "";
    let cantidadTotal = 0;
    let total = 0;

    carrito.forEach(producto => {
        cantidadTotal += producto.cantidad;
        const precioFinal = Number(producto.precioFinal) || 0;
        const subtotal = precioFinal * producto.cantidad;
        total += subtotal;

        const imagen = producto.imagen || obtenerImagenesProducto(producto)[0] || imagenPredeterminada;

        const elemento = document.createElement("div");
        elemento.className = "cart-item";

        elemento.innerHTML = `
            <img src="${escaparHTML(imagen)}" alt="${escaparHTML(producto.nombre)}" onerror="this.onerror=null;this.src='${imagenPredeterminada}'">
            <div class="cart-item-info">
                <h4>${escaparHTML(producto.nombre)}</h4>
                ${producto.marca ? `<small>${escaparHTML(producto.marca)}</small>` : ""}
                ${producto.presentacion ? `<span class="cart-presentation">Presentación: ${escaparHTML(producto.presentacion)}</span>` : ""}
                ${tieneDescuento(producto)
                    ? `
                        <div class="cart-prices">
                            <span class="cart-price-original">${formatearPrecio(producto.precio)}</span>
                            <strong class="cart-price-final">${formatearPrecio(precioFinal)}</strong>
                        </div>
                    `
                    : `<strong>${formatearPrecio(precioFinal)}</strong>`
                }
                <div class="quantity">
                    <button type="button" data-quantity-id="${escaparHTML(producto.id)}" data-change="-1" aria-label="Disminuir cantidad">−</button>
                    <span>${producto.cantidad}</span>
                    <button type="button" data-quantity-id="${escaparHTML(producto.id)}" data-change="1" aria-label="Aumentar cantidad">+</button>
                </div>
            </div>
            <button type="button" class="remove-button" data-remove-id="${escaparHTML(producto.id)}" aria-label="Eliminar producto">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        `;

        contenedor.appendChild(elemento);
    });

    contador.textContent = cantidadTotal;
    totalElemento.textContent = formatearPrecio(total);

    if (carrito.length === 0) {
        contenedor.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon"><i class="fa-solid fa-cart-shopping"></i></div>
                <h3>Tu pedido está vacío</h3>
                <p>Agrega productos del catálogo para comenzar.</p>
            </div>
        `;
    }

    contenedor.querySelectorAll("[data-quantity-id]").forEach(boton => {
        boton.addEventListener("click", () => {
            cambiarCantidad(boton.dataset.quantityId, Number(boton.dataset.change));
        });
    });

    contenedor.querySelectorAll("[data-remove-id]").forEach(boton => {
        boton.addEventListener("click", () => {
            eliminarDelCarrito(boton.dataset.removeId);
        });
    });
}


/* =========================================================
   13. CAMBIAR CANTIDADES
========================================================= */

function cambiarCantidad(id, cambio) {
    const producto = carrito.find(item => String(item.id) === String(id));
    if (!producto) return;

    producto.cantidad += cambio;

    if (producto.cantidad <= 0) {
        eliminarDelCarrito(id);
        return;
    }

    actualizarCarrito();
}


/* =========================================================
   14. ELIMINAR PRODUCTOS
========================================================= */

function eliminarDelCarrito(id) {
    carrito = carrito.filter(producto => String(producto.id) !== String(id));
    actualizarCarrito();
    mostrarNotificacion("Producto eliminado del pedido.");
}


/* =========================================================
   15. VACIAR CARRITO
========================================================= */

function vaciarCarrito() {
    if (carrito.length === 0) {
        mostrarNotificacion("El pedido ya está vacío.");
        return;
    }
    carrito = [];
    actualizarCarrito();
    mostrarNotificacion("El pedido fue vaciado.");
}


/* =========================================================
   16. ABRIR Y CERRAR CARRITO
========================================================= */

function abrirCarrito() {
    const overlay = document.getElementById("carrito-overlay");
    if (!overlay) return;

    overlay.classList.add("show");
    document.body.classList.add("no-scroll");
    overlay.querySelector(".close-cart")?.focus();
}


function cerrarCarrito(event) {
    if (event && event.target !== event.currentTarget) return;

    const overlay = document.getElementById("carrito-overlay");
    if (!overlay) return;

    overlay.classList.remove("show");
    const modalDetalle = document.getElementById("detalle-overlay");

    if (!modalDetalle || modalDetalle.hidden) {
        document.body.classList.remove("no-scroll");
    }
}


/* =========================================================
   17. WHATSAPP: ASESORÍA
========================================================= */

function abrirWhatsApp(mensaje) {
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank", "noopener,noreferrer");
}


function solicitarAsesoriasWhatsApp() {
    const mensaje =
    "Hola. Bienvenido a Verola Capilar!!. 👋\n\n" +

    "Distribuidora capilar de marcas colombianas, " +
    "Aqui encontraras todo lo que tu cabello necesita para lucir radiante.\n\n" +

    "Quisiera recibir información sobre los productos, precios, disponibilidad y formas de entrega.";
    abrirWhatsApp(mensaje);
}


/* =========================================================
   18. WHATSAPP: ENVIAR PEDIDO
========================================================= */

function enviarPedidoWhatsApp() {
    if (carrito.length === 0) {
        mostrarNotificacion("Agrega al menos un producto al pedido.");
        return;
    }

    let mensaje = "Hola, VEROLA CAPILAR. 👋\n\nQuiero solicitar el siguiente pedido:\n\n";
    let total = 0;

    carrito.forEach(producto => {
        const precioFinal = Number(producto.precioFinal) || 0;
        const subtotal = precioFinal * producto.cantidad;
        total += subtotal;

        mensaje += `• ${producto.nombre}\n`;
        if (producto.marca) mensaje += `  Marca: ${producto.marca}\n`;
        if (producto.presentacion) mensaje += `  Presentación: ${producto.presentacion}\n`;
        mensaje += `  Cantidad: ${producto.cantidad}\n`;

        if (tieneDescuento(producto)) {
            mensaje += `  Precio original: ${formatearPrecio(producto.precio)}\n`;
            mensaje += `  Precio con descuento: ${formatearPrecio(precioFinal)}\n`;
        } else {
            mensaje += `  Precio: ${formatearPrecio(precioFinal)}\n`;
        }

        mensaje += `  Subtotal: ${formatearPrecio(subtotal)}\n\n`;
    });

    mensaje += `Total aproximado: ${formatearPrecio(total)}\n\n`;
    mensaje += "Quisiera confirmar disponibilidad, formas de pago y entrega.";

    abrirWhatsApp(mensaje);
}


/* =========================================================
   19. NOTIFICACIONES
========================================================= */

function mostrarNotificacion(texto) {
    const notificacion = document.createElement("div");
    notificacion.className = "notification";
    notificacion.textContent = texto;

    document.body.appendChild(notificacion);

    requestAnimationFrame(() => {
        notificacion.classList.add("show");
    });

    setTimeout(() => {
        notificacion.classList.remove("show");
        setTimeout(() => {
            notificacion.remove();
        }, 300);
    }, 2500);
}


/* =========================================================
   20. FUNCIONES DEL FOOTER
========================================================= */

function actualizarAnioFooter() {
    const elemento = document.getElementById("footer-year");
    if (elemento) {
        elemento.textContent = new Date().getFullYear();
    }
}


function volverAlInicio() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function navegarFooter(seccion) {
    document.querySelector(seccion)?.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* =========================================================
   21. EVENTOS DE TECLADO
========================================================= */

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        cerrarCarrito();
        cerrarDetalleProducto();
    }
});


/* =========================================================
   22. INICIALIZACIÓN DE LA PÁGINA
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    configurarVistaMarca();
    mostrarMarcas();
    filtrarProductos();
    actualizarCarrito();
    actualizarAnioFooter();

    const buscador = document.getElementById("buscador");
    if (buscador && marcaActual !== "TODAS") {
        buscador.placeholder = `Buscar productos de ${marcaActual}...`;
    }

    crearModalDetalles();
});

/* =========================================================
   FIN DEL SISTEMA VEROLA CAPILAR
========================================================= */