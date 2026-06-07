import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage, type LegalSection } from "@/components/hathor/LegalPage";
import { CLINIC } from "@/lib/hathor";

export const Route = createFileRoute("/politica-cookies")({
  head: () => ({
    meta: [
      { title: "Política de cookies — Hathor Clínica" },
      {
        name: "description",
        content:
          "Información sobre el uso de cookies en el sitio web de Hathor Clínica y cómo configurarlas o rechazarlas.",
      },
      { property: "og:title", content: "Política de cookies — Hathor Clínica" },
      {
        property: "og:description",
        content:
          "Tipos de cookies, servicios de terceros y configuración en tu navegador.",
      },
    ],
  }),
  component: CookiesPage,
});

const sections: LegalSection[] = [
  {
    id: "que-son",
    title: "¿Qué son las cookies?",
    content: (
      <p>
        Las cookies son pequeños archivos de texto que los sitios web instalan
        en el dispositivo del usuario para almacenar y recuperar información
        sobre su navegación. Pueden ser utilizadas para diversas finalidades,
        como recordar preferencias, analizar el uso del sitio o personalizar
        contenidos.
      </p>
    ),
  },
  {
    id: "estado",
    title: "Cookies utilizadas en este sitio",
    content: (
      <>
        <p>
          Actualmente, este sitio web <strong>no instala cookies no técnicas</strong>
          {" "}que requieran consentimiento previo. Únicamente se utilizan, en su
          caso, cookies estrictamente necesarias para el correcto funcionamiento
          de la web (por ejemplo, almacenamiento de preferencias técnicas de
          sesión).
        </p>
        <p>
          Si en el futuro se incorporasen cookies analíticas, de personalización
          o publicitarias, se actualizará esta política y se mostrará un banner
          de consentimiento previo a su instalación.
        </p>
      </>
    ),
  },
  {
    id: "tipos",
    title: "Tipos de cookies según su finalidad",
    content: (
      <ul>
        <li>
          <strong>Técnicas:</strong> imprescindibles para el funcionamiento del
          sitio. No requieren consentimiento.
        </li>
        <li>
          <strong>De preferencias o personalización:</strong> recuerdan
          configuraciones del usuario (idioma, región, etc.).
        </li>
        <li>
          <strong>Analíticas:</strong> permiten medir y analizar el
          comportamiento de los usuarios.
        </li>
        <li>
          <strong>De marketing o publicidad comportamental:</strong> almacenan
          información del comportamiento de los usuarios para mostrar publicidad
          personalizada.
        </li>
      </ul>
    ),
  },
  {
    id: "terceros",
    title: "Servicios de terceros",
    content: (
      <>
        <p>
          Este sitio enlaza a servicios externos que pueden instalar sus propias
          cookies si el usuario interactúa con ellos. Hathor Clínica no controla
          ni gestiona dichas cookies. Te recomendamos consultar sus respectivas
          políticas:
        </p>
        <ul>
          <li>
            <p><strong>Google Maps:</strong> mapa embebido y enlace de ruta a la clínica.</p>
            <p>Más información: <a href="https://policies.google.com/privacy?hl=es" target="_blank" rel="noopener noreferrer">política de privacidad de Google</a>.</p>
          </li>
          <li>
            <p><strong>Instagram:</strong> enlaces al perfil y posibles embeds de reels.</p>
            <p>Más información: <a href="https://privacycenter.instagram.com/policy/" target="_blank" rel="noopener noreferrer">política de privacidad de Instagram (Meta)</a>.</p>
          </li>
          <li>
            <p><strong>WhatsApp:</strong> enlaces directos para iniciar conversación.</p>
            <p>Más información: <a href="https://www.whatsapp.com/legal/privacy-policy-eea?lang=es_ES" target="_blank" rel="noopener noreferrer">política de privacidad de WhatsApp</a>.</p>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "configurar",
    title: "Cómo configurar o rechazar cookies",
    content: (
      <>
        <p>
          Puedes permitir, bloquear o eliminar las cookies instaladas en tu
          dispositivo configurando las opciones del navegador:
        </p>
        <ul>
          <li>
            <a href="https://support.google.com/accounts/answer/61416?hl=es" target="_blank" rel="noopener noreferrer">Google Chrome</a>
          </li>
          <li>
            <a href="https://support.mozilla.org/es/kb/Borrar%20cookies" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a>
          </li>
          <li>
            <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a>
          </li>
          <li>
            <a href="https://support.microsoft.com/es-es/windows/administrar-cookies-en-microsoft-edge-ver-permitir-bloquear-eliminar-y-usar-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer">Microsoft Edge</a>
          </li>
        </ul>
        <p>
          Ten en cuenta que la desactivación de cookies técnicas puede afectar
          al correcto funcionamiento de algunas partes del sitio.
        </p>
      </>
    ),
  },
  {
    id: "cambios",
    title: "Cambios en la política de cookies",
    content: (
      <p>
        Esta política puede actualizarse en función de cambios normativos, de
        nuevos servicios incorporados al sitio o de criterios propios. Se
        recomienda revisarla periódicamente. La fecha de la última actualización
        figura al inicio de este documento.
      </p>
    ),
  },
  {
    id: "mas-informacion",
    title: "Más información",
    content: (
      <>
        <p>
          Para conocer en detalle cómo tratamos tus datos personales puedes consultar nuestra <Link to="/politica-privacidad">Política de privacidad</Link>.
        </p>
        <p>
          También puedes escribirnos a <a href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a>.
        </p>
      </>
    ),
  },
];

function CookiesPage() {
  return (
    <LegalPage
      title="Política de cookies"
      updatedAt="Junio de 2026"
      intro={
        <p>
          Esta política describe el uso que Hathor Clínica realiza de las
          cookies y de tecnologías similares en su sitio web, así como los
          servicios de terceros enlazados desde el mismo.
        </p>
      }
      sections={sections}
    />
  );
}