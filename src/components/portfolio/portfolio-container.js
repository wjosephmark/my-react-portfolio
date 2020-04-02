import React, { Component } from "react"
import PortfolioItem from "./portfolio-item"
import moment from "moment"



export default class PortfolioContainer extends Component {
    constructor() {
        super()

        console.log("Portfolio container has rendered")
    }

    portfolioItems(){
        const data = ["Quip", "Eventbrite", "Ministry Safe"]

        return data.map(item => {
            return <PortfolioItem title ={item} url={"google.com"} />
        })
    }

    render(){
        return (
            <div>
                <h2>Portfolio items go here, update...</h2>

                {this.portfolioItems()}
            </div>
        )
    }
}
