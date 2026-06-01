export function Cardapio() {
  return (
    <>
      <div className="bg-danger bg-gradient text-center text-white p-5 hero-banner">
         <img
            src={`${import.meta.env.BASE_URL}logo_gordao.png`}
            alt="Logo do Quiosque Pereirão"
            className="img-fluid rounded-circle shadow-lg border border-3 border-white align-self-center mb-3"
            style={{
            maxWidth: '180px',
            width: '100%',
            height: 'auto'
            }}
        />
        <h1 className="fw-bold">QUIOSQUE PEREIRÃO</h1>
        <p className="fw-bold">O POINT DOS AMIGOS</p>
        <p className="fw-bold">🌴 O MELHOR PONTO DA PRAIA🌴</p>
      </div>

      <div className="container py-4">
        <section className="menu-section p-4 mb-5">
          <div className="row align-items-center mb-4">
            <div className="col-12  mb-3 mb-md-0 text-center text-md-start">
              <button className="btn btn-dark border-5 border-success px-4 py-3 w-100 w-md-auto">
                <h3 className="mb-2">PETISCOS E PORÇÕES</h3>
                <p className="mb-0"><small>Receitas da família preparadas com o carinho e o repseito que você merece!</small></p>
              </button>
            </div>
            
          </div>
          <div className="col-12  text-center">
              <h2 className="section-title bg-white px-3 py-2 rounded shadow-sm">FRITOS E CARNES</h2>
            </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
            <div className="col">
              <div className="card menu-card h-100">
                <div className="card-header">
                  <h4>🍟 DA FRITADEIRA</h4>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Batata Frita R$25,00</li>
                  <li className="list-group-item">Salgadinhos mistos R$25,00</li>
                  <li className="list-group-item">
                    Batata pereirãoespecial R$48,00
                    <small className="text-secondary d-block">(cheddar, linguiça e bacon)</small>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col">
              <div className="card menu-card h-100">
                <div className="card-header">
                  <h4>🍗 CARNES</h4>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Calabresa Acebbolada R$35,00</li>
                  <li className="list-group-item">Frango a Passarinho R$35,00</li>
                  <li className="list-group-item">Gurjão de Frango R$50,00</li>
                  <li className="list-group-item">Costelinha suína R$50,00</li>
                </ul>
              </div>
            </div>

            <div className="col">
              <div className="card menu-card h-100">
                <div className="card-header text-center">
                  <h4 className="mb-1">🌟A ESTRELA DA CASA</h4>
                  <p className="mb-0">BATATA PEREIRÃO ESPECIAL</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    A porção completa e mais querida para compartilhar com a galera! Batata frita bem crocante, coberta com muito cheddar cremoso, linguiça frita artesanal e bacon em cubos super crocantes.
                    <div className="mt-3 fw-bold">R$ 48,00</div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col">
              <div className="card menu-card h-100">
                <div className="card-header">
                  <h4>SABORES DO MAR</h4>
                  <p className="mb-0"><small>🐟 DA ÁGUA PRO PRATO</small></p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Sardinha Frita R$35,00</li>
                  <li className="list-group-item">Camarão Empanado R$50,00</li>
                  <li className="list-group-item">Gurjão de Peixe R$63,00</li>
                  <li className="list-group-item">Camarão ao Alho e Óleo R$75,00</li>
                  <li className="list-group-item">Corvina Frita R$75,00</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="menu-section p-4 mb-5">
          <div className="row align-items-center mb-4">
            <div className="col-12  mb-3 mb-md-0 text-center text-md-start">
              <button className="btn btn-dark border-5 border-success px-4 py-3 w-100 w-md-auto">
                <h3 className="mb-2">BEBIDAS GELADAS</h3>
                <p className="mb-0"><small>Para refrescar seu dia na praia!</small></p>
              </button>
            </div>
            
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
            <div className="col">

              <div className="card menu-card h-100">
                <div className="card-header">

                  <h4>CERVEJA TRINCANDO / TAMANHO</h4>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Brahma, Antarctica ou Império (Garrafa 600ml) R$ 11,00</li>
                  <li className="list-group-item">Brahma Duplo Malte (Garrafa 600ml) R$ 14,00</li>
                  <li className="list-group-item">Heineken (Garrafa 600ml) R$ 16,00</li>
                  <li className="list-group-item">Latão (Brahma, Antarctica ou Império) R$ 8,00</li>
                  <li className="list-group-item">Heineken (Longneck ou Latão) R$ 10,00</li>
                </ul>
              </div>
            </div>

            <div className="col">
              <div className="card menu-card h-100">
                <div className="card-header">
                  <h4>🍹 INDIVIDUAIS</h4>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Copão de Vodka c/ Energético R$ 10,00</li>
                  <li className="list-group-item">Smirnoff Ice R$ 10,00</li>
                  <li className="list-group-item">Heineken (Garrafa 600ml) R$ 16,00</li>
                  <li className="list-group-item">Chopp de Vinho R$ 15,00</li>
                  <li className="list-group-item">Red Bull Solto R$ 15,00</li>
                </ul>
              </div>
            </div>

            <div className="col">
              <div className="card menu-card h-100">
                <div className="card-header">
                  <h4>🔥 COMBO PROMOCIONAL</h4>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <h4 className="mb-2">COMBO SMIRNOFF</h4>
                    <p className="mb-2">1 Garrafa de Vodka Smirnoff + 6 Latas de Red Bull</p>
                    <div className="fw-bold">R$ 150,00</div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col">
              <div className="card menu-card h-100">
                <div className="card-header">
                  <h4>🥤 ÁGUAS & SUCOS</h4>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Água Mineral R$ 4,00</li>
                  <li className="list-group-item">Água com Gás R$ 5,00</li>
                  <li className="list-group-item">Água Mineral (1,5 Litros) R$ 7,00</li>
                  <li className="list-group-item">Guaraviton R$ 8,00</li>
                  <li className="list-group-item">Limoneto R$ 8,00</li>
                </ul>
              </div>
            </div>

            <div className="col">
              <div className="card menu-card h-100">
                <div className="card-header">
                  <h4>🥤 REFRIGERANTES</h4>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Refrigerante Lata R$ 7,00</li>
                  <li className="list-group-item">Água Tônica Lata R$ 7,00</li>
                  <li className="list-group-item">Coca-Cola (2 Litros) R$ 15,00</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-danger bg-gradient text-center text-white p-5 footer-note">
        <div>
            <a className="fw-bold fs-4" href="https://www.instagram.com/quiosquepereirao" target="_blank" rel="noopener noreferrer">
                📷 Siga nosso Instagram: @quiosquepereirao
            </a>
        </div>
        <div>
            <p>"Aqui preservamos o carinho, amor e respeito em família." FAMÍLIA QUIOSQUE PEREIRÃO</p>
        </div>
        <h2>Muito Obrigado! É um prazer enorme ter você aqui conosco.</h2>
      </div>
    </>
  )
}
