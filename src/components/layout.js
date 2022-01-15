import * as React from "react";
import {Link} from "gatsby";

const Layout = ({pageTitle, children}) => {
    return (
        <div claSS="container bg-slate-600">
            <nav>
               <ul class="grid grid-cols-2">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul> 
            </nav>
            <main>
                <h1 className="text-3xl font-bold underline">{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout