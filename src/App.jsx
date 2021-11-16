import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LayoutInicial from 'layouts/LayoutInicial';
import LayoutLogin from 'layouts/LayoutLogin';
import Index from 'pages/Index';
import NuevaVenta from 'pages/ventas';
import Login from 'pages/Login';
import 'styles/stylesVentas.css';
import RegisProduc from 'pages/RegisProduc';


function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path='/nuevaventa'>
            <LayoutInicial>
              <NuevaVenta />
            </LayoutInicial>
          </Route>
          <Route exact path='/adminventas'> {/*comentario: crear cada Route para la respectiva pagina */}
            <LayoutInicial>
              <NuevaVenta />
            </LayoutInicial>
          </Route>
          <Route exact path='/productos'>
            <LayoutInicial>
              <RegisProduc />
            </LayoutInicial>
          </Route>
          <Route exact path='/Login'>
            <LayoutLogin>
              <Login />
            </LayoutLogin>
          </Route>
          <Route exact path='/'>
            <LayoutInicial>
              <Index />
            </LayoutInicial>
          </Route>

        </Switch>
      </Router>


    </div>
  );
}

export default App;