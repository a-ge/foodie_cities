import React, { Component } from "react";

class Main extends Component {
    constructor() {
        super()
        this.state = {
            restaurants: null
        }
    }

    componentDidMount() {
        const API_KEY = process.env.REACT_APP_FB_ACCESS_TOKEN;
        fetch(`https://=${API_KEY}`) 
            .then(response => response.json())
            .then(data => {
                this.setState({
                    events: data
                })
            })

    }




    render() {
        const allResponse = this.state.allFreeEvents == null ? "loading..." : this.state.allFreeEvents.events;
        console.log("This is the state" + this.state.allFreeEvents);

        if (allResponse === "loading...") {
            return (
                <div>
                    <div className="all-free-events">
                        <h2> loading...</h2>
                    </div>
                </div>
            )

        } else {

            const eventsArray = allResponse;
            console.log("This is events" + eventsArray);
            let data = [];
            for (let i = 0; i < eventsArray.length; i++) {
                data.push(<li><h2><span onClick={() => eventsArray[i].name.text}>{eventsArray[i].name.text}</span></h2></li>)
            }

            return (
                <div className="event-card" >
                    {/* <input
                        type="text"
                        name="results"
                        placeholder="Search Here"
                        value={this.state.results}
                        onChange={this.handleChange}
                    /> */}
                    {/* <button onClick={this.searchData.bind(this)}>Search!</button> */}

                    <div className="all-free-events">
                        <h2>List of all Bay Area free events here</h2>
                        <ul>{data}</ul>
                        <div>
                            {/* {this.state.detail} */}
                        </div>
                        {/* <div>{this.state.allFreeEvents.events[0].name.text}</div> */}
                    </div>

                </div>
            );
        }
    }
}


export default Main
