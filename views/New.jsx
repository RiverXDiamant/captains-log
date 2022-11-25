const React = require("react")

class New extends React.Component {
    render() {
        return (
            <div>
                <form action="/logs" method="POST">
                    Title: <input type="text" name="title"  /><br />
                    <br />
                    Entry: <input type="textarea" name="entry" /><br />
                    <br />
                    Ship is Broken: <input type="checkbox" name="shipIsBroken"/><br />
                    <br />
                    <input type="submit" name="Submit" />
                </form>
            </div>
        )
    }
}

module.exports = New