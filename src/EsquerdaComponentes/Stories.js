
function Story(props){
  return(
    <div class="story">
      <div class="imagem">
        <img alt="" src={props.imgStory} />
      </div>
      <div class="usuario">
        {props.nomeStory}
      </div>
    </div>
  );
}

export default function Stories() {

  const stories = [
    <Story imgStory="assets/img/9gag.svg" nomeStory="9gag" />,
    <Story imgStory="assets/img/meowed.svg" nomeStory="meowed" />,
    <Story imgStory="assets/img/barked.svg" nomeStory="barked" />,
    <Story imgStory="assets/img/nathanwpylestrangeplanet.svg" nomeStory="nathanwpylestrangeplanet" />,
    <Story imgStory="assets/img/wawawicomics.svg" nomeStory="wawawicomics" />,
    <Story imgStory="assets/img/respondeai.svg" nomeStory="respondeai" />,
    <Story imgStory="assets/img/filomoderna.svg" nomeStory="filomoderna" />,
    <Story imgStory="assets/img/memeriagourmet.svg" nomeStory="memeriagourmet" />
    ];

  return (

    <div class="stories">
      
      {stories.map(story => story)}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}