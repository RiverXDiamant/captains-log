const React = require("react")
const DefaultLayout = require("./layout/Default")
class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="Create New TARDIS Log">
               
                <nav>
                    <a href="/logs">Home</a>
                </nav>
             
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
            </DefaultLayout>
        )
    }
}

// export module
module.exports = New;