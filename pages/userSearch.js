import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { userValue, setUser } from '../slices/index';
import { useRouter } from 'next/router';
import AccordionItem from "../components/AccordionItem"
import SearchBar from '../components/SearchBar';
import { searchUsers } from './api/services';
import LoadingSpinner from '../components/LoadingSpinner';

export default function UserSearch() {
    const router = useRouter();
    const user = useSelector(userValue);
    const dispatch = useDispatch();
    const [paramValue, setParamValue] = useState("");
    const [loading, setLoading] = useState(false);


    useEffect(() => {

    }, [])

    useEffect(() => {
        console.log("users: ", user.items);
    }, [user]);

    const handleSearch = () => {
        setLoading(true);
        searchUsers(paramValue)
            .then((res) => {
                console.log("res: ", res);
                dispatch(setUser(res))
                setLoading(false);
            })
            .catch((err) => {
                console.log("err: ", err);
                setLoading(false);
            });
    };


    return (
        <div className='container-sm d-flex flex-column justify-content-center' style={{ minHeight: "80vh", maxWidth: "500px", margin: "auto" }}>
            {loading ? (
                <LoadingSpinner />
            ) : (
                <>
                    <div className='d-flex flex-wrap justify-content-center align-items-center'>
                        <SearchBar title="Users" paramValue={paramValue} setParamValue={setParamValue} handleSearch={handleSearch} />
                        {/* <button onClick={() => router.push("/repositorieSearch")} >RepositorieSearch</button> */}
                    </div>
                    {
                        user.items ? user.items.map((item, index) => {
                            if (index < 6) {
                                return <AccordionItem user={item} key={index} itemId={item.login} />
                            }
                        }) : <div>..Start your searching..</div>
                    }
                </>
            )}
        </div>
    )
}
