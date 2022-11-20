const btn=document.getElementById('submit-btn');
const body=document.body;
 
// const anchor=document.getElementsByName('a');
// console.log(anchor);

const one=document.getElementById('one');
const two=document.getElementById('two');
const three=document.getElementById('three');
const four=document.getElementById('four');
const five=document.getElementById('five');

//  console.log(one.innerHTML);

// number.forEach((val)=>{
//     value=val;
//     console.log(value);
// })
// console.log(value);

let btnValue;

one.addEventListener('click',()=>{
     
    // console.log(two.innerHTML);
    const result=one.innerHTML;
    // console.log(result);
    btnValue=result;


})


// console.log(btnValue);

two.addEventListener('click',()=>{
     
    const result=two.innerHTML;
    // console.log(result);
    btnValue=result;

 
})


three.addEventListener('click',()=>{
     
    const result=three.innerHTML;
    // console.log(result);
    btnValue=result;

})



four.addEventListener('click',()=>{
     
    const result=four.innerHTML;
    // console.log(result);
    btnValue=result;


})



five.addEventListener('click',()=>{
     
    const result=five.innerHTML;
    // console.log(result);
    btnValue=result;


})
 
btn.addEventListener('click', (e)=>{
    // console.log(e.target);

    
thankYouCard(btnValue);
e.preventDefault();
})


function thankYouCard(btnValue){

    console.log("thank you funciton");

    const div=document.createElement('div');
 
    
    div.classList.add( "container", "thank-flex");

    const img=document.createElement('img');
    img.src='./images/card-image.JPG';    
    div.append(img);


    const p=document.createElement('p');
    p.classList.add("rating-text");
    p.innerHTML=`You selected ${btnValue} out  of 5`;
    div.append(p);



    const p2=document.createElement('p');
    p2.classList.add("thank-text");
    p2.innerHTML="Thank You";
    div.append(p2);


    
    const p3=document.createElement('p');
    p3.classList.add("thank-p-text");
    p3.innerHTML="We appreciate you take the time to give a rating. If you ever need more support don't hesitate to get in touch";
    div.append(p3);




    // fetching first container to hide 

    const firstContainer=document.getElementById('container-1');

    firstContainer.classList.add("hide-container-1");



   
   
//    appending the div to the body  
    body.append(div);
 
 
}
