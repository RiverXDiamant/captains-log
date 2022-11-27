const React = require("react")

class Index extends React.Component {
    render() {
        const { logs } = this.props
        return (
            <div>
    
                <title>Captain's Log Index Page</title>
                <h1>TARDIS Log Index</h1>
                <nav>
                    <a href="/logs/new">Create New Log</a>
                </nav> 
                <ul>
                    {
                        logs.map((log) => {
                            return(
                                <li>
                                    Title: <a href={`/logs/${log._id}`}> {log.title}</a>
                                    <br />
                                    <br />
                                <a style={{color: "brown"}} href={`/logs/${log._id}/edit`}>[Edit Log Entry]</a>
                                    <br />
                                <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                                    <br />
                                    <input style={{color: "red"}} type="submit" value="DELETE" />
                                    <br />
                                    <br />
                                </form>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

// export module
module.exports = Index;