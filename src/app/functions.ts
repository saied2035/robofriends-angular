import {item} from './customVars'

export const getData = async (value:string='') : Promise<Array<item>> => {
	return await fetch("https://jsonplaceholder.typicode.com/users")
	.then( data => data.json()).then(data => {
		const filteredRobots = data.filter((item:item) => item.name.toLowerCase().includes(value.toLowerCase()))
        const dataArray:Array<item> = filteredRobots.map((item:item,i:number) => {
            return {url:"https://robohash.org/"+i,name:item.name,email:item.email}   	
        }) 		
	     return dataArray;	
	})
}