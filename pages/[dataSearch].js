import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { dataValue, setData, inputSearch, setInputSearch, currentPageValue, setCurrentPageValue } from '../slices/index';
import { useRouter } from 'next/dist/client/router';
import CardItem from "../components/CardItem"
import SearchBar from '../components/SearchBar';
import { searchUsers, searchRepositories } from '../api/services';
import LoadingSpinner from '../components/LoadingSpinner';
import axios from 'axios';
import Pagination from '../components/Pagination/Pagination';

/**
 * ServerSideProps runs the fetch on the server and delivers only the data to the client side.
 * The fecth request depends of the dynamic path value ("userSearch" or "repositorieSearch").
 */
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

/**
 * @param {array} dataArray -- Array of data from redux store.
 * @param {integer} currentPage -- Current page of data displayed.
 * @param {string} inputSearchValue -- Input value of the search bar.
 * @param {boolean} paramValueChange -- (Flag) Don't search if the input value doesn't change.
 * @param {boolean} loading -- (Flag) Shows loading spinner when true.
*/

export default function UserSearch({ data }) {
    const router = useRouter();
    const dataArray = useSelector(dataValue);
    const inputSearchValue = useSelector(inputSearch);
    const currentPage = useSelector(currentPageValue);
    const dispatch = useDispatch();

    const [paramValueChange, setParamValueChange] = useState(false);
    const [loading, setLoading] = useState(false);
    let pageSize = 5;


    useEffect(() => {
        dispatch(setData(data));
    }, [dispatch, data])


    const handleSearch = async () => {
        //Search only if the input value changes.
        if (paramValueChange) {
            setParamValueChange(false);
            setLoading(true);
            //If the input value is empty, load default data redirecting (server side rendering).
            if (inputSearchValue != "") {
                if (router.query.dataSearch.includes("user")) {
                    searchUsers(inputSearchValue)
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
                    searchRepositories(inputSearchValue)
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
            dispatch(setCurrentPageValue(1));
        }

    };

    const redirect = (url) => {
        dispatch(setInputSearch(""));
        router.push(url);
        dispatch(setCurrentPageValue(1));

    }

    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    //Gets the data per page from the dataArray.
    let slicedArray = dataArray.slice(
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
                        <SearchBar title={router.query.dataSearch.includes("user") ? "Users" : "Repositories"} handleSearch={handleSearch} paramValue={inputSearchValue} setParamValue={(e) => dispatch(setInputSearch(e))} setParamValueChange={setParamValueChange} />
                    </div>
                    {
                        dataArray?.length > 0 ? slicedArray.map((item, index) => {
                            return <CardItem itemData={item} key={index} />
                        }) : <div className="d-flex justify-content-center pageContainer">
                            <LoadingSpinner />
                        </div>
                    }
                    {dataArray?.length > 0 && (
                        <Pagination
                            className="pagination-bar"
                            currentPage={currentPage}
                            totalCount={
                                dataArray?.length > 0
                                    ? dataArray.length
                                    : dataArray.length
                            }
                            pageSize={pageSize}
                            onPageChange={(page) => dispatch(setCurrentPageValue(page))}
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
