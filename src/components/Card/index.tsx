import CardProps from '@/interfaces/card'
import {
    Card,
    CardActions,
    CardContent,
    Typography,
    CardMedia,
} from '@mui/material'

const CardComponent = ({
    title,
    description,
    subTitle,
    subDescription,
    footer,
    footerTitle,
    withImage,
    img,
}: CardProps) => {
    return (
        <Card sx={{ minWidth: 275 }} className="card">
            {!withImage ? (
                <CardContent className="card-header">
                    <Typography className="card-title" gutterBottom>
                        {`${title}:`}
                    </Typography>
                    <Typography variant="h5" className="card-body">
                        {`${description}`}
                    </Typography>
                    <Typography
                        className="card-title"
                        gutterBottom
                        sx={{ mt: 1.5 }}
                    >
                        {`${subTitle}:`}
                    </Typography>
                    <Typography variant="h5"> {`${subDescription}`}</Typography>
                </CardContent>
            ) : (
                <CardMedia
                    className="card-img"
                    component="img"
                    image={img?.src}
                    height={img?.height}
                    width={img?.width}
                    alt="green iguana"
                />
            )}
            <CardActions className="card-footer">
                {footerTitle && (
                    <Typography
                        className="card-title"
                        gutterBottom
                        sx={{ mt: 1.5, mb: 1.5 }}
                    >
                        {`${footerTitle}`}
                    </Typography>
                )}
                {footer}
            </CardActions>
        </Card>
    )
}

export default CardComponent
