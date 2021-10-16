import {item} from './customVars'

export const getData = async (value:string='') : Promise<Array<item>> => {
	return await fetch("https://jsonplaceholder.typicode.com/users")
	.then( data => data.json()).then(data => {
		const filteredRobots = data.filter((item:item) => item.name.toLowerCase().includes(value.toLowerCase()))
        const dataArray:Array<item> = filteredRobots.map((item:item) => {
            return {url:"https://robohash.org/"+item.id,name:item.name,email:item.email}   	
        }) 		
	     return dataArray;	
	})
}