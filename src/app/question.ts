export class Question{
    question = '';
    a ='';
    b ='';
    c ='';
    d ='';
    correct = 0;
    constructor(q,a,b,c,d,correct){
        this.question = q;
        this.a = a;
        this.b=b;
        this.c = c;
        this.d =d;
        this.correct = correct;
    }

}