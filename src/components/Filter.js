import "./Filter.css";

const Filter = ({ handleSearch }) => {
  return (
    <div className="search-text">
      <input
        type="text"
        placeholder="Input your Movie Name"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default Filter;
