import React from 'react';

const Form = (props) => {
    return(
        <div>
            <form 
                id='catRequestForm' 
                name='catRequestForm'
                onSubmit={props.handleSubmit}>
                    <input
                        id='catRequestFormInput'
                        type='text' 
                        placeholder='Add Cat Name Here'
                        onChange={props.handleChange}
                        onKeyDown={props.onKeyDownSubmit}
                        className='
                            p-5
                            m-5
                            border-white
                            text-stone-900 
                            bg-blue-100
                            text-xl'
                        >
                    </input>
                    <br></br>
                    <input 
                        id='catRequestFormSubmit' 
                        type='submit' 
                        value='Click here for a new Cat'
                        className='
                            p-5
                            m-5
                            bg-slate-800
                            text-xl'
                        >
                    </input>
            </form>
        </div>
    )
}

export default Form;