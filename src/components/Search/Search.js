import { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import SearchList from "./SearchList";

const Search = () => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        const fetchSearchResults = async () => {
            try {
                setLoading(true);
                const accessKey = 'GKpDtWgICjvNdH1zBDKXeveonW9ul1vrECn07koquIg';
                const api_url = `https://api.unsplash.com/search/photos?client_id=${accessKey}&query=${searchKeyword}&page=1`;
    
                const response = await fetch(api_url, {signal});
                const data = await response.json();
                setLoading(false);
                setResults(data.results);
            } catch (err) {
                console.error(err);
            }
        };
        if (searchKeyword?.length) {
            fetchSearchResults();
        }

        return () => {
            if (signal.aborted) {
                abortController.abort();
            }
        }
    }, [searchKeyword, setSearchKeyword]);

    const handleSearch = (keyword) => {
        setSearchKeyword(keyword);
        setResults([]);
    };

    return(
        <>
            <SearchForm onSubmit={handleSearch} />
            { loading && <div>Loading...</div> }
            { results.length > 0 && <SearchList results={results} searchKey={searchKeyword} /> }
        </>
    )
}

export default Search;