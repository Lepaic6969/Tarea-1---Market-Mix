const users=[
    {
        name:"Martha Lucía",
        lastName:"Zamora Andrade",
        fullName:"Martha Lucia Zamora Andrade",
        age:53,
        password:"mlza1234",
        user:"martica lucia"
    },
    {
        name:"Laura Claribel",
        lastName:"Gustin David",
        fullName:"Laura Claribel Gustin David",
        age:24,
        password:"lcgd1234",
        user:"larani"
    }
]
const app=Vue.createApp({
    data(){
        return {
            message:"Semillero Software Market Mix",
            users,
            name:"",
            lastName:"",
            user:"",
            date:null,
            age:null
        }
       
    },
    methods:{
        
        addUser(){
             //Validación para que no se rendericen cosas vacías.
             //Con esto garantizo que ninguno de los campos se vaya vacío.
             const condition=this.name && this.lastName && this.user && this.date;
             if(!condition) {
                alert("Recuerde completar todos los campos")
                return
             }
            //TODO: Crear el nuevo usuario con los datos tomados de los campos.
            const newUser={
               
            }
           
            this.users.push(newUser);

            //TODO:Reiniciar los valores de los campos una vez agregado el nuevo usuario.
        }
    }
})

app.mount("#container")

