const React = require("react")
const DefaultLayout = require("./layout/Default")

class Edit extends React.Component {
    render() {
        return(
            <DefaultLayout title="Edit TARDIS Log">
                
                
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
            </DefaultLayout>
        )
    }
}

// module export
module.exports = Edit;