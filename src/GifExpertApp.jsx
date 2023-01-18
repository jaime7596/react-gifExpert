import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);
  const onAddCategory = (value) => {
    console.log(value);
    if (categories.includes(value)) {
      return
    }
    setCategories( (c) => [...c, value])
  }
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory 
      // setCategories = { setCategories }
        onNewCategory = { onAddCategory } 
      />
        
      {
        // <li key={category}>{ category }</li>
        categories.map( category => (
          <GifGrid 
            key={category} 
            category = { category }
          /> 
        ))
      }

        
    </>
  )
}
