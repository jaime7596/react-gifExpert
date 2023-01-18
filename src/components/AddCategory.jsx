import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('One Piece');
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }
    const onSumit = (event) => {
        event.preventDefault();
        if ( inputValue.trim().length <= 1 ) return

        // setCategories( (c) => [...c, inputValue]);
        onNewCategory( inputValue.trim() )
        setInputValue('')
    }
  return (
    <form onSubmit = { onSumit } >
        <input 
            type="text"
            placeholder='Buscar gifs'
            value={inputValue}
            onChange = { onInputChange }
        />
    </form>
  )
}
