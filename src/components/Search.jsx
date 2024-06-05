const Search = ({ search, setSearch }) => {
  const clearPlaceHolder = (e) => {
    e.placeholder = "";
    e.onblur = (e) => (e.target.placeholder = "Search tasks...");
  }
  return (
    <div className="search">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={(e) => clearPlaceHolder(e.target)}
        placeholder="Search tasks..."
      />
    </div>
  );
};

export default Search;
