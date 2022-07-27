import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/17316392?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Jakeliny Silva</strong>
            <span>Web Developer</span>
          </div>
          <time title='27 de Julho às 09:11' dateTime='2022-07-27 09:11:50'>Publicado há 1h</time>
        </div>
      </header>
      <div className={styles.content}>
        <p> Fala galeraa 👋 </p>
        <p> 
          Acabei de subir mais um projeto no meu portifa. 
          É um projeto que fiz no NLW Return, evento da Rocketseat. 
          O nome do projeto é DoctorCare 🚀
        </p>
        <p> <a href=""> 👉 jakeliny.design/doctorcare </a></p>
        <p>
        <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a> 
        </p>
      </div>
    </article>
  )
}