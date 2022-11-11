import { useNavigate } from "react-router-dom"

const InfoBlock = ({ children }) => (
    <div className="info_panel grid">
        <div className="block_info_panel grid">
            {children}
        </div>
    </div>
)

const InfoBlockText = {
    H1 :({ children }) => <h1 className="h1">{children}</h1>,
    P : ({ children }) => <p className="p">{children}</p>,
    Button : ({ children }) => {
        const navigate = useNavigate()
        return <button onClick={()=> navigate('/catalog')}>{children}</button>
    }
}

export { InfoBlock, InfoBlockText }