import SearchListItem from "./SearchListItem";
import './SearchList.css';

const SearchList = ({searchKey, results}) => {
    const listItem = results.map((item) => <SearchListItem key={item.id} item={item} />)
    return(
        <>
            <h3>Search Results for {searchKey} !</h3>
            <div className="list-container">
                { results.length > 0 && listItem }
            </div>
        </>
    )
}

export default SearchList;