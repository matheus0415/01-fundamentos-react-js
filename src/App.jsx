import {Post} from "./Post"
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";


import './global.css';
import styles from './App.module.css';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
          author="Matheus Santos"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quae totam, vitae, autem in rem excepturi cumque optio est perferendis nesciunt dolorum rerum doloribus aspernatur magnam, assumenda aliquam ex. Distinctio."
          />
        </main>
      </div>
    </div>
  )
}
export default App
