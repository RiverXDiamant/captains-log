const React = require("react")

class New extends React.Component {
    render() {
        return (
            <div>
                <title>Create New Log</title>
                <nav>
                    <a href="/logs">Home</a>
                </nav>
                <h1>Create New Captain's Log</h1>
                <br />
                <form action="/logs" method="POST">
                    Title: <input type="text" name="title"  /><br />
                    <br />
                    Entry: <input type="textarea" name="entry" /><br />
                    <br />
                    Ship Is Broken: <input type="checkbox" name="shipIsBroken"/><br />
                    <br />
                    <input type="submit" name="" value="Create Captain's Log"/>
                </form>
            </div>
        )
    }
}

module.exports = New