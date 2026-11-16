import Navbar from "../components/Navbar";

const productos = [
  {
    id: 1,
    nombre: "Camiseta Ola Marina",
    categoria: "ropa",
    precio: "$399",
    icono: "👕",
    bg: "bg-1",
    desc: "Camiseta de algodón 100% con estampado de olas, suave y fresca para el día a día.",
  },
  {
    id: 2,
    nombre: "Gorra Costa Azul",
    categoria: "ropa",
    precio: "$249",
    icono: "🧢",
    bg: "bg-2",
    desc: "Gorra ajustable con bordado de ancla y visera curva, protección solar incluida.",
  },
  {
    id: 3,
    nombre: "Termo Horizonte",
    categoria: "hogar",
    precio: "$549",
    icono: "🥤",
    bg: "bg-3",
    desc: "Termo de acero inoxidable 750 ml, mantiene tu bebida fría por 12 horas o caliente por 8.",
  },
  {
    id: 4,
    nombre: "Mochila Ruta del Mar",
    categoria: "accesorios",
    precio: "$799",
    icono: "🎒",
    bg: "bg-4",
    desc: "Mochila impermeable con compartimento para laptop de 15\", ideal para viajes.",
  },
  {
    id: 5,
    nombre: "Cuaderno Faro",
    categoria: "papeleria",
    precio: "$179",
    icono: "📓",
    bg: "bg-5",
    desc: "Cuaderno de 200 páginas con portada rígida y papel de alta calidad.",
  },
  {
    id: 6,
    nombre: "Lámpara Arena",
    categoria: "hogar",
    precio: "$620",
    icono: "💡",
    bg: "bg-6",
    desc: "Lámpara de mesa con luz cálida regulable y base de madera natural.",
  },
  {
    id: 7,
    nombre: "Reloj Marea",
    categoria: "accesorios",
    precio: "$1,150",
    icono: "⌚",
    bg: "bg-1",
    desc: "Reloj analógico resistente al agua con correa de cuero genuino.",
  },
  {
    id: 8,
    nombre: "Sudadera Brisa",
    categoria: "ropa",
    precio: "$690",
    icono: "🧥",
    bg: "bg-4",
    desc: "Sudadera con capucha, forro interior abrigador y bolsillo canguro.",
  },
  {
    id: 9,
    nombre: "Set de Tazas Puerto",
    categoria: "hogar",
    precio: "$450",
    icono: "☕",
    bg: "bg-2",
    desc: "Set de 4 tazas de cerámica con diseños inspirados en puertos pesqueros.",
  },
];

const filtros = [
  { id: "todos", label: "Todos" },
  { id: "ropa", label: "Ropa" },
  { id: "hogar", label: "Hogar" },
  { id: "accesorios", label: "Accesorios" },
  { id: "papeleria", label: "Papelería" },
];

export default function Catalogo() {
  return (
    <>
      <Navbar />

      <main className="pagina">
        <section className="encabezado revelar">
          <span className="etiqueta">Catálogo</span>
          <h2>Descubre nuestros productos</h2>
          <p>
            Explora la colección completa de TERRAMAR. Usa la búsqueda o los
            filtros por categoría para encontrar exactamente lo que necesitas.
          </p>
        </section>

        <section className="barra-herramientas revelar">
          <div className="buscador">
            <input
              id="buscador"
              type="text"
              placeholder="Buscar producto, categoría o precio..."
            />
          </div>
          <div className="filtros">
            {filtros.map((f) => (
              <button
                key={f.id}
                className={`filtro${f.id === "todos" ? " activo" : ""}`}
                data-filtro={f.id}
              >
                {f.label}
              </button>
            ))}
          </div>
        </section>

        <section className="rejilla">
          {productos.map((p, i) => (
            <article
              key={p.id}
              className={`tarjeta revelar ${i % 2 ? "revelar-derecha" : "revelar-izquierda"}`}
              data-categoria={p.categoria}
            >
              <div className={`tarjeta-imagen ${p.bg}`}>{p.icono}</div>
              <div className="tarjeta-cuerpo">
                <span className="categoria">{p.categoria}</span>
                <h3>{p.nombre}</h3>
                <p>{p.desc}</p>
                <div className="tarjeta-pie">
                  <span className="precio">{p.precio}</span>
                  <button className="btn">Ver detalle</button>
                </div>
              </div>
            </article>
          ))}
        </section>

        <p className="vacio">No se encontraron productos con esa búsqueda 😕</p>
      </main>

      <footer className="pie">
        <p>
          <strong>TERRAMAR</strong> © {new Date().getFullYear()} — Carlos
          Matínez Sánchez · Catálogo informativo
        </p>
      </footer>
    </>
  );
}
