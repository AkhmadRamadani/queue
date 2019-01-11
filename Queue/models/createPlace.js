export var responseData = null

export function imageUpload(id_place,picture) {
    return new Promise((resolve, reject) => {

        fetch('http://192.168.43.2/apiqueue/v1/place/placeRegImage', {
            method: 'post',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'multipart/form-data'
            },
            body : JSON.stringify({
                id_place : id_place,
                picture : picture
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {

            responseData = responseJson
            resolve(true)

        }).catch((error) => {
            console.error(error);

            reject(true)
        });
    })
}
