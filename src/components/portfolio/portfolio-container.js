import React, { Component } from "react"
import moment from "moment"


export default class PortfolioContainer extends Component {
    constructor() {
        super()
        
        console.log("Portfolio container has rendered")
    }

    render(){
        return (
            <div>
                <h2>Portfolio items go here, update...</h2>

                <portfolio-item />
            </div>
        )
    }
}
