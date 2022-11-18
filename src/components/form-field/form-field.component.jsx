import './form-field.style.scss';

const FormField = () => {
    return(
    <div className='container-form'>
        <h3>I can detect faces in your picture. Click and try. </h3>
        <form className='input-row'>
            <input type='text' placeholder='Put the url'/>
            <button>Detect</button>
        </form>
    </div>
    )
};

export default FormField;