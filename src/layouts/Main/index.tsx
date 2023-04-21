import React from 'react'
import PropTypes from 'prop-types'
import ChildrenTypes from '../../interfaces/children'

const Main = ({ children }: ChildrenTypes) => {
    return (
        <div>
            <main className="root">{children}</main>
        </div>
    )
}

Main.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

export default Main
