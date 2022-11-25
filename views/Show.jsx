const React = require("react")

class Show extends React.Component {
    render () {
        const { logs} = this.props
        return (
            <div>
               
                <title>Captains Log Show Page</title>

                <h1> The {`${logs.title}`} Captain's Log</h1>
                <p>Log Entry: {entry}</p>
                <p>Ship Is Broken: {shipIsBroken}</p>
                <p>Date Created: {timestamps}</p>
                <br />
                <nav>
                    <a href="/logs">Back</a>
                </nav>

            </div>
        )
    }
}

module.exports = Show; 