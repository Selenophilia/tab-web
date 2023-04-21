import ImageContainer from '@/components/ImageContainer/ImageContainer'
import { Typography } from '@mui/material'
import rugby from '../../assets/Img6.jpg'
import SportImage from '../../assets/Img7.jpg'

const Banner = () => {
    return (
        <div className="banner">
            <div className="content">
                <div className="heading">
                    <div className="top-heading">
                        <Typography className="text">Fuelling</Typography>
                        <ImageContainer
                            src={rugby}
                            alt="rugby"
                            height={150}
                            width={143}
                        />
                        <Typography className="text">the</Typography>
                    </div>
                    <div className="mid-heading">
                        <ImageContainer
                            src={SportImage}
                            alt="rugby"
                            height={150}
                            width={143}
                        />
                        <Typography className="text">Future</Typography>
                    </div>
                </div>
                <div className="content-body">
                    <div className="bottom-heading">
                        <Typography className="sub-text">
                            of sport, racing and communities in New Zealand.
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
