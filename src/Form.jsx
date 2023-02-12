import React from 'react';

const Form = (props) => {
    return(
        <div>
            <form 
                id='catRequestForm' 
                name='catRequestForm'>
                    <input
                        id='catRequestFormInput'
                        type='text' 
                        placeholder='Add Cat Name Here'
                        >
                    </input>
                    <br></br>
                    <input 
                        id='catRequestFormSubmit' 
                        type='button' 
                        value='Click here for a new Cat'
                        onClick={props.onNameSubmit}
                        >
                    </input>
            </form>
        </div>
    )
}

export default Form;