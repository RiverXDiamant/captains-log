const React = require("react")
const moment = require("moment")


class Show extends React.Component {
    render () {
        const { title, entry, shipIsBroken} = this.props.log 
        return (
            <div>
               
                <title>TARDIS Log</title>

                <h1> {title} </h1>
                <p><strong>Log Entry:</strong> {entry}</p>
                <p><strong>Ship Status:</strong> {shipIsBroken ? "Ship is not functioning properly. Needs maintenance. 🛠️" : " Ship is functioning properly ✔️" }</p>
                <p style={{color: "blue"}}>Date of Entry: {moment().format('MMMM Do YYYY, h:mm:ss a' )} </p>
                <br />
                <nav>
                    <a href="/logs">Back</a>
                </nav>

            </div>
        );
    }
}

// export module
module.exports = Show; 