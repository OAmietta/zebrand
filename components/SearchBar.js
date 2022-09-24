

export default function SearchBar(props) {
    const { title, handleSearch, paramValue, setParamValue, setParamValueChange } = props;

    const handleChange = (e) => {
        setParamValue(e);
        setParamValueChange(true);
    }

    return (
        <>
            <div className="input-group m-2 d-flex flex-column maxWidth">
                <label className="m-2"><strong>GitHub {title}</strong></label>
                <div className="d-flex">
                    <input
                        type="text"
                        className="form-control rightBorder"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="button-addon2"
                        onChange={(e) => handleChange(e.target.value)}
                        value={paramValue}
                    />
                    <button onClick={() => handleSearch()} className="btn btn-outline-primary leftBorder" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </div>
        </>
    )
}
