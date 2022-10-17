import { useNavigate } from "react-router-dom"

export const PageLink = ({ className, children, path, onClick = () => null, reload = false }) => {
    const navigate = useNavigate();
    return <div className={className}
                onClick={()=>{
                    onClick()
                    navigate(path)
                    if (reload)
                        navigate(0)
                }}
    >{children}</div>
}