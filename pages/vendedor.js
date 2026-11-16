import Navbar from "../components/Navbar";

const habilidades = [
  { nombre: "Atención al cliente", valor: 95 },
  { nombre: "Conocimiento de productos", valor: 90 },
  { nombre: "Ventas y negociación", valor: 88 },
  { nombre: "Organización y logística", valor: 82 },
  { nombre: "Atención bilingüe (ES/EN)", valor: 75 },
];

const estadisticas = [
  { num: 8, lbl: "Años de experiencia" },
  { num: 1250, lbl: "Clientes atendidos" },
  { num: 320, lbl: "Productos en catálogo" },
  { num: 98, lbl: "Satisfacción %" },
];

const experiencia = [
  {
    anio: "2023 - Actualidad",
    titulo: "Vendedor senior — TERRAMAR",
    desc: "Responsable del catálogo, atención a clientes y seguimiento de pedidos.",
  },
  {
    anio: "2019 - 2023",
    titulo: "Vendedor de piso — Comercial del Puerto",
    desc: "Atención en mostrador, inventario y cierre de ventas mensuales.",
  },
  {
    anio: "2016 - 2019",
    titulo: "Asistente de tienda — Retail Bahía",
    desc: "Apoyo en reposición, cobro y recepción de mercancía.",
  },
];

export default function Vendedor() {
  return (
    <>
      <Navbar />

      <main className="pagina">
        <section className="encabezado revelar">
          <span className="etiqueta">Información personal</span>
          <h2>Conoce a tu vendedor</h2>
          <p>
            Todo lo que necesitas saber sobre quien te atiende: datos de
            contacto, experiencia profesional y habilidades.
          </p>
        </section>

        <section className="vendedor">
          <aside className="perfil revelar-izquierda">
            <div className="perfil-cabecera">
              <div className="avatar">👨‍💼</div>
            </div>
            <div className="perfil-cuerpo">
              <h3>Carlos Matínez Sánchez</h3>
              <span className="rol">Vendedor certificado</span>

              <div className="datos">
                <div className="dato">
                  <span className="ico">📍</span>
                  <span>Av. Costera 214, Puerto TERRAMAR</span>
                </div>
                <div className="dato">
                  <span className="ico">📞</span>
                  <a href="tel:+525512345678">+52 55 1234 5678</a>
                </div>
                <div className="dato">
                  <span className="ico">✉️</span>
                  <a href="mailto:carlos.matinez@terramar.com">
                    carlos.matinez@terramar.com
                  </a>
                </div>
                <div className="dato">
                  <span className="ico">🕐</span>
                  <span>Lun a Vie: 9:00 - 18:00</span>
                </div>
                <div className="dato">
                  <span className="ico">🪪</span>
                  <span>ID vendedor: TM-0482</span>
                </div>
              </div>

              <div className="redes">
                <a href="#" aria-label="Facebook">f</a>
                <a href="#" aria-label="Instagram">ig</a>
                <a href="#" aria-label="LinkedIn">in</a>
                <a href="#" aria-label="WhatsApp">wa</a>
              </div>
            </div>
          </aside>

          <div className="contenido">
            <article className="bloque revelar-derecha">
              <h4>👋 Sobre mí</h4>
              <p>
                Soy Carlos Matínez Sánchez, vendedor con más de 8 años de
                experiencia en atención y venta de productos. Me apasiona
                ayudar a cada cliente a encontrar exactamente lo que necesita,
                ofreciendo asesoría honesta, seguimiento personalizado y una
                experiencia de compra agradable. Trabajo en la tienda TERRAMAR
                desde su apertura y conozco a fondo cada artículo del catálogo.
              </p>
            </article>

            <article className="bloque revelar-derecha">
              <h4>📊 Cifras que respaldan mi trabajo</h4>
              <div className="estadisticas">
                {estadisticas.map((e) => (
                  <div className="stat" key={e.lbl}>
                    <span className="num" data-contador={e.num}>
                      0
                    </span>
                    <span className="lbl">{e.lbl}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="bloque revelar-derecha">
              <h4>💡 Habilidades profesionales</h4>
              <div className="lista-habilidades">
                {habilidades.map((h) => (
                  <div key={h.nombre}>
                    <div className="habilidad-info">
                      <span>{h.nombre}</span>
                      <span>{h.valor}%</span>
                    </div>
                    <div className="barra">
                      <span data-valor={h.valor}></span>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="bloque revelar-derecha">
              <h4>🗓️ Experiencia laboral</h4>
              <div className="timeline">
                {experiencia.map((x) => (
                  <div className="item-timeline" key={x.titulo}>
                    <span className="anio">{x.anio}</span>
                    <h5>{x.titulo}</h5>
                    <p>{x.desc}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="pie">
        <p>
          <strong>TERRAMAR</strong> © {new Date().getFullYear()} — Carlos
          Matínez Sánchez · Información del vendedor
        </p>
      </footer>
    </>
  );
}
