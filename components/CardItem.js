export default function CardItem(props) {
    const { itemData } = props;
    let name = itemData.login == undefined ? itemData.name : itemData.login;
    let avatar = itemData.avatar_url == undefined ? itemData.owner.avatar_url : itemData.avatar_url;

    return (
        <div className='m-2 d-flex p-3 align-items-center cardContainer'>
            <a href={itemData.html_url} alt={itemData.html_url} target="_blank" rel="noreferrer">
                <div className="avatar">
                    <div className="rounded-b-lg avatarImage" style={{ backgroundImage: `url(${avatar})` }}></div>
                </div>

            </a>
            <div className="d-flex flex-column flex-wrap m-2 text-wrap">
                <strong className="cPrimary overflow-hidden">{name.length > 20 ? name.substring(0, 20) : name}</strong>
                {
                    itemData.login == undefined ? (
                        <div className="d-flex">
                            <strong className="cGray">{`created by`}&nbsp;</strong> <p>{itemData.owner.login}</p>
                        </div>
                    ) : (
                        <div className="d-flex">
                            <strong className="cGray">ID&nbsp;</strong><p>{itemData.id}</p>
                        </div>
                    )
                }
            </div>
        </div >

    )
}
