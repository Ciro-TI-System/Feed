import { Header } from './components/Header'
import { Post } from './Post'
import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <Post
        author='Ciro Batista'
        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae placeat quam voluptas ratione, delectus ad corrupti quis error recusandae ipsa dicta aperiam iure aliquam nostrum reiciendis nulla dignissimos perspiciatis quisquam.'
      />
      <Post
        author='Kely Cristina'
        content='Um novo post bem legal!'
      />
    </div>
  )
}
