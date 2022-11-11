import { Link } from "react-router-dom"


const reset_a_style = {
    textDecoration: 'none'
}

export const PageLink = ({ className, children, path, onClick = () => null, resetStyle = true }) => {
    return <Link to={path}
                 className={className}
                 style={resetStyle ? reset_a_style : null}
                 onClick={onClick}
    >{children}</Link>
}