import Typography from '@mui/material/Typography'
import ImageContainer from '@/components/ImageContainer/ImageContainer'
import Button from '@/components/Button'
import GrayContainer from '@/components/GrayContainers'

import ArrowIcon from '../../assets/Arrow.svg'
import HoseImage from '../../assets/horse.jpg'

const About = () => {
    const handleBtn = () => {
        window.open('https://www.tabnz.org/about-us', '_blank')
    }

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
                            onClick={handleBtn}
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
