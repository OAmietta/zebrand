export default function AccordionItem(props) {
    const { user, itemId } = props;

    return (
        <div className='m-2'>
            <div className="accordion" id={`accordionFlushExampleX${itemId}`}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id={`flush-headingOneX${itemId}`}>
                        <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                            data-mdb-target={`#flush-collapseOneX${itemId}`} aria-expanded="false" aria-controls={`flush-collapseOneX${itemId}`}>
                            <div className="rounded-b-lg" style={{ backgroundImage: `url(${user.avatar_url})`, backgroundSize: "contain", backgroundPosition: "center", borderRadius: "100%", height: "45px", width: "45px", marginRight: "30px" }}></div>
                            <strong>{user.login}</strong>
                        </button>
                    </h2>
                    <div id={`flush-collapseOneX${itemId}`} className="accordion-collapse collapse" aria-labelledby={`flush-headingOneX${itemId}`}
                        data-mdb-parent={`#accordionFlushExampleX${itemId}`}>
                        <div className="accordion-body d-flex flex-column flex-wrap m-2 text-wrap">
                            <strong>Profile: </strong>
                            <a href={user.html_url} alt="profile" target="_blank" rel="noreferrer">{user.html_url}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}
