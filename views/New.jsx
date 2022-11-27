const React = require("react")

class New extends React.Component {
    render() {
        return (
            <div>
                <title>Create New TARDIS Log</title>
                <nav>
                    <a href="/logs">Home</a>
                </nav>
                <h1>Create New Log</h1>
                <br />
                <form action="/logs" method="POST">
                    <strong>Title:</strong> <input type="text" name="title"/><br />
                    <br />
                   <strong>Entry:</strong> <br /> 
                    <textarea name="entry" cols="30" rows="10"></textarea><br />
                    <br />
                    <strong>Ship Status:</strong>
                     <input type="checkbox" name="shipIsBroken"/> <br />
                    <br />
                    <input type="submit" value="Create New Log" />
                </form>
            </div>
        )
    }
}

// export module
module.exports = New;