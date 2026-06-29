import { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: "Aviso legal de SolucionesIACM. Información sobre el titular, condiciones de uso y legislación aplicable.",
};

export default function AvisoLegalPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto max-w-[800px] px-6">
        <AnimatedSection>
          <h1 className="text-3xl font-bold mb-8">Aviso Legal</h1>
          <p className="text-sm text-gray-400 mb-8">Última actualización: Junio 2025</p>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-bold mb-4">1. Datos identificativos</h2>
              <p className="text-gray-600 leading-relaxed">
                En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la
                Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa que el titular
                de este sitio web es:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mt-4 space-y-1">
                <li><strong>Denominación:</strong> SolucionesIACM</li>
                <li><strong>Domicilio:</strong> Cumbres Mayores, Huelva, España</li>
                <li><strong>Email:</strong> info@solucionesiacm.com</li>
                <li><strong>Sitio web:</strong> www.solucionesiacm.com</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">2. Objeto</h2>
              <p className="text-gray-600 leading-relaxed">
                Este sitio web tiene como finalidad proporcionar información sobre los servicios de
                desarrollo web, inteligencia artificial, automatización y soluciones digitales ofrecidos
                por SolucionesIACM.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">3. Condiciones de uso</h2>
              <p className="text-gray-600 leading-relaxed">
                El usuario se compromete a hacer un uso adecuado de los contenidos y servicios
                ofrecidos a través de este sitio web y a no emplearlos para actividades ilícitas o
                que contravengan la buena fe, el ordenamiento legal o el orden público.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">4. Propiedad intelectual</h2>
              <p className="text-gray-600 leading-relaxed">
                Todos los contenidos de este sitio web, incluyendo textos, imágenes, diseño gráfico,
                código fuente, logos y marcas, son propiedad de SolucionesIACM o de sus legítimos
                titulares, y están protegidos por las leyes de propiedad intelectual e industrial.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">5. Legislación aplicable</h2>
              <p className="text-gray-600 leading-relaxed">
                Las presentes condiciones se rigen por la legislación española. Para la resolución
                de cualquier controversia, las partes se someten a los Juzgados y Tribunales del
                domicilio del titular del sitio web.
              </p>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
