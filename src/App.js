import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route,  NavLink } from 'react-router-dom';

{
  /*
  - (BrowserRouter) => componente que encapsula os componetes relacionado as rotas
    - componente inicial
    - ter que ter um unico elemento filho
    - ter as rotas
  
  - (Route) => quando um determinado path acontece, ele irá chamar um componente ou renderizar alguma coisa  
    - chama o componente ou função de rederização
    - path - caminho que ele espera que seja chamado no navegador
    - component - componente a ser renderizado
    - render - função de redenrização
    - children - sempre vai redenrizar, indiferente da url que vai colocar
    - exact - renderizar somente esse componente, sem "concatenar com outros..."
    - strict - so redenriza se o link for exatamente como está na rota.
  */
}

const Home = () => <div> Home Page</div>
const About = () => <div> About Page</div>
const Contact = () => <div> Contact Page</div>
const Users = ({ match }) => <div> {match.url} </div>

const Params = (props) => {

  let { match, location, history } = props;
  console.log(match);
  console.log(location);
  console.log(history);

  return (
    <div>Params: { match.params.name } </div>
  )
}

function App() {
  return (
    <Router>
      <div className="App">

        {/* Links da aplicação */}

        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/users">Users</NavLink></li>
          <li><NavLink to="/admin">Admin</NavLink></li>
          <li><NavLink to="/params">Params</NavLink></li>
        </ul>
        <hr />

        {/* quando componente ou render responde por uma rotas */}

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/users" component={Users} />
        <Route path="/admin" render={() => <div>Admin area</div>} /> {/* modelo diferente */}
        <Route path="/params/:name" component={Params} />

      </div>
    </Router>
  );
}

export default App;
