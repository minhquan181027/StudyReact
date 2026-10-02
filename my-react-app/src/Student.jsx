import PropTypes from 'prop-types';

function Student(props) {
    return (
        <>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
};

export default Student;