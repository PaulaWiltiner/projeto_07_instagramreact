import Stories from './EsquerdaComponentes/Stories'
import Posts from './EsquerdaComponentes/Posts'
import Sidebar from './Sidebar'

export default function Corpo(){
  return (
    <div class="corpo">
      <div class="esquerda">
        <Stories />
        <Posts />
      </div>
      <Sidebar />
    </div>
  );
}