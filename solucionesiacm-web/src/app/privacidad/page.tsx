import { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad de SolucionesIACM. Información sobre el tratamiento de datos personales según el RGPD.",
};

export default function PrivacidadPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto max-w-[800px] px-6">
        <AnimatedSection>
          <h1 className="text-3xl font-bold mb-8">Política de Privacidad</h1>
          <p className="text-sm text-gray-400 mb-8">Última actualización: Junio 2025</p>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-bold mb-4">1. Responsable del tratamiento</h2>
              <p className="text-gray-600 leading-relaxed">
                El responsable del tratamiento de los datos personales recogidos a través de este
                sitio web es SolucionesIACM, con domicilio en Cumbres Mayores, Huelva, España.
                Email de contacto: info@solucionesiacm.com.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">2. Datos que recopilamos</h2>
              <p className="text-gray-600 leading-relaxed">
                Recopilamos los datos personales que el usuario nos proporciona voluntariamente
                a través de los formularios de contacto, solicitud de reunión y suscripción a
                la newsletter. Estos datos pueden incluir:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mt-4 space-y-1">
                <li>Nombre y apellidos</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Nombre de la empresa</li>
                <li>Mensaje o consulta</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">3. Finalidad del tratamiento</h2>
              <p className="text-gray-600 leading-relaxed">
                Los datos personales son tratados con las siguientes finalidades:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mt-4 space-y-1">
                <li>Gestionar las solicitudes de contacto y presupuesto</li>
                <li>Programar y gestionar reuniones</li>
                <li>Enviar comunicaciones comerciales (si el usuario lo consiente)</li>
                <li>Mejorar nuestros servicios y la experiencia del usuario</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">4. Base legal</h2>
              <p className="text-gray-600 leading-relaxed">
                El tratamiento de datos se realiza en base al consentimiento del usuario, que es
                otorgado al enviar los formularios correspondientes. Para el envío de comunicaciones
                comerciales, se solicitará consentimiento expreso.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">5. Derechos del usuario</h2>
              <p className="text-gray-600 leading-relaxed">
                De acuerdo con el Reglamento General de Protección de Datos (RGPD), el usuario tiene
                derecho a acceder, rectificar, suprimir, limitar el tratamiento, portabilidad y oposición
                de sus datos personales. Para ejercer estos derechos, puede contactar con nosotros en
                info@solucionesiacm.com.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">6. Conservación de datos</h2>
              <p className="text-gray-600 leading-relaxed">
                Los datos personales serán conservados mientras dure la relación comercial o hasta que
                el usuario solicite su supresión. Los datos de contacto se conservarán durante un
                máximo de 2 años desde la última comunicación.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">7. Seguridad</h2>
              <p className="text-gray-600 leading-relaxed">
                SolucionesIACM adopta las medidas técnicas y organizativas necesarias para garantizar
                la seguridad de los datos personales y evitar su alteración, pérdida o acceso no
                autorizado, teniendo en cuenta el estado de la tecnología.
              </p>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
