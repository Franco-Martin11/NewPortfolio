import { Route, Switch } from "wouter";
import { Prueba2, PruebaPage } from "../components";

const Routes = () => {
  //   const [location, navigate] = useLocation();
  //   const dataMock = location.split("/");j
  return (
    <>
      <Switch>
        <Route path="/project/:id">
          {(params) => <PruebaPage params={params} />}
        </Route>
        <Route path="/project">
          <PruebaPage params={{ id: "caca" }} />
        </Route>
        <Route path="/project/:id">
          {(params) => <PruebaPage params={params} />}
        </Route>
        <Route path="/prueba" component={Prueba2} />
      </Switch>
    </>
  );
};

export default Routes;
