const React = require("react")

class New extends React.Component {
    render() {
        return (
            <div>
                <form action="/logs" method="post">
                    <input type="text" name="title" /><br />
                    <input type="textarea" name="entry" /><br />
                    <input type="checkbox" name="shipIsBroken"/><br />
                    <input type="submit" name="" />
                </form>
            </div>
        )
    }
}