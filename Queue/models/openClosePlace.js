export var responseStatus = null;
export function openOrClose (status,id_place) {  
    return new Promise((resolve,reject)=>{
        fetch('http://192.168.43.2/apiqueue/v1/place/updatePlaceStatus',
        {
            method : 'post',
            headers:{
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
        },
            body: JSON.stringify({
                status : status,
                id_place : id_place
            })
      }).then((response)=> response.json())
      .then((responseJson)=>{
          
        responseStatus = responseJson;
        resolve(true);
      }).catch((error) => {
              console.error(error);
              reject(true);
            });

    })  
}
