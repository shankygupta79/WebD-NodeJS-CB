const fs=require('fs')
fs.readFile(__dirname + "/sample.txt",function(err,data){
    if(err) throw err

    let string=data.toString()
    let arr=string.split("\r\n")
    let ans=""
    for(x in arr){
        if(ans.includes(arr[x])){

        }else{
            console.log(arr[x]+" : "+((string.split(arr[x])).length-1))
            ans=ans+arr[x];

        }
    }
    
})