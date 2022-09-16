let people = [
    {
    name: 'Hanan Wadworth', //string
    dateOfBirth: 1/15/1987, //number
    children: 3, //number
    country: 'China', //string
    knowsHowToProgram: false //boolean
    },
    {
    name: 'Annelise Gavahan', //string
    dateOfBirth: 3/9/2001, //number
    children: 3, //number
    country: 'Germany', //string
    knowsHowToProgram: false //boolean
    },
    {
    name: 'Genevieve Barnhart', //string
    dateOfBirth: 1/12/1986, //number
    children: 2, //number
    country: 'Myanmar', //string
    knowsHowToProgram: true //boolean
    },
    {
    name: 'Rachelle Coltart', //string
    dateOfBirth: 11/11/1987, //number
    children: 0, //number
    country: 'China', //string
    knowsHowToProgram: false //boolean
    },
    {
    name: 'Janelle Droogan', //string
    dateOfBirth: 4/21/1994, //number
    children: 3, //number
    country: 'Norway', //string
    knowsHowToProgram: true //boolean
    },

]

if(people[0].children === people[4].children) {
    console.log("person 2 and 3 have the same amount of children");
}

if(people[0].knowsHowToProgram === people[3].knowsHowToProgram) {
    console.log("Yay");
} else {"LMGTFY";
} 

switch (people[1].country) {
    case "Iceland":
        console.log("Hæ");
        break;
    case "Spain":
        console.log("Hola");
        break;
    case "Korea":
        console.log("여보세요");
        break;  

    default: 
    console.log("Hello");
    }  
