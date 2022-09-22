import { useSelector, useDispatch } from 'react-redux'
import { userValue } from '../slices/index';
import { useRouter } from 'next/router';
import AccordionItem from "../components/AccordionItem"

export default function RepositorieSearch() {
    const router = useRouter();
    const user = useSelector(userValue);
    const dispatch = useDispatch();


    return (
        <div>userSearch</div>
    )
}