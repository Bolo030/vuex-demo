class Cellphone{
    create(){
        console.log('生成一个手机')
    }
}
class Decorator{
    constructor(cellphone){
        this.cellphone=cellphone;
    }
}