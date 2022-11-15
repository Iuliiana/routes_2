export const postFetch = (url, body) => {
    return fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    })
        .then((response) => response.status)
        .then((data) => {
            if (data < 200 && data > 300) {
                return data;
            }
            return {success: true};
        })
        .catch((error) => {
            console.log(error)
        });
}

export const deleteFetch = (url) => {

    return new Promise((resolve, reject) => {
        fetch(url, {
            method: "delete"
        })
            .then((response) => response.status)
            .then((data) => {
                if (data < 200 && data > 300) {
                    return reject(data);
                }
                resolve({success: true});
            })
            .catch((error) => {
                reject(error);
            });
    });

}

export const getFetch = (url) => {
    return fetch(url)
        .then((response) => response.status)
        .then((data) => {
            if (data < 200 && data > 300) {
                console.log(data)
            }
            return data;
        })
        .catch((error) => {
            console.log(error)
        });
}





