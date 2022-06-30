import {useRouter} from "next/router";
import cx from "classnames";
import Link from "next/link";
import {useState} from "react";
import {nanoid} from "nanoid";

export default function AuthRoute(props){

    const router = useRouter();
    // const { id, route } = router.query
    const [data, setData] = useState([]);

    const getReq = () => {
        setData(state => ([...state, nanoid()]))
    }

    return(
        <div className={'flex flex-col gap-y-4 justify-center items-center'}>
            <div className={'flex justify-between w-full gap-2 px-2 py-1'}>
                <Link href="/">
                <span className={`px-1 py-0.5 text-slate-100 bg-blue-500 group rounded-lg hover:rounded-xl transition-all ease-in-out cursor-pointer h-auto w-auto flex`}>
                    <span
                        className={
                            cx({
                                'border border-solid border-slate-300 px-4 py-2 rounded-lg transition-all ease-in-out scale-105': true,
                                'group-hover:rounded-xl group-hover:scale-95': true
                            })
                        }>
                        Anasayfa
                    </span>
                </span>
                </Link>
            </div>
            <button className={'bg-amber-500 text-white rounded px-2 py-1'} onClick={getReq}>To-do Ekle</button>
            <ul className="flex flex-col gap-y-2">
                {data.map((item,key) => (
                    <li key={key} className={'rounded px-2 py-1 bg-slate-200'}>{key} - {item}</li>
                ))}
            </ul>

        </div>

    )
}