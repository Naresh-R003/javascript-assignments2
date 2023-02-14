var a=prompt();
var sum=0;
while(a!=0){
    sum=sum+a%10;
    a=Math.floor(a/10);
}
function isoddoreven(sum) {
    if(sum%2==0){
        return "Evenish";
    }else{
        return "Oddish";
    }
}
console.log(isoddoreven(Math.floor(sum)));

