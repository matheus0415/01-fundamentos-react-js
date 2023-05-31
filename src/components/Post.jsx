import styles from './Post.module.css'
export function Post() {
return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/matheus0415.png"/>
          <div className={styles.authorInfo}>
            <strong>Matheus Santos</strong>
            <span>Software Engineer</span>
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
    </article>
  )
}