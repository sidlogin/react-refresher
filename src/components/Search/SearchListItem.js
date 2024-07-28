import './SearchListItem.css';

const SearchListItem = ({item}) => {
    return(
        <div className="list-item" >
            <img src={item.urls.small} alt={item.alt_description} style={{width: 200}} />
            <p>{item.alt_description}</p>
        </div>
    )
}

export default SearchListItem;