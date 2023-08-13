import { Kanban } from './components/Kanban'
import { Navbar } from './components/Navbar'

export default function Home() {
  return (
    <div className ='flex'>
        <Navbar/>
        <Kanban/>
    </div>
  )
}
