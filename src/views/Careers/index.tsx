import { Typography, Box, Stack } from '@mui/material/'
import Button from '@/components/Button'
import Card from '@/components/Card'
import { careers } from '../../pages/api/mock'
import ArrowIcon from '../../assets/Arrow.svg'
import { East } from '@mui/icons-material'

const Careers = () => {
    return (
        <div className="careers" id="careers-anchor">
            <div className="heading">
                <Typography className="text">Join Us</Typography>
                <Box component="div" className="underline" />
            </div>

            <div className="content">
                <div className="left">
                    <Typography className="title">Careers</Typography>
                    <Typography className="description">
                        There's so much more to TAB NZ than meets the eye, so
                        why not scratch the surface and find out more. Are you
                        ready to join our team?
                    </Typography>
                    <Button
                        className="learn-more"
                        color="white"
                        text="Learn More"
                        icon={<ArrowIcon />}
                    />
                </div>
                <div className="right">
                    <Stack direction="row" spacing={2}>
                        {careers.map((career) => (
                            <Card
                                key={career.id}
                                title={'Job Title'}
                                description={career.jobTitle}
                                subTitle={'Location'}
                                subDescription={career.location}
                                footerTitle={career.posted}
                                footer={
                                    <>
                                        <Button
                                            className="card-btn"
                                            color="blue"
                                            text="Learn More"
                                            icon={
                                                <East
                                                    style={{
                                                        fontSize: '12px  ',
                                                    }}
                                                />
                                            }
                                        />
                                    </>
                                }
                            />
                        ))}
                    </Stack>
                </div>
            </div>
        </div>
    )
}

export default Careers
