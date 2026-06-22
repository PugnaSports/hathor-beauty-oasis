import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSection } from "@/components/hathor/LegalPage";
import { CLINIC } from "@/lib/hathor";

export const Route = createFileRoute("/aviso-legal")({
  head: () => ({
    meta: [
      { title: "Aviso legal — Hathor Clínica" },
      {
        name: "description",
        content:
          "Aviso legal de Hathor Clínica: titularidad del sitio, condiciones de uso, propiedad intelectual y responsabilidades.",
      },
      { property: "og:title", content: "Aviso legal — Hathor Clínica" },
      {
        property: "og:description",
        content:
          "Información legal y condiciones de uso del sitio web de Hathor Clínica.",
      },
    ],
  }),
  component: AvisoLegalPage,
});

const sections: LegalSection[] = [
  {
    id: "titularidad",
    title: "Titularidad del sitio",
    content: (
      <>
        <p>
          En cumplimiento de lo establecido en la Ley 34/2002, de 11 de julio, de
          Servicios de la Sociedad de la Información y de Comercio Electrónico
          (LSSI-CE), se informa de los datos identificativos del titular de este
          sitio web:
        </p>
        <ul>
          <li><strong>Titular:</strong> Laura Prieto Borges</li>
          <li><strong>DNI / NIF:</strong> 47880327P</li>
          <li><strong>Domicilio fiscal:</strong> {CLINIC.address}</li>
          <li><strong>Dirección de la clínica:</strong> {CLINIC.address}</li>
          <li><strong>Email de contacto:</strong> {CLINIC.email}</li>
          <li><strong>Teléfono:</strong> {CLINIC.phoneDisplay}</li>
          <li><strong>Sitio web:</strong> https://clinicahathor.es/</li>
        </ul>
      </>
    ),
  },
  {
    id: "objeto",
    title: "Objeto de la web",
    content: (
      <p>
        El presente sitio web tiene por finalidad informar sobre los servicios de
        medicina estética y capilar ofrecidos por Hathor Clínica, facilitar la
        comunicación con potenciales pacientes y permitir la solicitud de cita
        previa. La información publicada tiene carácter orientativo y no
        sustituye, en ningún caso, una valoración profesional personalizada.
      </p>
    ),
  },
  {
    id: "condiciones",
    title: "Condiciones de uso",
    content: (
      <>
        <p>
          El acceso y la navegación por este sitio atribuyen la condición de
          usuario e implican la aceptación de las presentes condiciones. El
          usuario se compromete a hacer un uso adecuado de los contenidos y
          servicios y a no emplearlos para:
        </p>
        <ul>
          <li>Difundir contenidos ilícitos, violentos, pornográficos o contrarios a la ley, la moral o el orden público.</li>
          <li>Provocar daños en los sistemas físicos o lógicos del titular o de terceros.</li>
          <li>Introducir virus informáticos o cualquier otro sistema susceptible de causar daños.</li>
          <li>Intentar acceder, utilizar o manipular datos del titular o de terceros usuarios.</li>
        </ul>
      </>
    ),
  },
  {
    id: "propiedad-intelectual",
    title: "Propiedad intelectual e industrial",
    content: (
      <p>
        Todos los contenidos del sitio (textos, fotografías, gráficos, imágenes,
        iconos, tecnología, software, así como su diseño gráfico y códigos
        fuente) son propiedad de Laura Prieto Borges o de terceros que han autorizado
        su uso, y se encuentran protegidos por la normativa española e
        internacional sobre propiedad intelectual e industrial. Queda prohibida
        su reproducción, distribución, comunicación pública o transformación,
        total o parcial, sin autorización expresa y por escrito del titular.
      </p>
    ),
  },
  {
    id: "responsabilidades",
    title: "Exclusión de responsabilidades",
    content: (
      <p>
        El titular no se hace responsable de los posibles errores u omisiones
        que pudieran existir en los contenidos, ni de los daños o perjuicios
        derivados del uso de la información contenida en el sitio. Asimismo,
        se reserva el derecho a modificar, suspender o interrumpir el acceso al
        sitio web en cualquier momento y sin previo aviso, por motivos técnicos,
        de seguridad, de control, de mantenimiento u otros.
      </p>
    ),
  },
  {
    id: "enlaces",
    title: "Enlaces externos",
    content: (
      <p>
        Este sitio puede contener enlaces a páginas de terceros (por ejemplo,
        Google Maps, Instagram o WhatsApp). El titular no asume responsabilidad
        alguna sobre el contenido, las políticas de privacidad o las prácticas
        de dichos sitios. La inclusión de tales enlaces se realiza con finalidad
        meramente informativa y no implica recomendación ni asociación con sus
        responsables.
      </p>
    ),
  },
  {
    id: "legislacion",
    title: "Legislación aplicable y jurisdicción",
    content: (
      <p>
        Las presentes condiciones se rigen por la legislación española vigente.
        Para la resolución de cualquier controversia derivada del acceso o uso
        de este sitio web, las partes se someten a los Juzgados y Tribunales
        correspondientes al domicilio del titular, salvo que la normativa
        aplicable establezca otro fuero imperativo.
      </p>
    ),
  },
  {
    id: "contacto",
    title: "Contacto",
    content: (
      <p>
        Para cualquier consulta relacionada con el presente aviso legal puedes
        escribirnos a <a href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a> o
        llamarnos al <a href={`tel:${CLINIC.phoneTel}`}>{CLINIC.phoneDisplay}</a>.
      </p>
    ),
  },
];

function AvisoLegalPage() {
  return (
    <LegalPage
      title="Aviso legal"
      updatedAt="Junio de 2026"
      intro={
        <p>
          La presente página recoge la información legal relativa al sitio web
          de Hathor Clínica y las condiciones que regulan su uso por parte de
          los usuarios.
        </p>
      }
      sections={sections}
    />
  );
}
