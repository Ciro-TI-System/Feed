import { Header } from './components/Header'
import { Post } from './Post'
import './global.css';
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
       <Sidebar />
        <main>
          <Post
            author='Ciro Batista'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae placeat quam voluptas ratione, delectus ad corrupti quis error recusandae ipsa dicta aperiam iure aliquam nostrum reiciendis nulla dignissimos perspiciatis quisquam.'
          />
          <Post
            author='Kely Cristina'
            content='Um novo post bem legal!'
          />
        </main>
      </div>

    </div>
  )
}
