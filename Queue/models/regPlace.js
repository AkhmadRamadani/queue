export var responseRegPlace = null

export function registerPlace(id_user,address,name_place,inisial) {
    return new Promise((resolve, reject) => {

        fetch('http://192.168.43.2/apiqueue/v1/place/regPlace', {
            method: 'post',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                id_user : id_user,
                address : address,
                name_place : name_place,
                inisial : inisial
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {

            responseRegPlace = responseJson
            resolve(true)

        }).catch((error) => {
            console.error(error);

            reject(true)
        });
    })
}
