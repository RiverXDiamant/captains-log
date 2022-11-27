const React = require("react")

class Show extends React.Component {
    render () {
        const { title, entry, shipIsBroken, timestamps} = this.props.log
        return (
            <div>
               
                <title>Captain's Log</title>

                <h1> The {title} Captain's Log</h1>
                <p>Log Entry: {entry}</p>
                <p>Ship Is Broken: {shipIsBroken}</p>
                <p>Date Created: {timestamps}</p>
                <br />
                <nav>
                    <a href="/logs">Back</a>
                </nav>

            </div>
        );
    }
}

module.exports = Show; 