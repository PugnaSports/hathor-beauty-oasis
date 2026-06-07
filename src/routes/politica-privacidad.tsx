import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage, type LegalSection } from "@/components/hathor/LegalPage";
import { CLINIC } from "@/lib/hathor";

export const Route = createFileRoute("/politica-privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad — Hathor Clínica" },
      {
        name: "description",
        content:
          "Cómo Hathor Clínica trata tus datos personales: finalidades, base legal, conservación, destinatarios y derechos.",
      },
      { property: "og:title", content: "Política de privacidad — Hathor Clínica" },
      {
        property: "og:description",
        content:
          "Información sobre el tratamiento de datos personales en Hathor Clínica conforme al RGPD y la LOPDGDD.",
      },
    ],
  }),
  component: PrivacidadPage,
});

const sections: LegalSection[] = [
  {
    id: "responsable",
    title: "Responsable del tratamiento",
    content: (
      <ul>
        <li><strong>Responsable:</strong> [RAZÓN SOCIAL]</li>
        <li><strong>NIF / CIF:</strong> [NIF/CIF]</li>
        <li><strong>Domicilio:</strong> [DIRECCIÓN FISCAL]</li>
        <li><strong>Email de contacto:</strong> {CLINIC.email}</li>
        <li><strong>Teléfono:</strong> {CLINIC.phoneDisplay}</li>
      </ul>
    ),
  },
  {
    id: "datos",
    title: "Datos que podemos recoger",
    content: (
      <>
        <p>
          Tratamos únicamente los datos que tú nos facilitas voluntariamente al
          contactar con nosotros o solicitar cita. Estos pueden incluir:
        </p>
        <ul>
          <li>Datos identificativos: nombre y apellidos.</li>
          <li>Datos de contacto: email, teléfono o número de WhatsApp.</li>
          <li>Contenido del mensaje o consulta que nos remitas.</li>
          <li>
            Datos de salud relacionados con el tratamiento solicitado, únicamente
            cuando seas tú quien decida compartirlos para una valoración.
          </li>
        </ul>
        <p>
          No recopilamos datos de navegación con fines analíticos o publicitarios
          mediante cookies no técnicas. Para más información consulta nuestra{" "}
          <Link to="/politica-cookies">Política de cookies</Link>.
        </p>
      </>
    ),
  },
  {
    id: "finalidades",
    title: "Finalidades del tratamiento",
    content: (
      <ul>
        <li>Atender tus consultas y solicitudes de información.</li>
        <li>Gestionar la reserva, confirmación y seguimiento de citas.</li>
        <li>Prestarte los servicios estéticos y capilares solicitados.</li>
        <li>Cumplir con las obligaciones legales, contables y fiscales aplicables.</li>
      </ul>
    ),
  },
  {
    id: "base-legal",
    title: "Base legal",
    content: (
      <ul>
        <li><strong>Consentimiento</strong> del interesado al contactar con nosotros o solicitar cita.</li>
        <li><strong>Ejecución de un contrato</strong> o aplicación de medidas precontractuales en la prestación de servicios.</li>
        <li><strong>Cumplimiento de obligaciones legales</strong> en materia fiscal, sanitaria y contable.</li>
        <li><strong>Interés legítimo</strong> en garantizar la seguridad y el correcto funcionamiento del sitio web.</li>
      </ul>
    ),
  },
  {
    id: "conservacion",
    title: "Plazos de conservación",
    content: (
      <p>
        Los datos se conservarán durante el tiempo necesario para cumplir con la
        finalidad para la que fueron recabados y, posteriormente, durante los
        plazos legalmente exigibles para la atención de posibles responsabilidades
        (fiscales, sanitarias y mercantiles). Cuando ya no sean necesarios, se
        suprimirán mediante medidas de seguridad adecuadas.
      </p>
    ),
  },
  {
    id: "destinatarios",
    title: "Destinatarios y encargados de tratamiento",
    content: (
      <>
        <p>
          No cedemos tus datos a terceros salvo obligación legal. Sí pueden
          acceder a ellos, como encargados del tratamiento, los proveedores
          necesarios para la prestación del servicio, con los que se han
          formalizado los correspondientes contratos:
        </p>
        <ul>
          <li>[EMPRESA DE HOSTING] como proveedor de alojamiento del sitio web.</li>
          <li>Proveedor de correo electrónico para la comunicación contigo.</li>
          <li>
            Plataformas de mensajería que utilices voluntariamente para
            contactarnos (por ejemplo, WhatsApp / Meta Platforms Ireland Ltd.).
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "transferencias",
    title: "Transferencias internacionales",
    content: (
      <p>
        Algunos de los servicios utilizados (por ejemplo, WhatsApp, Instagram o
        Google Maps) pueden implicar transferencias internacionales de datos
        fuera del Espacio Económico Europeo. En estos casos, los proveedores se
        acogen a las garantías adecuadas previstas en el RGPD, como las
        Cláusulas Contractuales Tipo aprobadas por la Comisión Europea.
      </p>
    ),
  },
  {
    id: "derechos",
    title: "Derechos del usuario",
    content: (
      <>
        <p>
          Como persona interesada, puedes ejercer en cualquier momento los
          siguientes derechos:
        </p>
        <ul>
          <li>Acceso a tus datos personales.</li>
          <li>Rectificación de los datos inexactos.</li>
          <li>Supresión de los datos cuando ya no sean necesarios.</li>
          <li>Oposición y limitación del tratamiento.</li>
          <li>Portabilidad de los datos en un formato estructurado.</li>
          <li>Retirar el consentimiento prestado en cualquier momento.</li>
        </ul>
        <p>
          Para ejercerlos, envía un email a{" "}
          <a href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a> indicando el
          derecho que deseas ejercer y adjuntando copia de un documento de
          identidad. Si consideras que el tratamiento no se ajusta a la
          normativa, tienes derecho a presentar una reclamación ante la Agencia
          Española de Protección de Datos (
          <a href="https://www.aepd.es" target="_blank" rel="noreferrer">
            www.aepd.es
          </a>
          ).
        </p>
      </>
    ),
  },
  {
    id: "seguridad",
    title: "Seguridad de los datos",
    content: (
      <p>
        Aplicamos medidas técnicas y organizativas apropiadas para garantizar un
        nivel de seguridad adecuado al riesgo del tratamiento, incluyendo
        controles de acceso, cifrado en tránsito y procedimientos de gestión de
        incidentes.
      </p>
    ),
  },
  {
    id: "menores",
    title: "Menores de edad",
    content: (
      <p>
        No se recogen conscientemente datos de menores de 14 años a través de
        este sitio web. En el caso de tratamientos a menores en la clínica, se
        requiere la autorización expresa de quienes ostenten la patria potestad
        o tutela.
      </p>
    ),
  },
  {
    id: "canales-externos",
    title: "Comunicaciones a través de canales externos",
    content: (
      <p>
        Si contactas con nosotros a través de WhatsApp, teléfono, email,
        Instagram o Google Maps, ten en cuenta que dichas plataformas tratan tus
        datos conforme a sus propias políticas de privacidad, sobre las que
        Hathor Clínica no tiene control. Te recomendamos revisarlas antes de
        utilizarlas.
      </p>
    ),
  },
  {
    id: "contacto",
    title: "Contacto",
    content: (
      <p>
        Para cualquier cuestión relativa al tratamiento de tus datos personales
        puedes escribirnos a{" "}
        <a href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a>.
      </p>
    ),
  },
];

function PrivacidadPage() {
  return (
    <LegalPage
      title="Política de privacidad"
      updatedAt="Junio de 2026"
      intro={
        <p>
          En Hathor Clínica nos comprometemos a proteger tu privacidad y a
          tratar tus datos personales con transparencia, conforme al Reglamento
          (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018 de Protección de
          Datos Personales y garantía de los derechos digitales (LOPDGDD).
        </p>
      }
      sections={sections}
    />
  );
}