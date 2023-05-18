import '../../styles/button.css';
const Button = ({placeholder, btnstyle}) => {
    return (
        <div className={`button ${btnstyle}`}>
            <span>{placeholder}</span>
            <i className='fa fa-arrow-right'></i>
        </div>
    );
}
 
export default Button;