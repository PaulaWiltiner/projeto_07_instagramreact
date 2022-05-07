
function Usuario(props) {
  return(
    <div class="usuario">
      <img alt="" src={props.imgUsuario}/>
      <div class="texto">
        <strong>{props.nome1Usuario}/</strong>
        {props.nome2Usuario}/
      </div>
    </div>
  );
}

function Sugestao(props) {
  return(
    <div class="sugestao">
      <div class="usuario">
        <img alt="" src={props.imgSugestao} />
        <div class="texto">
          <div class="nome">{props.nomeSugestao}</div>
          <div class="razao">{props.statusSugestao}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
}

export default function Sidebar() {

  const sugestoes = [
    <Sugestao imgSugestao="assets/img/bad.vibes.memes.svg" nomeSugestao="bad.vibes.memes" statusSugestao="Segue você" />,
    <Sugestao imgSugestao="assets/img/chibirdart.svg" nomeSugestao="chibirdart" statusSugestao="Segue você" />,
    <Sugestao imgSugestao="assets/img/razoesparaacreditar.svg" nomeSugestao="razoesparaacreditar" statusSugestao="Novo no Instagram" />,
    <Sugestao imgSugestao="assets/img/adorable_animals.svg" nomeSugestao="adorable_animals" statusSugestao="Segue você" />,
    <Sugestao imgSugestao="assets/img/smallcutecats.svg" nomeSugestao="smallcutecats" statusSugestao="Segue você" />
  ];

  return (
    <div class="sidebar">

      <Usuario imgUsuario="assets/img/catanacomics.svg" nome1Usuario="catanacomics" nome2Usuario="Catana"  />

      <div class="sugestoes">

        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        { sugestoes.map(sugestao => sugestao) }

      </div>

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
      </div>
    </div>
  );
}