import { useState } from "react";
import './SearchForm.css'

const SearchForm = ({onSubmit}) => {
    const [keyword, setKeyword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(keyword);
        setKeyword('');
    };

    return(
        <>
            <form onSubmit={handleSubmit} className="search-form">
                <input
                    type="text"
                    value={keyword}
                    placeholder="Search photos..." 
                    onChange={(e) => setKeyword(e.target.value)}
                />
            </form>
        </>
    )
}

export default SearchForm;