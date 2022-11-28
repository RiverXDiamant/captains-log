const React = require("react")

class Edit extends React.Component {
    render() {
        return(
            <div>
                <title>Edit Captain's Log</title>
                <h1>Edit TARDIS Log </h1>
                <form action={`/logs/${this.props.log._id}?_method=PUT`}method="POST">
                    title: <input type="text" name="title" defaultValue={this.props.log.title}/><br />
                    <br />
                    entry: <textarea name="entry" cols="30" rows="10" defaultValue={this.props.log.entry}></textarea><br />
                    <br />
                    Ship Is Broken:
                    { this.props.log.shipIsBroken? <input type="checkbox" name="shipIsBroken"  defaultChecked />: <input type="checkbox" name="shipIsBroken" /> }<br />
                    <br />
                    <input type="submit" value={`Edit ${this.props.log.title}`} />
                </form>
           </div>
        )
    }
}

// module export
module.exports = Edit;