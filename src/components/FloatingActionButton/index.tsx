import Fab from '@mui/material/Fab'
import FloatActionBtn from '@/interfaces/float-action-btn'
import { Typography } from '@mui/material'

const FloatingActionButtons = ({ icon, text, onClick }: FloatActionBtn) => {
    return (
        <div className="float-container" onClick={(event) => onClick(event)}>
            <Fab className="btn-float" aria-label="add">
                <div>{icon}</div>
            </Fab>
            {text && <Typography className="text up">{text}</Typography>}
        </div>
    )
}

export default FloatingActionButtons
