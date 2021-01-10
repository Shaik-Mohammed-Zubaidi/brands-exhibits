import SearchSVG from './search.svg';

const SearchBox = () =>{
    return (
        <div className="search-box" >
            <img src={SearchSVG} alt="search svg" />
            <input placeholder="Search Name....."/>
        </div>
    );
};

export default SearchBox;