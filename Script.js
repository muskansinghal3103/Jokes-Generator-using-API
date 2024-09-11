const joke=document.querySelector('#joke');
const jokebutton=document.querySelector('#jokebutton');

const generatejokes = async()=>{
    try{

        const setheader={
            headers:{
                Accept: "application/json"
            }
        }
        //using async await
        const res=await fetch('https://icanhazdadjoke.com/',setheader);
        const data=await res.json();
        joke.innerHTML=data.joke;
    }
    catch(err){
        console.log(`The error is  ${err}`);
    }
}


    // fetch('https://icanhazdadjoke.com/',setheader)
    // .then((res)=> res.json()
    // .then((data)=>{
    //     joke.innerHTML=data.joke;
    // })
    // .catch((error)=>{
    //     console.log(error);
    // })
    // )
    // }
jokebutton.addEventListener('click',generatejokes);
generatejokes();
