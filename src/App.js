import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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

function App() {
  return (
    <Router>
      <div className="App">

        {/* Links da aplicação */}

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/admin">Admin</Link></li>
        </ul>
        <hr />

        {/* quando componente ou render responde por uma rotas */}

        <Route exact path="/" component={Home} /> 
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/users" component={Users} />
        <Route path="/admin" render = {() => <div>Admin area</div> } /> {/* modelo diferente */}
        <Route children ={() => <div> Vai está aqui para sempre...</div>}/> {/* modelo diferente */}

      </div>
    </Router>
  );
}

export default App;
