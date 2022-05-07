
function PostItem(props) {
  return(
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img alt="" src={props.img1Post} />
          {props.nome1Post}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img alt="" src={props.img2Post} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img alt="" src={props.img3Post}/>
          <div class="texto">
            Curtido por <strong> {props.texto1Post} </strong> e <strong> {props.texto2Post} </strong>
          </div>
        </div>
      </div>
    </div>
  );
}


export default function Posts() {

  const listaPosts = [
    <PostItem img1Post= "assets/img/meowed.svg" nomePost="meowed" img2Post="assets/img/gato-telefone.svg" img3Post="assets/img/respondeai.svg" texto1Post="respondeai" texto2Post="outras 101.523 pessoas" />,
    <PostItem img1Post="assets/img/barked.svg" nomePost="barked" img2Post="assets/img/dog.svg" img3Post="assets/img/adorable_animals.svg" texto1Post="adorable_animals" texto2Post="outras 99.159 pessoas" />
  ]
  return (
    <div class="posts">

      {listaPosts.map( post => post )}

    </div>
  );
}