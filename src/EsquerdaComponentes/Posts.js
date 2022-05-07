import React from 'react';


function PostItem(props) {

  const [classHeart, setClassHeart] = React.useState("heart-outline"); // classHeart começa como "heart-outiline"
  const [nameColor, setNameColor] = React.useState("black"); 

  function troca() {
    if(classHeart==="heart-outline" ) {
      setClassHeart("heart")
      setNameColor("danger")
    }else{
      setClassHeart("heart-outline")
      setNameColor("black")
    }
  }

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
            <ion-icon onClick={troca} name={classHeart} color={nameColor}></ion-icon>
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
            Curtido por <strong> {props.texto1Post} </strong> e <strong>outras {props.texto2Post} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}


export default function Posts() {

  const listaPosts = [
    <PostItem img1Post= "assets/img/meowed.svg" nomePost="meowed" img2Post="assets/img/gato-telefone.svg" img3Post="assets/img/respondeai.svg" texto1Post="respondeai" texto2Post="101.523" />,
    <PostItem img1Post="assets/img/barked.svg" nomePost="barked" img2Post="assets/img/dog.svg" img3Post="assets/img/adorable_animals.svg" texto1Post="adorable_animals" texto2Post="99.159" />
  ]
  return (
    <div class="posts">

      {listaPosts.map( post => post )}

    </div>
  );
}