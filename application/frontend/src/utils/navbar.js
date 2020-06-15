const navbar = ({ }) => {

    const factory = () => {
        return (
            <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-collapse justify-content-end navbar-light bg-primary">
                <a className="nav-link text-white" href="/">Home</a>
                <a className="nav-link text-white" href="/about">About Us</a>
            </nav>
        )
    }

    return (
        <div>{ factory() }</div>
    )
}

export default navbar; 
