export var responsData = null;
export function takeQueue (id_place,id_user) {  
    return new Promise((resolve,reject)=>{
        fetch('http://192.168.43.2/apiqueue/v1/place/takeQueue',
        {
            method : 'post',
            headers:{
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
        },
            body: JSON.stringify({
                id_place : id_place,
                id_user : id_user
            })
      }).then((response)=> response.json())
      .then((responseJson)=>{
          
        responsData = responseJson;
        resolve(true);
      }).catch((error) => {
              console.error(error);
              reject(true);
            });

    })  
}
