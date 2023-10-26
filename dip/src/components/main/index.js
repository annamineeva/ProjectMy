import { Route, Switch } from "react-router-dom"
import Menu from "../menu"
import Stocks from "../stocks"
import Contacts from "../contacts"
import Header from "../header"
import App from "../../App"
import Top from "../Top/top"

const Main = () => {

    return (
        <div>
           <Switch>
              <Route exact path = '/' component = {Top}></Route>
              <Route path = '/menu' component = {Menu}></Route>
              <Route path = '/contacts' component = {Contacts}></Route>
              <Route path = '/stocks' component = {Stocks}></Route>
           </Switch>
        </div>
    )
}

export default Main