import React, { useEffect } from 'react';
import axios from 'axios';
import { ContentProcessTable } from './ContentProcessTable';
import { useState } from 'react';
import smiley from './images/smiley.png';
function Content_Production(props) {
    const {click} = props
    const [categories, setCategories] = useState([])
    const [isError, setIsError] = useState(false)
    
    useEffect(() => {
        const url = "http://localhost:8080/CP_Dashboard/category/show";
        axios.get(url)
            .then(response => {
                const categories = response.data
                setCategories(categories)
            })
            .catch(error => {
                console.log(error)
                setIsError(true)
            })
    }, [])

    if (isError) {
        return (
        <div className="Error">
            <div>
                <strong><label className="error_title">Oops...!!!</label></strong><br></br>
                <label className="error_desc">Error loading page content</label>
            </div>
        </div>
        )
    } else {
        return (
            <div className={click ? "content_expand":"content_body"}>
                <h2 className="heading">Content Production Pipeline Status</h2>
                {categories.map(category => {
                    return (
                        <ContentProcessTable
                            categoryName={category.name}
                            categoryId={category.id}
                            isError={isError}
                            setIsError={setIsError}
                        />
                    )
                }
                )
                }
            </div>
        );
    }
}

export default Content_Production