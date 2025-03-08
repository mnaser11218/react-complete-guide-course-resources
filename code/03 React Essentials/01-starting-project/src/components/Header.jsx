import Img from '../assets/react-core-concepts.png'

export default function Header(){
    const reactDescription = ['Core', 'Essential', 'Basic']
    const genRandomNum = (max)=> Math.floor(Math.random() *(max+1) )
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