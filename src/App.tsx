{/* Your complete updated App.tsx code here */}
import React, { useState } from 'react';
import { Building2, MessageSquare, CheckSquare, ArrowRight, Phone, Mail, MapPin, Camera, Star } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  type: string;
};

type WorkType = 'cielorraso' | 'revestimiento';
type CielorrasoType = 'junta_tomada' | 'pvc' | 'desmontable';

function App() {
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "Cielorraso Moderno",
      description: "Instalación de cielorraso con iluminación LED integrada",
      image: "https://i.imgur.com/TX46EDv.jpeg",
      type: "Cielorraso"
    },
    {
      id: 2,
      title: "Revestimiento Premium",
      description: "Revestimiento de paredes con acabado premium",
      image: "https://i.imgur.com/LODJLPr.jpeg",
      type: "Revestimiento"
    },
    {
      id: 3,
      title: "Diseño Minimalista",
      description: "Paredes y cielorraso con diseño minimalista",
      image: "https://i.imgur.com/wQ0vhTm.jpeg",
      type: "Cielorraso"
    }
  ];

  const features = [
    { title: "Presupuesto sin cargo", icon: CheckSquare },
    { title: "Materiales de primera calidad", icon: Star },
    { title: "Instalación profesional", icon: Building2 },
    { title: "Documentación fotográfica", icon: Camera }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white text-black py-6 fixed w-full z-50 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="https://i.imgur.com/oHaixWe.png"
                alt="Logo ENSECO Construcción"
                className="w-20 h-15"
              />
              <h1 className="text-2xl font-bold">ENSECO Construcción</h1>
            </div>
            <button
              onClick={() => setShowQuoteForm(true)}
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              Solicitar Presupuesto
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">Transformamos Espacios</h2>
            <p className="text-xl mb-8">Especialistas en cielorrasos y revestimientos de alta calidad</p>
            <button
              onClick={() => setShowQuoteForm(true)}
              className="bg-red-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-600 transition-colors"
            >
              Consultar Ahora
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <feature.icon size={40} className="text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Nuestros Trabajos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                    {project.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Contacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <Phone size={32} className="text-red-500 mx-auto mb-4" />
                <p className="font-semibold">+54 379 4619018 <br />+54 379 4564540</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <Mail size={32} className="text-red-500 mx-auto mb-4" />
                <p className="font-semibold">@ensecodurlock</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <MapPin size={32} className="text-red-500 mx-auto mb-4" />
                <p className="font-semibold">Corrientes, Argentina <br /> Resistencia, Chaco </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Modal */}
      {showQuoteForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <QuoteForm onClose={() => setShowQuoteForm(false)} />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Building2 size={24} className="text-red-500" />
              <span className="font-semibold">ENSECO Construcción</span>
            </div>
            <div className="text-center md:text-right">
              <p>© 2024 ENSECO Construcción. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function QuoteForm({ onClose }: { onClose: () => void }) {
  const [workType, setWorkType] = useState<WorkType>('cielorraso');
  const [cielorrasoType, setCielorrasoType] = useState<CielorrasoType>('junta_tomada');
  const [squareMeters, setSquareMeters] = useState<string>('');
  const [needsSiteMeasurement, setNeedsSiteMeasurement] = useState<boolean>(false);
  const [hasInsulation, setHasInsulation] = useState<boolean>(false);
  const [needsPainting, setNeedsPainting] = useState<boolean>(false);
  const [additionalDetails, setAdditionalDetails] = useState<string>('');

  const generateWhatsAppMessage = () => {
    const message = `¡Hola! Me interesa realizar el siguiente trabajo:
    
Tipo de trabajo: ${workType.toUpperCase()}
${workType === 'cielorraso' ? `Tipo de cielorraso: ${cielorrasoType.replace('_', ' ').toUpperCase()}\n` : ''}
Metros cuadrados: ${needsSiteMeasurement ? 'Necesito visita para tomar medidas' : `${squareMeters}m²`}
Aislante térmico: ${hasInsulation ? 'Sí' : 'No'}
Pintura: ${needsPainting ? 'Sí' : 'No'}
Detalles adicionales: ${additionalDetails}

¿Podrían brindarme más información?`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5493794564540?text=${encodedMessage}`, '_blank');
    onClose();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Solicitud de Presupuesto</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          ✕
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Tipo de Trabajo</label>
          <div className="grid grid-cols-2 gap-4">
            {['cielorraso', 'revestimiento'].map((type) => (
              <button
                key={type}
                onClick={() => setWorkType(type as WorkType)}
                className={`p-3 rounded-lg border ${
                  workType === type
                    ? 'border-red-500 bg-red-50 text-red-700'
                    : 'border-gray-200 hover:border-red-200'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {workType === 'cielorraso' && (
          <div>
            <label className="block text-gray-700 font-medium mb-2">Tipo de Cielorraso</label>
            <div className="grid grid-cols-3 gap-4">
              {[
                { id: 'junta_tomada', label: 'Junta Tomada' },
                { id: 'pvc', label: 'PVC' },
                { id: 'desmontable', label: 'Desmontable' }
              ].map((type) => (
                <button
                  key={type.id}
                  onClick={() => setCielorrasoType(type.id as CielorrasoType)}
                  className={`p-3 rounded-lg border ${
                    cielorrasoType === type.id
                      ? 'border-red-500 bg-red-50 text-red-700'
                      : 'border-gray-200 hover:border-red-200'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>
        )}

        <div>
          <label className="block text-gray-700 font-medium mb-2">Medidas</label>
          <div className="space-y-3">
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={needsSiteMeasurement}
                onChange={(e) => setNeedsSiteMeasurement(e.target.checked)}
                className="w-5 h-5 text-red-500 border-gray-300 rounded"
              />
              <span className="text-gray-700">Necesito una visita para tomar medidas</span>
            </label>
            
            {!needsSiteMeasurement && (
              <input
                type="number"
                value={squareMeters}
                onChange={(e) => setSquareMeters(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-lg"
                placeholder="Metros cuadrados (ej: 20)"
              />
            )}
          </div>
        </div>

        <div className="space-y-3">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={hasInsulation}
              onChange={(e) => setHasInsulation(e.target.checked)}
              className="w-5 h-5 text-red-500 border-gray-300 rounded"
            />
            <span className="text-gray-700">Incluir aislante térmico</span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={needsPainting}
              onChange={(e) => setNeedsPainting(e.target.checked)}
              className="w-5 h-5 text-red-500 border-gray-300 rounded"
            />
            <span className="text-gray-700">Incluir pintura</span>
          </label>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Detalles Adicionales</label>
          <textarea
            value={additionalDetails}
            onChange={(e) => setAdditionalDetails(e.target.value)}
            className="w-full p-3 border border-gray-200 rounded-lg"
            rows={4}
            placeholder="Especificaciones adicionales o consultas..."
          />
        </div>

        <button
          onClick={generateWhatsAppMessage}
          className="w-full bg-red-500 text-white py-4 px-6 rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center space-x-2"
        >
          <MessageSquare size={20} />
          <span>Consultar por WhatsApp</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default App;