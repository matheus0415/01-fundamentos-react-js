import {Post} from "./Post"
import { Header } from "./components/Header";

import './styles.css'; 

function App() {
  return (
    <div>
      <Header />
      
      <Post 
        author="Matheus Santos"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quae totam, vitae, autem in rem excepturi cumque optio est perferendis nesciunt dolorum rerum doloribus aspernatur magnam, assumenda aliquam ex. Distinctio."
      />
    </div>
  )
}
export default App
