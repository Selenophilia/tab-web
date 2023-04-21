import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '../../components/Button'
import ArrowIcon from '../../assets/Arrow.svg'

const GrayContainer = () => {
    const handleBtn = () => {
        window.open('https://www.tabnz.org/safer-betting', '_blank')
    }
    return (
        <Box
            component="div"
            className="overlapping-containers"
            id="socialresponsibility-anchor"
        >
            <Box component="div" className="gray-container -three" />
            <Box component="div" className="gray-container -two" />
            <Box component="div" className="gray-container -one" />
            <Box component="div" className="gray-container">
                <Box component="div" className="gray-content">
                    <Box component="div" className="left">
                        <Typography className="heading">
                            TAB NZ takes our responsibility to minimise harm
                            seriously. Whether it's through our Safer Betting
                            tools, our customer support, or proactive
                            engagement, we go beyond the minimum standards to
                            keep Kiwis safe when placing a bet.
                        </Typography>
                        <Typography className="sub">*2021/22 season</Typography>
                    </Box>
                    <Box component="div" className="right">
                        <Button
                            onClick={handleBtn}
                            color="white"
                            variant="rounded"
                            text="Learn More"
                            icon={<ArrowIcon />}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default GrayContainer
