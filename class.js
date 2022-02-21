class Temmember{
    name;
    designesion="web development"
    address='BD';
    constructor(name,address){
        this.name=name;
        this.address=address;
    }
}
class Suport extends Temmember{
    constructor(name,address,conceptual){
        super(name,address)
        this.conceptual=conceptual;
    }
    suportSetion(){
        console.log(this.name,'this is a suppor')
    }
}
class StudentCare extends Temmember{ 
    constructor(name,address,cours){
        super(name,address)
        this.cours=cours;
    }
    giveRutin(student){
        console.log(this.name,'is a rutin in your',student)
    }

}
const amir=new Suport('sakibr khan','malaysia','new conceptul seson web development');
console.log(amir);

const akbor=new StudentCare('Akbor Ali',"Dhaka",'Recursion');
// console.log(akbor)
// akbor.giveRutin('rajib')
