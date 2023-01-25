import propTypes from 'prop-types';


export const Section = ({children, title}) => {
    return (
        <div>
            <h1>{title}</h1>
            <div>
                {children}
            </div>
        </div>
    )
};

Section.propTypes = {
    title: propTypes.string.isRequired
}


