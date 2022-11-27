const React = require("react")

class Show extends React.Component {
    render () {
        const { title, entry, shipIsBroken, timestamps} = this.props.log
        return (
            <div>
               
                <title>TARDIS Log</title>

                <h1> {title} </h1>
                <p><strong>Log Entry:</strong> {entry}</p>
                <p><strong>Ship Status:</strong> {shipIsBroken ? "Ship is not functioning properly. Needs maintenance." : " Ship is functioning properly ✔️" }</p>
                <p>Date Created: {timestamps}</p>
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