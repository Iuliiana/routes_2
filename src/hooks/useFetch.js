import {useEffect, useState} from "react";

export default function useFetch(url, opts = {}) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();
        fetch(url, opts)
            .then(response => response.json())
            .then(data => {
                if (!data) {
                    setError('Query error! ' + url + ' empty data.')
                } else if (data.status < 200 && data.status > 300) {
                    setError('Query Error! Status query - ' + data.status)
                } else {
                    setData(data)
                }
            }).catch(error => {
            setError('Query Error! ' + error.message)
        }).finally(() => {
            setLoading(true)
        })
        return () => controller.abort()
    }, [])
    return [data, loading, error];
}