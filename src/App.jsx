import {Post} from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import './global.css';
import styles from './App.module.css';

// author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date
//content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "http://github.com/matheus0415.png",
      name: "Matheus",
      role: "Developer"
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
      {type: 'paragraph', content: 'Tempore quae totam, vitae,' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "http://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator"
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
      {type: 'paragraph', content: 'Tempore quae totam, vitae,' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
];



function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
            }) }
        </main>
      </div>
    </div>
  )
}
export default App
