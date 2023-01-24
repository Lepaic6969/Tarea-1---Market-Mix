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
            date:null
        }
       
    },
    methods:{
        validateUser(){
            let flag=false
            //El some retorna verdadero si encuentra algun elemento en nuestro arreglo con 
            //un usuario igual al que queremos ingresar.
            //El toLowerCase() hace que no importen las mayúsculas o minúsculas.
            flag=users.some(el=>el.user.toLowerCase()===this.user.toLowerCase())
            return flag
        },
        calculateAge(){
            const date=new Date(this.date); //Esta es la fecha ingresada por el usuario.
            const currentDate=new Date(); //Esta es la fecha actual.
            //La idea es pasar todo a una sóla unidad (milisegundos) y restar las dos fechas
            //Con esto obtenemos la edad en milisegundos. Por último lo que hacemos es pasar la edad a años.
            const ageInSeconds=currentDate.getTime()-date.getTime()
            //3600 segundos en una hora, 24 horas en un día y 365 días en un año.
            const age=Math.trunc(ageInSeconds/(1000*3600*24*365)) //Tomo la parte entera de los años.
            return age
        },
        addUser(){
             //Validación para que no se rendericen cosas vacías.
             //Con esto garantizo que ninguno de los campos se vaya vacío.
             const condition=this.name && this.lastName && this.user && this.date;
             if(!condition) {
                alert("Recuerde completar todos los campos")
                return
             }

             //Si el usuario ya existe no agrega nada y se sale de esta función.
             if(this.validateUser()){
                alert("El usuario ya existe, intente nuevamente")
                return
             }
            const newUser= {
                name:this.name,
                lastName:this.lastName,
                fullName:`${this.name} ${this.lastName}`,
                age:this.calculateAge(),
                password:"lcgd1234",
                user:this.user
            }

            //TODO: Generar el password de manera aleatoria.
           
            this.users.push(newUser);

            //Reiniciamos los valores de los campos una vez agregado el nuevo usuario.
            this.name=""
            this.lastName=""
            this.user=""
            this.date=null

            //Este console.log es para que vayamos verificando en consola en cada
            //nueva inserción , cómo va quedando el arreglo.
            console.log(users)
        }
    }
})

app.mount("#container")

