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
                        onKeyDown={props.onKeyDownSubmit}
                        className='p-5 
                            border-white m-5
                            text-stone-900 
                            bg-blue-100
                            text-xl'
                        >
                    </input>
                    <br></br>
                    <input 
                        id='catRequestFormSubmit' 
                        type='button' 
                        value='Click here for a new Cat'
                        onClick={props.onClickSubmit}
                        className='p-5
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