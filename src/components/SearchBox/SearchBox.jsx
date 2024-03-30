const SearchBox = ({ value, onChange }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <br />
        <input type="text" value={value} onChange={onChange} />
      </label>
    </div>
  );
};

export default SearchBox;
