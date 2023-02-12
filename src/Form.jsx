import React from 'react';

const Form = (props) => {
    return(
        <div>
            <form 
                id='roboRequestForm' 
                name='roboRequestForm'>
                    <input
                        id='roboRequestFormInput'
                        type='text' 
                        placeholder='Add Robo Name Here'
                        >
                    </input>
                    <br></br>
                    <input 
                        id='roboRequestFormSubmit' 
                        type='button' 
                        value='Click here for a new Robo'
                        onClick={props.onNameSubmit}
                        >
                    </input>
            </form>
        </div>
    )
}

export default Form;