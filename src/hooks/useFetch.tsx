import {useEffect, useState} from "react";

export const useFetch = <T, >(url: string) => {
    const [items, setItems] = useState<T>()
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, []);
    return items;
}