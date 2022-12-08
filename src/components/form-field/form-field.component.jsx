import './form-field.style.scss';

const FormField = ({onInputChange, onButtonSubmit}) => {
    return(
    <div className='container-form'>
        <h3>I can detect faces in your picture. Click and try. </h3>
        <div className='input-row'>
            <input type='text' placeholder='Put the url' onChange={onInputChange} onKeyPress={(e) => e.key == 'Enter' && onButtonSubmit()}/>
            <button onClick={onButtonSubmit} >Detect</button>
        </div>
    </div>
    )
};

export default FormField;