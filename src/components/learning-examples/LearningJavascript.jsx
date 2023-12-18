const person = {
    name:'Vidya Devi',
    address:{
        line1: 'Panchshil',
         city: 'Pune',
         state: 'Maharashtra',
         country: 'India',
    },

    profiles: ['twitter', 'Linkedin', 'Instagram'],
    printProfile: () => {
        person.profiles.map(
            (profile) => console.log(person.profiles)
        )
    },
}



export default function LearningJavascript(){
    return(
        <>
            <div>{person.name}</div>
            <div>{person.address.line1}</div>
            <div>{person.profiles[0]}</div>
            <div>{person.printProfile()}</div>
        </>
    )
}