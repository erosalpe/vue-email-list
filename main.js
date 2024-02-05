const { createApp } = Vue

createApp({
  data() {
    return {
        arrayEmail: [],
        finito: false,
        
    }
  },
  methods: {
    getEmail(){
        for( let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then( (item) => {
            this.arrayEmail.push(item.data.response)
            console.log(item.data.response, i, this.finito);
            if (this.arrayEmail.length > 9){
                this.finito = true;
            }
            })
        }
    },
 
  },
}).mount('#app')