const car = (name, model, owner, year, phone, image) => ({name, model, owner, year, phone, image}) 

const cars = [
    car('Vaz','2101','Max', 1973, '+79114734321','img/2101.jpg'),
    car('Vaz','Niva','Vasiliy', 1980, '+79111234567','img/niva.png'),
    car('Uaz','452','Anna', 1967, '+79990001122','img/uaz.jpg')
]
new Vue({
    el:'#applic',
    data:{
        cars: cars,
        car: cars[0],
        selectCarIndex: 0,
        phoneVisible: false
    },
    methods:{
        selectCar: function(index){
            //console.log('index',index)
            this.car = cars[index],
            this.selectCarIndex = index
            
        }
    }
})