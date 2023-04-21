import { useState } from 'react'
import cx from 'classnames'
import TabLogo from '../../assets/tabLogo.png'
import ImageContainer from '../ImageContainer/ImageContainer'
import LinkIcon from '../../assets/link.svg'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import { MenuItem, Menu, MenuList } from '@mui/material'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'

const AppHeader = ({}) => {
    const [isMenuOpen, setMenuOpen] = useState<null | HTMLElement>(null)

    const handleClick = (
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
            className="nav-item"
            onClick={(event: React.MouseEvent<HTMLLIElement>) =>
                handleClick(event, title)
            }
        >
            <a>{title}</a>
        </li>
    )

    const handleMenu = (event: any) => {
        setMenuOpen(event.currentTarget)
    }

    const handleClose = () => {
        setMenuOpen(null)
    }
    return (
        <header className="page-header" id="top-anchor">
            <nav className={cx('nav-bar')}>
                <div className="nav-logo">
                    <a className="icon" href="/">
                        <ImageContainer
                            alt="logo"
                            src={TabLogo}
                            width={100}
                            height={50}
                        />
                    </a>
                </div>
                <ul className={cx('nav-list')}>
                    {navItem('About us')}
                    {navItem('Social Responsibility')}
                    {navItem('Careers')}
                    {navItem('News')}
                    {navItem('Grants')}
                    {navItem('Reports')}
                </ul>
                <div className="nav-btn">
                    <div className="link">
                        <a href="https://www.tab.co.nz/" target="_blank">
                            tab.co.nz
                        </a>
                        <LinkIcon />
                    </div>
                    <div className="menu">
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            sx={{ mr: 2 }}
                            onClick={handleMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={isMenuOpen}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(isMenuOpen)}
                            onClose={handleClose}
                        >
                            <Paper sx={{ width: 320, maxWidth: '100%' }}>
                                <MenuList>
                                    <MenuItem
                                        className="nav-item"
                                        onClick={(event) => {
                                            handleClick(event, 'About us')
                                            handleClose()
                                        }}
                                    >
                                        About us
                                    </MenuItem>
                                    <MenuItem
                                        className="nav-item"
                                        onClick={(event) => {
                                            handleClick(
                                                event,
                                                'Social Responsibility',
                                            )
                                            handleClose()
                                        }}
                                    >
                                        Social Responsibility
                                    </MenuItem>
                                    <MenuItem
                                        className="nav-item"
                                        onClick={(event) => {
                                            handleClick(event, 'Careers')
                                            handleClose()
                                        }}
                                    >
                                        Careers
                                    </MenuItem>
                                    <MenuItem
                                        className="nav-item"
                                        onClick={(event) => {
                                            handleClick(event, 'News')
                                            handleClose()
                                        }}
                                    >
                                        News
                                    </MenuItem>
                                    <MenuItem
                                        className="nav-item"
                                        onClick={(event) => {
                                            handleClick(event, 'Grants')
                                            handleClose()
                                        }}
                                    >
                                        Grants
                                    </MenuItem>
                                    <MenuItem
                                        className="nav-item"
                                        onClick={(event) => {
                                            handleClick(event, 'Reports')
                                            handleClose()
                                        }}
                                    >
                                        Reports
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem onClick={handleClose}>
                                        <div className="link nav-item">
                                            <a href="/">tab.co.nz</a>
                                            <LinkIcon />
                                        </div>
                                    </MenuItem>
                                </MenuList>
                            </Paper>
                        </Menu>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default AppHeader
