import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ImageContainer from '@/components/ImageContainer/ImageContainer'
import HeroImage from '@/assets/heroimg.jpg'
import FloatingActionButtons from '@/components/FloatingActionButton'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import Button from '@/components/Button'
import ArrowIcon from '../../assets/Arrow.svg'

const HeroSection = () => {
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const anchor = (
            (event.target as HTMLDivElement).ownerDocument || document
        ).querySelector('#aboutus-anchor')

        if (anchor) {
            anchor.scrollIntoView({
                block: 'center',
                behavior: 'smooth',
            })
        }
    }

    const handleBtn = () => {
        window.open('https://www.tab.co.nz/', '_blank')
    }

    return (
        <Box component="div" className="hero-section">
            <Box component="div" className="shadow">
                <div className="container">
                    <div className="content">
                        <Typography className="text">
                            Fuelling the future of
                        </Typography>
                        <div className="text">
                            <div className="text-cont">
                                <ImageContainer
                                    alt="sport"
                                    height={72}
                                    width={72}
                                    src={HeroImage}
                                />
                                <Typography className="text sport">
                                    Sport
                                </Typography>
                            </div>
                            <Typography className="text">
                                ,<span className="underline">racing </span> and
                                <span className="underline">communities</span>
                            </Typography>
                        </div>
                        <Typography className="text">in New Zealand</Typography>
                    </div>
                    <div className="btn-group">
                        <FloatingActionButtons
                            icon={
                                <>
                                    <ArrowDownwardIcon />
                                </>
                            }
                            onClick={handleClick}
                        />
                        <Button
                            onClick={() => handleBtn()}
                            color="white"
                            variant="rounded"
                            text="Learn More"
                            icon={<ArrowIcon />}
                        />
                    </div>
                </div>
            </Box>
        </Box>
    )
}

export default HeroSection
