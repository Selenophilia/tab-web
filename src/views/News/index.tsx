import { Typography } from '@mui/material'
import Button from '@/components/Button'
import Card from '@/components/Card'
import ArrowIcon from '../../assets/Arrow.svg'
import { news } from '@/pages/api/mock'
import { CardContent } from '@mui/material'
const News = () => {
    return (
        <div className="news" id="news-anchor">
            <div className="content">
                <div className="underline" />
                <div className="content-body">
                    <div className="headings">
                        <Typography className="text">
                            Catch up on the latest news from TAB NZ
                        </Typography>
                        <Button
                            className="learn-more"
                            color="white"
                            text="Learn More"
                            icon={<ArrowIcon />}
                        />
                    </div>
                    <div className="card-container">
                        {news.map((content) => (
                            <Card
                                key={content.id}
                                withImage
                                img={{
                                    src: content.image,
                                }}
                                footer={
                                    <>
                                        <CardContent className="news-content">
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                            >
                                                {content.date}
                                            </Typography>
                                            <div className="news-body">
                                                <Typography
                                                    component="div"
                                                    className="news-text"
                                                >
                                                    {content.title}
                                                </Typography>
                                                <div className="avatar"></div>
                                            </div>
                                        </CardContent>
                                    </>
                                }
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default News
