import cx from 'classnames'
import Button from '../../interfaces/button'

const Button = ({ color, variant, className, text, icon }: Button) => {
    let colorClass = ''
    let variantClass = ''

    switch (color) {
        case 'white':
            colorClass = 'btn-white '
            break
        case 'inherit':
            colorClass = 'btn-inherit '
            break
        default:
            colorClass = 'btn-blue'
            break
    }

    switch (variant) {
        case 'outlined':
            variantClass = 'btn-outlined '
            break
        case 'ghost':
            variantClass = 'btn-ghost '
            break
        case 'rounded':
            variantClass = 'btn-rounded '
            break
        case 'squared':
            variantClass = 'btn-squared '
            break
        default:
            variantClass = 'btn-default'
            break
    }

    return (
        <button
            className={cx(
                'btn-root',
                { [`${variantClass}`]: true },
                { [`${colorClass}`]: true },
                { [`${className}`]: true },
                { 'icon-btn': icon ? true : false },
            )}
        >
            {icon ? (
                <div className="icon-container">
                    <span>{text}</span>

                    <div className="icon">{icon}</div>
                </div>
            ) : (
                <span>{text}</span>
            )}
        </button>
    )
}

export default Button
