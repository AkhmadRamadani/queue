export var response = null;
export function getPlaceQueueList (id_place) {  
    return new Promise((resolve,reject)=>{
        fetch('http://192.168.43.2/apiqueue/v1/place/getMyPlaceQueue',
        {
            method : 'post',
            headers:{
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
        },
            body: JSON.stringify({
                id_place : id_place
            })
      }).then((response)=> response.json())
      .then((responseJson)=>{
          
        response = responseJson;
        // this.setData(responseJson);
        resolve(true);
      }).catch((error) => {
              console.error(error);
              reject(true);
            });

    })  
                    //  return true;
}
