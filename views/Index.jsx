const React = require("react")

class Index extends React.Component {
    render() {
        const { logs } = this.props
        return (
            <div>
    
                <title>Index Page</title>
                <h1>Captain Log Index</h1>
                <nav>
                    <a href="/new">Create Captain's Log</a>
                </nav> 
                <ul>
                    {
                        logs.map((log) => {
                            return(
                                <li>
                                    Title: <a href="/show"> {log.title}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index;