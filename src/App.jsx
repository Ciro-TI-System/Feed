import { Post } from './Post'
import './styles.css';

export function App() {
  return (
    <div>
      <h1> Posts do APP </h1>
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
