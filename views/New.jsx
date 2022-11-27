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
                    title: <input type="text" name="title"/><br />
                    <br />
                    entry: <textarea name="entry" cols="30" rows="10"></textarea><br />
                    <br />
                    Ship Is Broken:
                     <input type="checkbox" name="shipIsBroken"/> <br />
                    <br />
                    <input type="submit" value="Create Log" />
                </form>
            </div>
        )
    }
}

// export module
module.exports = New;