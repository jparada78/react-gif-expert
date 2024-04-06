import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['Sport Car']);

    const onAddCategory = (onNewCategory) => {

        if ( categories.includes(onNewCategory) ) return;

        setCategories([ onNewCategory, ...categories]);

    }
    
    return (
        <>
           
            <h1>GifExpertApp</h1>
           
            <AddCategory 
                //setCategories= { setCategories } 
                onNewCategory = { event => onAddCategory(event)}

            />
            { 
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category }
                    />

                ))
                
            }
                
        </>
    )
}
