import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { dataValue, setData } from '../slices/index';
import { useRouter } from 'next/dist/client/router';
import CardItem from "../components/CardItem"
import SearchBar from '../components/SearchBar';
import { searchUsers, searchRepositories } from './api/services';
import LoadingSpinner from '../components/LoadingSpinner';
import axios from 'axios';
import Pagination from '../components/Pagination/Pagination';

export async function getServerSideProps(context) {
    const { query } = context;
    let data = [];
    if (query.dataSearch.includes("user")) {
        const res = await axios.get(`https://api.github.com/users`);
        data = res.data;
    } else if (query.dataSearch.includes("repositorie")) {
        const res = await axios.get(`https://api.github.com/repositories`);
        data = res.data;
    }

    return {
        props: {
            data,
            query
        }
    }
}

export default function UserSearch({ data }) {
    const router = useRouter();
    const usersArray = useSelector(dataValue);
    const dispatch = useDispatch();
    const [paramValue, setParamValue] = useState("");
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    let pageSize = 5;
    /**
     * @param {boolean} paramValueChange -- (Flag) Don't search if the input value doesn't change.
     */
    const [paramValueChange, setParamValueChange] = useState(false);

    useEffect(() => {
        dispatch(setData(data));
    }, [dispatch, data])


    const handleSearch = async () => {
        if (paramValueChange) {
            setParamValueChange(false);
            setLoading(true);
            if (paramValue != "") {
                if (router.query.dataSearch.includes("user")) {
                    searchUsers(paramValue)
                        .then((res) => {
                            if (res.items.length > 0) {
                                dispatch(setData(res.items))
                            }
                            setLoading(false);
                        })
                        .catch((err) => {
                            console.log("err: ", err);
                            setLoading(false);
                        });
                } else {
                    searchRepositories(paramValue)
                        .then((res) => {
                            if (res.items.length > 0) {
                                dispatch(setData(res.items))
                            }
                            setLoading(false);
                        })
                        .catch((err) => {
                            console.log("err: ", err);
                            setLoading(false);
                        });
                }
            } else {
                try {
                    if (router.query.dataSearch.includes("user")) {
                        router.push("/userSearch");
                    } else {
                        router.push("/repositorieSearch");
                    }
                    setLoading(false);
                }
                catch (err) {
                    console.log("err: ", err);
                    setLoading(false)
                }
            }
            setCurrentPage(1);
        }

    };

    const redirect = (url) => {
        setParamValue("");
        router.push(url);
    }

    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    let slicedArray = usersArray.slice(
        firstPageIndex,
        lastPageIndex
    );


    return (
        <div className='container-sm d-flex flex-column justify-content-center pageContainer'>
            {loading ? (
                <LoadingSpinner />
            ) : (
                <>
                    <div className='d-flex flex-wrap justify-content-center align-items-center'>
                        <SearchBar title={router.query.dataSearch.includes("user") ? "Users" : "Repositories"} handleSearch={handleSearch} paramValue={paramValue} setParamValue={setParamValue} setParamValueChange={setParamValueChange} />
                    </div>
                    {
                        usersArray?.length > 0 ? slicedArray.map((item, index) => {
                            return <CardItem itemData={item} key={index} />
                        }) : <div className="d-flex justify-content-center pageContainer">
                            <LoadingSpinner />
                        </div>
                    }
                    {usersArray?.length > 0 && (
                        <Pagination
                            className="pagination-bar"
                            currentPage={currentPage}
                            totalCount={
                                usersArray?.length > 0
                                    ? usersArray.length
                                    : usersArray.length
                            }
                            pageSize={pageSize}
                            onPageChange={(page) => setCurrentPage(page)}
                        />
                    )}
                    {
                        router.query.dataSearch.includes("repositorie") && (
                            <div className='d-flex justify-content-center'>
                                <button onClick={() => redirect("/userSearch")} type="button" className="btn btn-primary mt-4 d-cel">
                                    Search users
                                </button>
                            </div>
                        )
                    }
                    {
                        router.query.dataSearch.includes("user") && (
                            <div className='d-flex justify-content-center'>
                                <button onClick={() => redirect("/repositorieSearch")} type="button" className="btn btn-primary mt-4 d-cel">
                                    Search repositories
                                </button>
                            </div>
                        )
                    }
                </>
            )}
        </div>
    )
}
