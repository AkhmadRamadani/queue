export var responsData = null;
export function updateToOn (queue_code) {  
    return new Promise((resolve,reject)=>{
        fetch('http://192.168.43.2/apiqueue/v1/place/onProcessQueue',
        {
            method : 'post',
            headers:{
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
        },
            body: JSON.stringify({
                queue_code : queue_code
            })
      }).then((response)=> response.json())
      .then((responseJson)=>{
          
        responsData = responseJson;
        // this.setData(responseJson);
        resolve(true);
      }).catch((error) => {
              console.error(error);
              reject(true);
            });

    })  
                    //  return true;
}
