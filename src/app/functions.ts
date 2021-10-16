import {item} from './customVars'

export const getData = async () : Promise<Array<item>> => {
	return await fetch("https://jsonplaceholder.typicode.com/users")
	.then( data => data.json()).then(data => {	
        const dataArray:Array<item> = data.map((item:item) => {
            return {url:"https://robohash.org/"+item.id,name:item.name,email:item.email}   	
        }) 		
	     return dataArray;	
	}).catch(err => [])
}