function obj(name,age,job) {
    this.name=(name||''),
        this.age=(age||''),
        this.job=(job||''),
        this.fn1=function () {
        return this.name+this.age+this.job;
    }
}
module.exports=obj;