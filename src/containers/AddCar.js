    // containers/Home.js
    import { connect } from 'react-redux'
    import AddCar from '../components/AddCar'
    // import the actions we'll need to provide to this "dumb" Home component
    import { addCar } from '../redux/actions'

    // added this function so we can send data FROM our component
    const mapDispatchToProps = (dispatch) => {
        return {
            addCar: (car) => dispatch(addCar(car)),
        }
    }

    export default connect(null, mapDispatchToProps)(AddCar)