import Layout from '../components/Layout/Layout'
import Navbar from '../components/Navbar/Navbar'
import Todo from '../components/Todo/Todo'

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <Todo/>
    </Layout>
  )
}
