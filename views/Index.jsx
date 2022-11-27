const React = require("react")

class Index extends React.Component {
    render() {
        const { logs } = this.props
        return (
            <div>
    
                <title>Index Page</title>
                <h1>Captain's Log Index</h1>
                <nav>
                    <a href="/logs/new">Create Captain's Log</a>
                </nav> 
                <ul>
                    {
                        logs.map((log) => {
                            return(
                                <li>
                                    Title: <a href={`/logs/${log._id}`}> {log.title}</a>
                                    <br />
                                    <br />
                                <a href={`/logs/${log._id}/edit`}>[Edit This Log Entry]</a>
                                    <br />
                                <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                                    <br />
                                    <input type="submit" value="DELETE" />
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