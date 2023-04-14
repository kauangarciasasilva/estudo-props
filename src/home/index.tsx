import { render } from "@testing-library/react";
import React from "react";
import TestComponents from "./components/test-components";
interface Props{
    param:string;
    alert:any;
}
export default class HomeView extends React.Component<Props>{
    render(){
        return(
            <div>
                <h1>HomeView</h1>
                <TestComponents laranja={this.props.param}/>
            </div>
        )
    }
}