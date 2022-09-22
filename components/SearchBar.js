

export default function SearchBar(props) {
    const { title, handleSearch, paramValue, setParamValue } = props;
    return (
        <>
            <div className="input-group m-2 d-flex flex-column" style={{ maxWidth: "500px" }}>
                <label className="m-2"><strong>GitHub {title}</strong></label>
                <div className="d-flex">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="button-addon2"
                        onChange={(e) => setParamValue(e.target.value)}
                        value={paramValue}
                        style={{ borderTopRightRadius: "0px", borderBottomRightRadius: "0px" }}
                    />
                    <button onClick={() => handleSearch()} className="btn btn-outline-primary" type="button" id="button-addon2" data-mdb-ripple-color="dark"
                        style={{ borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px" }}>
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </div>
        </>
    )
}
