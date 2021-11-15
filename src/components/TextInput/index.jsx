import "./styles.css";

export const TextInput = ({ inputValue,fnInputSearch }) => {
    return(
        <input
            className="input-text"
            onChange={fnInputSearch}
            type="search"
            value={inputValue}
            placeholder="Type your search..."
          />
    );
}