export default function GrupoZanterSite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans scroll-smooth">
      <a
        href="https://wa.me/5596992081506"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition hover:scale-110"
      >
        <span className="text-3xl">💬</span>
      </a>

      <header className="bg-gradient-to-r from-red-700 to-red-500 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-wide">GRUPO ZANTER LTDA</h1>
            <p className="text-lg mt-2 opacity-90">
              Soluções em alimentação coletiva, hospitalar e corporativa
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-right">
            <p className="font-semibold">📞 (96) 99208-1506</p>
            <p>✉️ adm@ciazanter.com</p>
          </div>
        </div>
      </header>

      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h2 className="text-5xl font-bold leading-tight text-gray-900">
            Alimentação com qualidade, segurança e excelência.
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            O Grupo Zanter atua no fornecimento de alimentação coletiva,
            hospitalar e empresarial, oferecendo refeições balanceadas,
            saborosas e produzidas com rigorosos padrões de qualidade.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-100 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold mb-10">Nossos Serviços</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="text-5xl mb-4">🍽️</div>
              <h4 className="text-2xl font-bold mb-4">Alimentação Coletiva</h4>
              <p className="text-gray-600">
                Refeições para empresas e instituições.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="text-5xl mb-4">🏥</div>
              <h4 className="text-2xl font-bold mb-4">Alimentação Hospitalar</h4>
              <p className="text-gray-600">
                Cardápios personalizados com segurança alimentar.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="text-5xl mb-4">🚚</div>
              <h4 className="text-2xl font-bold mb-4">Delivery Corporativo</h4>
              <p className="text-gray-600">
                Entrega com qualidade e pontualidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-12 text-center">
        <p>© 2026 Grupo Zanter LTDA. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}
