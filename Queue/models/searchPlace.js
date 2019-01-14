export var responsData = null;
export function searchPlace (name_place) {  
    return new Promise((resolve,reject)=>{
        fetch('http://192.168.43.2/apiqueue/v1/place/search',
        {
            method : 'post',
            headers:{
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
        },
            body: JSON.stringify({
                name_place : name_place
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
