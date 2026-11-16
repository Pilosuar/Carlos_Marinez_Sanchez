/* ============================================================
   TERRAMAR - Animaciones e interacciones (carpeta static)
   Se exporta initAnimaciones() y se ejecuta en cada cambio de
   ruta desde pages/_app.js (navegación del lado del cliente)
   ============================================================ */

var observers = [];
var globalesListos = false;

function alCargar(fn) {
  if (typeof document === "undefined") return;
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fn);
  } else {
    fn();
  }
}

function alScroll() {
  var navbar = document.querySelector(".navbar");
  if (!navbar) return;
  if (window.scrollY > 40) {
    navbar.classList.add("navbar-fijo");
  } else {
    navbar.classList.remove("navbar-fijo");
  }
}

function configurarNavbar() {
  var burger = document.querySelector(".nav-burger");
  var enlaces = document.querySelector(".nav-enlaces");

  if (burger && enlaces) {
    burger.addEventListener("click", function () {
      burger.classList.toggle("abierto");
      enlaces.classList.toggle("abierto");
    });
    enlaces.addEventListener("click", function (e) {
      if (e.target && e.target.tagName === "A") {
        burger.classList.remove("abierto");
        enlaces.classList.remove("abierto");
      }
    });
  }

  // Resaltar el enlace de la página actual
  var ruta = (window.location.pathname || "/").replace(/\/$/, "") || "/";
  document.querySelectorAll(".nav-enlaces a").forEach(function (a) {
    var href = (a.getAttribute("href") || "").replace(/\/$/, "") || "/";
    a.classList.toggle("activo", href === ruta);
  });
}

function configurarRevelados() {
  var revelables = document.querySelectorAll(
    ".revelar, .revelar-izquierda, .revelar-derecha"
  );

  if (!("IntersectionObserver" in window)) {
    revelables.forEach(function (el) {
      el.classList.add("visible");
    });
    return;
  }

  var observador = new IntersectionObserver(
    function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visible");
          observador.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  revelables.forEach(function (el, i) {
    el.style.transitionDelay = (i % 6) * 80 + "ms";
    observador.observe(el);
  });
  observers.push(observador);
}

function configurarContadores() {
  var contadores = document.querySelectorAll("[data-contador]");
  if (!contadores.length) return;

  function animarContador(el) {
    var meta = parseInt(el.getAttribute("data-contador"), 10) || 0;
    var inicio = null;
    var duracion = 1400;
    function paso(t) {
      if (!inicio) inicio = t;
      var prog = Math.min((t - inicio) / duracion, 1);
      var suave = 1 - Math.pow(1 - prog, 3);
      el.textContent = Math.round(meta * suave);
      if (prog < 1) requestAnimationFrame(paso);
    }
    requestAnimationFrame(paso);
  }

  if ("IntersectionObserver" in window) {
    var obs = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (entrada) {
          if (entrada.isIntersecting) {
            animarContador(entrada.target);
            obs.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    contadores.forEach(function (el) {
      el.textContent = "0";
      obs.observe(el);
    });
    observers.push(obs);
  } else {
    contadores.forEach(animarContador);
  }
}

function configurarBarras() {
  var barras = document.querySelectorAll(".barra span[data-valor]");
  if (!barras.length) return;

  function llenar() {
    barras.forEach(function (b) {
      b.style.width = b.getAttribute("data-valor") + "%";
    });
  }

  if ("IntersectionObserver" in window) {
    var zona = document.querySelector(".lista-habilidades");
    if (!zona) {
      llenar();
      return;
    }
    var obs = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (entrada) {
          if (entrada.isIntersecting) {
            llenar();
            obs.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    obs.observe(zona);
    observers.push(obs);
  } else {
    llenar();
  }
}

function configurarCatalogo() {
  var input = document.getElementById("buscador");
  if (!input) return;

  var tarjetas = Array.prototype.slice.call(
    document.querySelectorAll(".tarjeta")
  );
  var botones = document.querySelectorAll(".filtro");
  var vacio = document.querySelector(".vacio");
  var categoriaActual = "todos";

  function aplicarFiltros() {
    var texto = (input.value || "").toLowerCase().trim();
    var visibles = 0;

    tarjetas.forEach(function (t) {
      var coincideTexto =
        !texto || (t.textContent || "").toLowerCase().indexOf(texto) !== -1;
      var coincideCat =
        categoriaActual === "todos" ||
        t.getAttribute("data-categoria") === categoriaActual;
      var mostrar = coincideTexto && coincideCat;
      t.classList.toggle("oculta", !mostrar);
      if (mostrar) visibles++;
    });

    if (vacio) vacio.classList.toggle("visible", visibles === 0);
  }

  input.addEventListener("input", aplicarFiltros);

  botones.forEach(function (btn) {
    btn.addEventListener("click", function () {
      botones.forEach(function (b) {
        b.classList.remove("activo");
      });
      btn.classList.add("activo");
      categoriaActual = btn.getAttribute("data-filtro") || "todos";
      aplicarFiltros();
    });
  });
}

function configurarBotones() {
  document.querySelectorAll(".btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (!btn.animate) return;
      btn.animate(
        [
          { transform: "scale(1)" },
          { transform: "scale(0.9)" },
          { transform: "scale(1.05)" },
          { transform: "scale(1)" },
        ],
        { duration: 320, easing: "ease-out" }
      );
    });
  });
}

export function initAnimaciones() {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  alCargar(function () {
    // Desconectar observers de la página anterior
    observers.forEach(function (o) {
      try {
        o.disconnect();
      } catch (e) {}
    });
    observers = [];

    // Listeners globales: solo una vez
    if (!globalesListos) {
      window.addEventListener("scroll", alScroll, { passive: true });
      globalesListos = true;
    }

    // Configuración de la página actual
    configurarNavbar();
    alScroll();
    configurarRevelados();
    configurarContadores();
    configurarBarras();
    configurarCatalogo();
    configurarBotones();
  });
}

export default initAnimaciones;
