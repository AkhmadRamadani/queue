export var hapusData = null;
export function cancellingQueue (queue_code) {  
    return new Promise((resolve,reject)=>{
        fetch('http://192.168.43.2/apiqueue/v1/place/cancelQueue',
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
          
        hapusData = responseJson;
        resolve(true);
      }).catch((error) => {
              console.error(error);
              reject(true);
            });

    })  
}
