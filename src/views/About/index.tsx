import Typography from '@mui/material/Typography'
import ImageContainer from '../../components/ImageContainer/ImageContainer'
import HoseImage from '../../assets/horse.jpg'
import Button from '../../components/Button'
import ArrowIcon from '../../assets/Arrow.svg'
import GrayContainer from '@/components/GrayContainers'

const About = () => {
    return (
        <div className="about-section">
            <div className="rectangle" />
            <div className="content" id="aboutus-anchor">
                <div className="left">
                    <div className="left-content">
                        <div className="faded" />
                        <div className="container">
                            <ImageContainer
                                alt="image"
                                height={205}
                                width={205}
                                src={HoseImage}
                            />
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="right-content">
                        <div className="underline" />
                        <Typography className="title">About us</Typography>
                        <Typography className="description">
                            TAB NZ is deeply ingrained in New Zealand's culture.
                            As New Zealand’s sole betting agency, every dollar
                            bet with TAB NZ contributes to fuelling the future
                            of racing and sporting organisations across New
                            Zealand.
                        </Typography>
                        <Button
                            color="white"
                            variant="rounded"
                            text="Learn More"
                            icon={<ArrowIcon />}
                        />
                    </div>
                </div>
            </div>
            <GrayContainer />
        </div>
    )
}

export default About
