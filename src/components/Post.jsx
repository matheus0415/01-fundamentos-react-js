import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
export function Post({author, publishedAt} ) {
return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:11:00">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet,</p>
        <p> consectetur adipisicing elit. Obcaecati aspernatur quidem maxime!</p>
        <p>Debitis suscipit ipsum expedita perferendis totam culpa quo laboriosam, deserunt facere ipsa quidem, molestiae, aut sed saepe dolores?</p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
        placeholder='Deixe um comentário'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}