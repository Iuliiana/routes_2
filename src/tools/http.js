import useFetch from "../hooks/useFetch";

export const usePostFetch = (url, body) => {
    return useFetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
}

export const useDeleteFetch = (url) => {
    return useFetch(url, {
        method: "delete"
    })
}




