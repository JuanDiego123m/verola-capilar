/* =========================================================
   VEROLA CAPILAR
   MÓDULO INTERACTIVO: ARMA TU KIT EN 3 PASOS
========================================================= */

(function () {
    const kitState = {
        pasoActual: 1,
        filtroMarca: "TODAS",
        pasos: {
            1: {
                titulo: "1. Fase de Limpieza",
                subtitulo: "Elige el shampoo ideal para tu tipo de raíz y necesidad capilar",
                icono: "🧴",
                filtro: p => normalizarCategoria(p.categoria) === "Shampoos",
                seleccionado: null
            },
            2: {
                titulo: "2. Fase de Nutrición",
                subtitulo: "Selecciona una mascarilla, tratamiento o acondicionador para reparar tu fibra",
                icono: "🥑",
                filtro: p => ["Tratamientos", "Mascarillas", "Acondicionadores"].includes(normalizarCategoria(p.categoria)),
                seleccionado: null
            },
            3: {
                titulo: "3. Fase de Protección y Brillo",
                subtitulo: "Elige un termoprotector, óleo capilar o perfume para sellar y dar brillo",
                icono: "✨",
                filtro: p => ["Finalizadores", "Perfumes", "Keratinas"].includes(normalizarCategoria(p.categoria)),
                seleccionado: null
            }
        }
    };

    function obtenerProductosValidos() {
        if (typeof obtenerProductos === "function") {
            return obtenerProductos();
        }
        return Array.isArray(window.productos) ? window.productos : [];
    }

    function inicializarKitBuilder() {
        const contenedor = document.getElementById("arma-tu-kit");
        if (!contenedor) return;

        renderizarEstructuraBase(contenedor);
        renderizarPaso();
        actualizarResumenKit();
    }

    function renderizarEstructuraBase(contenedor) {
        contenedor.innerHTML = `
            <div class="container">
                <div class="kit-builder-header">
                    <span class="section-eyebrow">PERSONALIZA TU RUTINA</span>
                    <h2>Arma tu <span>Kit en 3 Pasos</span></h2>
                    <p>
                        Diseña tu rutina capilar completa: selecciona tu producto de limpieza,
                        nutrición y protección favorito de nuestras marcas colombianas.
                    </p>
                </div>

                <!-- Indicador de pasos -->
                <div class="kit-stepper" id="kit-stepper">
                    <button type="button" class="kit-step-btn active" data-step="1">
                        <span class="step-number">1</span>
                        <span>Limpieza (Shampoo)</span>
                    </button>
                    <button type="button" class="kit-step-btn" data-step="2">
                        <span class="step-number">2</span>
                        <span>Nutrición (Tratamiento)</span>
                    </button>
                    <button type="button" class="kit-step-btn" data-step="3">
                        <span class="step-number">3</span>
                        <span>Protección y Brillo</span>
                    </button>
                </div>

                <!-- Grid principal interactivo -->
                <div class="kit-builder-grid">

                    <!-- Columna izquierda: Opciones de productos -->
                    <div class="kit-selector-card">
                        <div class="kit-step-header">
                            <div class="kit-step-header-info">
                                <h3 id="kit-step-title">Paso 1</h3>
                                <p id="kit-step-desc">Descripción del paso</p>
                            </div>
                            <div class="kit-brand-filters" id="kit-brand-filters">
                                <!-- Marcas dinámicas -->
                            </div>
                        </div>

                        <div class="kit-options-grid" id="kit-options-grid">
                            <!-- Productos disponibles del paso -->
                        </div>
                    </div>

                    <!-- Columna derecha: Caja / Resumen del Kit -->
                    <aside class="kit-summary-card">
                        <div class="kit-summary-header">
                            <h3>🛍️ Tu Kit Capilar</h3>
                            <span class="kit-summary-badge" id="kit-status-badge">0 de 3 listos</span>
                        </div>

                        <div class="kit-slots">
                            <!-- Slot 1 -->
                            <div class="kit-slot" id="kit-slot-1" onclick="window.cambiarPasoKit(1)">
                                <div class="kit-slot-icon">🧴</div>
                                <div class="kit-slot-info">
                                    <span class="kit-slot-label">Paso 1: Limpieza</span>
                                    <div class="kit-slot-name">Elige un Shampoo</div>
                                    <div class="kit-slot-price">Pendiente</div>
                                </div>
                            </div>

                            <!-- Slot 2 -->
                            <div class="kit-slot" id="kit-slot-2" onclick="window.cambiarPasoKit(2)">
                                <div class="kit-slot-icon">🥑</div>
                                <div class="kit-slot-info">
                                    <span class="kit-slot-label">Paso 2: Nutrición</span>
                                    <div class="kit-slot-name">Elige una Mascarilla</div>
                                    <div class="kit-slot-price">Pendiente</div>
                                </div>
                            </div>

                            <!-- Slot 3 -->
                            <div class="kit-slot" id="kit-slot-3" onclick="window.cambiarPasoKit(3)">
                                <div class="kit-slot-icon">✨</div>
                                <div class="kit-slot-info">
                                    <span class="kit-slot-label">Paso 3: Protección</span>
                                    <div class="kit-slot-name">Elige un Termoprotector</div>
                                    <div class="kit-slot-price">Pendiente</div>
                                </div>
                            </div>
                        </div>

                        <!-- Total del Kit -->
                        <div class="kit-total-box">
                            <div class="kit-total-row">
                                <span>Total del kit:</span>
                                <span id="kit-subtotal-price">$0</span>
                            </div>
                            <div class="kit-total-row final">
                                <span>Total a pagar:</span>
                                <strong id="kit-total-price">$0</strong>
                            </div>
                        </div>

                        <!-- Botón para añadir todo al pedido -->
                        <button type="button" class="kit-add-btn" id="kit-add-btn" disabled onclick="window.agregarKitAlCarrito()">
                            <span>Completa los 3 pasos</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>

                        <button type="button" class="kit-reset-btn" onclick="window.reiniciarKit()">
                            <i class="fa-solid fa-rotate-left"></i> Reiniciar kit
                        </button>
                    </aside>

                </div>
            </div>
        `;

        // Asignar listeners a los botones del stepper
        contenedor.querySelectorAll(".kit-step-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const paso = Number(btn.dataset.step);
                cambiarPasoKit(paso);
            });
        });
    }

    function cambiarPasoKit(nuevoPaso) {
        if (nuevoPaso < 1 || nuevoPaso > 3) return;
        kitState.pasoActual = nuevoPaso;
        kitState.filtroMarca = "TODAS";
        renderizarPaso();
    }

    function renderizarPaso() {
        const paso = kitState.pasoActual;
        const info = kitState.pasos[paso];

        // 1. Actualizar títulos
        const titleEl = document.getElementById("kit-step-title");
        const descEl = document.getElementById("kit-step-desc");
        if (titleEl) titleEl.textContent = info.titulo;
        if (descEl) descEl.textContent = info.subtitulo;

        // 2. Actualizar stepper visual
        document.querySelectorAll(".kit-step-btn").forEach(btn => {
            const num = Number(btn.dataset.step);
            btn.classList.toggle("active", num === paso);
            btn.classList.toggle("completed", kitState.pasos[num].seleccionado !== null);
        });

        // 3. Filtrar productos para este paso
        const todos = obtenerProductosValidos();
        let productosDelPaso = todos.filter(info.filtro);

        // 4. Renderizar filtros de marcas disponibles para este paso
        const marcasUnicas = ["TODAS", ...new Set(productosDelPaso.map(p => p.marca).filter(Boolean))];
        const brandContainer = document.getElementById("kit-brand-filters");
        if (brandContainer) {
            brandContainer.innerHTML = "";
            marcasUnicas.forEach(m => {
                const btn = document.createElement("button");
                btn.type = "button";
                btn.className = (kitState.filtroMarca === m) ? "kit-brand-btn active" : "kit-brand-btn";
                btn.textContent = (m === "TODAS") ? "Todas las marcas" : m;
                btn.addEventListener("click", () => {
                    kitState.filtroMarca = m;
                    renderizarPaso();
                });
                brandContainer.appendChild(btn);
            });
        }

        // Aplicar filtro de marca si está activo
        if (kitState.filtroMarca !== "TODAS") {
            productosDelPaso = productosDelPaso.filter(p => p.marca === kitState.filtroMarca);
        }

        // 5. Renderizar cuadrícula de opciones
        const optionsGrid = document.getElementById("kit-options-grid");
        if (!optionsGrid) return;
        optionsGrid.innerHTML = "";

        const seleccionadoActual = info.seleccionado;

        productosDelPaso.forEach(producto => {
            const card = document.createElement("article");
            const esSeleccionado = seleccionadoActual && String(seleccionadoActual.id) === String(producto.id);
            card.className = esSeleccionado ? "kit-option-item selected" : "kit-option-item";

            const imagen = producto.imagen || (producto.imagenes && producto.imagenes[0]) || imagenPredeterminada;
            const precioFinal = typeof obtenerPrecioFinal === "function" ? obtenerPrecioFinal(producto) : producto.precio;
            const precioFormateado = typeof formatearPrecio === "function" ? formatearPrecio(precioFinal) : `$${precioFinal}`;

            card.innerHTML = `
                <span class="kit-option-badge">${escaparHTML(producto.marca || "VEROLA")}</span>
                <span class="kit-option-check"><i class="fa-solid fa-check"></i></span>
                <img src="${escaparHTML(imagen)}" alt="${escaparHTML(producto.nombre)}" class="kit-option-img" onerror="this.onerror=null;this.src='${imagenPredeterminada}'">
                <h4>${escaparHTML(producto.nombre)}</h4>
                <div class="kit-option-details">
                    <span class="kit-option-presentation">${escaparHTML(producto.presentacion || "")}</span>
                    <strong class="kit-option-price">${precioFormateado}</strong>
                </div>
            `;

            card.addEventListener("click", () => {
                seleccionarProductoEnPaso(paso, producto);
            });

            optionsGrid.appendChild(card);
        });
    }

    function seleccionarProductoEnPaso(paso, producto) {
        kitState.pasos[paso].seleccionado = producto;

        // Feedback sonoro/visual y avanzar automáticamente al siguiente paso incompleto
        actualizarResumenKit();
        renderizarPaso();

        if (paso < 3 && kitState.pasos[paso + 1].seleccionado === null) {
            setTimeout(() => {
                cambiarPasoKit(paso + 1);
            }, 300);
        }
    }

    function removerProductoDePaso(paso, event) {
        if (event) event.stopPropagation();
        kitState.pasos[paso].seleccionado = null;
        actualizarResumenKit();
        renderizarPaso();
    }

    function reiniciarKit() {
        kitState.pasos[1].seleccionado = null;
        kitState.pasos[2].seleccionado = null;
        kitState.pasos[3].seleccionado = null;
        kitState.pasoActual = 1;
        kitState.filtroMarca = "TODAS";
        actualizarResumenKit();
        renderizarPaso();
        if (typeof mostrarNotificacion === "function") {
            mostrarNotificacion("Kit reiniciado. ¡Elige tus 3 productos favoritos!");
        }
    }

    function actualizarResumenKit() {
        let total = 0;
        let count = 0;

        [1, 2, 3].forEach(paso => {
            const slotEl = document.getElementById(`kit-slot-${paso}`);
            const item = kitState.pasos[paso].seleccionado;

            if (!slotEl) return;

            if (item) {
                count++;
                const precio = typeof obtenerPrecioFinal === "function" ? obtenerPrecioFinal(item) : item.precio;
                total += precio;

                const imagen = item.imagen || (item.imagenes && item.imagenes[0]) || imagenPredeterminada;
                const precioTexto = typeof formatearPrecio === "function" ? formatearPrecio(precio) : `$${precio}`;

                slotEl.className = "kit-slot filled";
                slotEl.innerHTML = `
                    <div class="kit-slot-icon">
                        <img src="${escaparHTML(imagen)}" alt="${escaparHTML(item.nombre)}" onerror="this.onerror=null;this.src='${imagenPredeterminada}'">
                    </div>
                    <div class="kit-slot-info">
                        <span class="kit-slot-label">${kitState.pasos[paso].titulo}</span>
                        <div class="kit-slot-name">${escaparHTML(item.nombre)}</div>
                        <div class="kit-slot-price">${precioTexto}</div>
                    </div>
                    <button type="button" class="kit-slot-remove" onclick="window.removerProductoDeKit(${paso}, event)" title="Quitar del kit">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                `;
            } else {
                const placeholderNames = {
                    1: "Elige tu Shampoo",
                    2: "Elige tu Mascarilla o Tratamiento",
                    3: "Elige tu Termoprotector o Óleo"
                };

                slotEl.className = "kit-slot";
                slotEl.innerHTML = `
                    <div class="kit-slot-icon">${kitState.pasos[paso].icono}</div>
                    <div class="kit-slot-info">
                        <span class="kit-slot-label">${kitState.pasos[paso].titulo}</span>
                        <div class="kit-slot-name">${placeholderNames[paso]}</div>
                        <div class="kit-slot-price">Haz clic para elegir</div>
                    </div>
                `;
            }
        });

        // Actualizar totales y badges
        const badgeEl = document.getElementById("kit-status-badge");
        if (badgeEl) {
            badgeEl.textContent = `${count} de 3 listos`;
            badgeEl.style.background = count === 3 ? "var(--verde-oscuro)" : "var(--rosa-muy-claro)";
            badgeEl.style.color = count === 3 ? "#ffffff" : "var(--rosa-oscuro)";
        }

        const totalTexto = typeof formatearPrecio === "function" ? formatearPrecio(total) : `$${total}`;
        const subtotalEl = document.getElementById("kit-subtotal-price");
        const totalEl = document.getElementById("kit-total-price");
        if (subtotalEl) subtotalEl.textContent = totalTexto;
        if (totalEl) totalEl.textContent = totalTexto;

        const addBtn = document.getElementById("kit-add-btn");
        if (addBtn) {
            if (count === 3) {
                addBtn.disabled = false;
                addBtn.innerHTML = `
                    <span>¡Agregar Kit Completo al Pedido!</span>
                    <i class="fa-solid fa-bag-shopping"></i>
                `;
            } else {
                addBtn.disabled = true;
                addBtn.innerHTML = `
                    <span>Completa los 3 pasos (${count}/3)</span>
                    <i class="fa-solid fa-arrow-right"></i>
                `;
            }
        }
    }

    function agregarKitAlCarrito() {
        const item1 = kitState.pasos[1].seleccionado;
        const item2 = kitState.pasos[2].seleccionado;
        const item3 = kitState.pasos[3].seleccionado;

        if (!item1 || !item2 || !item3) return;

        // Añadir cada producto al carrito
        [item1, item2, item3].forEach(producto => {
            if (typeof agregarAlCarrito === "function") {
                agregarAlCarrito(producto.id);
            }
        });

        if (typeof mostrarNotificacion === "function") {
            mostrarNotificacion("🎉 ¡Tu Kit Personalizado de 3 pasos fue agregado al pedido!");
        }

        if (typeof abrirCarrito === "function") {
            setTimeout(() => {
                abrirCarrito();
            }, 600);
        }
    }

    // Exponer funciones globales para interacción inline en HTML
    window.cambiarPasoKit = cambiarPasoKit;
    window.removerProductoDeKit = removerProductoDePaso;
    window.reiniciarKit = reiniciarKit;
    window.agregarKitAlCarrito = agregarKitAlCarrito;
    window.inicializarKitBuilder = inicializarKitBuilder;

    // Inicializar al cargar el DOM
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", inicializarKitBuilder);
    } else {
        inicializarKitBuilder();
    }
})();
