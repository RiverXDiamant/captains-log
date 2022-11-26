const React = require("react")

class Edit extends React.Component {
    render() {
        return(
         
                <form action={`/fruits/${this.props.logs._id}?_method=PUT`} method="POST">
                    title: <input type="text" name="name" defaultValue={this.props.logs.title} /><br />
                    <br />
                    entry: <input type="text" name="color" defaultValue={this.props.logs.entry} /><br />
                    <br />
                    Ship Is Broken:
                    { this.props.logs.shipIsBroken? <input type="checkbox" name="shipIsBroken" defaultChecked />: <input type="checkbox" name="shipIsBroken"/> }<br />
                    <br />
                    <input type="submit" value={`Edit ${this.props.logs.title}`} />
                </form>
          
        )
    }
}

module.exports = Edit