import cx from 'classnames'
import FloatingActionButtons from '@/components/FloatingActionButton'
import ImageContainer from '@/components/ImageContainer/ImageContainer'
import { Typography } from '@mui/material'
import FBIcon from '../../assets/Facebook.svg'
import LinkedIcon from '../../assets/Linkedin.svg'
import TwitterIcon from '../../assets/Twitter.svg'
import TabLogo from '../../assets/tabLogo.png'
import { ArrowUpward } from '@mui/icons-material'

const Footer = () => {
    const handleBtnClick = (
        event: React.MouseEvent<HTMLLIElement>,
        title: string,
    ) => {
        let tag = `${title}`.replace(/\s/g, '').toLocaleLowerCase()
        const anchor = (
            (event.target as HTMLLIElement).ownerDocument || document
        ).querySelector(`#${tag}-anchor`)

        if (anchor) {
            anchor.scrollIntoView({
                block: 'center',
                behavior: 'smooth',
            })
        }
    }
    const navItem = (title: string) => (
        <li
            className="footer-item"
            onClick={(event: React.MouseEvent<HTMLLIElement>) =>
                handleBtnClick(event, title)
            }
        >
            <a>{title}</a>
        </li>
    )

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const anchor = (
            (event.target as HTMLDivElement).ownerDocument || document
        ).querySelector('#top-anchor')

        if (anchor) {
            anchor.scrollIntoView({
                block: 'center',
                behavior: 'smooth',
            })
        }
    }
    return (
        <div className="footer">
            <div className="content">
                <div className="left">
                    <div className="footer-logo">
                        <ImageContainer
                            alt="logo"
                            src={TabLogo}
                            width={125}
                            height={50}
                        />
                    </div>
                    <Typography className="description">
                        TAB NZ is deeply ingrained in New Zealand's culture,
                        and, by betting with TAB NZ on racing or sport, you
                        contribute to fueling the future of racing codes and
                        sporting organisations across New Zealand.
                    </Typography>
                </div>
                <div className="right">
                    <div className="inner-right">
                        <ul className={cx('footer-nav')}>
                            {navItem('About us')}
                            {navItem('Social Responsibility')}
                            {navItem('Careers')}
                            {navItem('News')}
                            {navItem('Grants')}
                            {navItem('Reports')}
                        </ul>
                        <Typography className="trademark">
                            © 2023 - TAB New Zealand
                        </Typography>
                    </div>

                    <div className="inner-right">
                        <ul className={cx('footer-nav')}>
                            {navItem('Privacy Policy')}
                            {navItem('Terms and Condition')}
                        </ul>

                        <div className="socials">
                            <Typography className="text">Socials</Typography>
                            <div className="icon-container">
                                <FBIcon
                                    onClick={() =>
                                        window.open(
                                            'https://www.facebook.com/TAB/',
                                            '_blank',
                                        )
                                    }
                                />
                                <TwitterIcon
                                    onClick={() =>
                                        window.open(
                                            'https://twitter.com/tab_racing',
                                            '_blank',
                                        )
                                    }
                                />
                                <LinkedIcon />
                            </div>
                        </div>
                        <Typography className="owner">
                            Created by The Web Guys
                        </Typography>
                    </div>

                    <div className="inner-right">
                        <div className="inner-content">
                            <FloatingActionButtons
                                icon={
                                    <>
                                        <ArrowUpward />
                                    </>
                                }
                                text="Back to top"
                                onClick={handleClick}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer
