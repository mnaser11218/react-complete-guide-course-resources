import { Title } from '@mui/icons-material'
import Img from './assets/react-core-concepts.png'
import { CORE_CONCEPTS } from './data'


const reactDescription = ['Core', 'Essential', 'Basic']
const genRandomNum = (max)=> Math.floor(Math.random() *(max+1) )

function CoreConcepts(props){
  const {image, title, description}= props
return(
  <li>
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </li>
)
}

function Header(){
  const description = reactDescription[genRandomNum(reactDescription.length-1)]
  return (
    <header>
    <img src={Img} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
     {description} React concepts you will need for almost any app you are
      going to build!! ! 
    </p>
  </header>
  )
}





function App() {
  return (
    <div>
     <Header/>
      <main>
        <section id="core-concepts">
        <ul>
          <CoreConcepts {...CORE_CONCEPTS[0]}/>
          <CoreConcepts {...CORE_CONCEPTS[1]} />
          <CoreConcepts {...CORE_CONCEPTS[2]} />
        </ul>
        </section>
        <h2>Time to get started!!</h2>
      </main>
    </div>
  );
}

export default App;
