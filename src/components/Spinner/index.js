import Loading from '../../assets/images/loading.gif';
import './Spinner.scss';


const Spinner = () => {
    return (
        <>
            <img src={Loading} className='spinner' />
        </>
    )
}
export default Spinner;