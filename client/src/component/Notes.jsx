import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import EditNote from "./EditNote";
import {BrowserRouter as Router,Route} from "react-router-dom";

function Notes({setIsLogin}){
    return (
        <Router>
        <div>
            <Header setIsLogin={setIsLogin} />
            <section>
                <Route path="/" component={Home} exact />
                <Route exact path="/edit/:id" component={EditNote} />
            </section>
            <Footer/>
        </div>
        </Router>
    )
}

export default Notes;
