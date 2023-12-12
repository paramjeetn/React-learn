
const numbers=[2,3,4,1,24,1344];


//map
let newnumber=[];
numbers.map((num)=>{
newnumber.push(num*2);
})
console.log(newnumber);

//filter
let filternumber=[]
numbers.filter((num)=>{
    if(num>3){
        filternumber.push(num);
    }

})
console.log(filternumber);



//reduce: acumulate a value by doing something to each item in a array

var newreduce=numbers.reduce((accumulator,currentNumber)=>{
     
return accumulator+currentNumber;
})
console.log(newreduce);



//find method: stops after 1st instnace when condition met
const newfound=numbers.find((num)=>{
return num>10;
})
console.log(newfound)

//findIndex: returns index of 1st instance of when condition met
const newfoundIndex=numbers.findIndex((num)=>{
    return num>10;
    })
    console.log(newfoundIndex)


//substring 
let meaning="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis accusantium accusamus quae debitis quisquam voluptatem exercitationem. Quod quas itaque, aliquid vel, quasi distinctio, commodi obcaecati eius ipsa delectus facilis. Pariatur dolorem voluptatibus quod sunt tempora optio perferendis, iusto numquam sapiente itaque deleniti laboriosam aperiam quibusdam ratione! Culpa nemo ex in hic dolorem eum distinctio, nobis laudantium dolor minus? Laboriosam dolores incidunt consequuntur eaque impedit sed deserunt, assumenda voluptas nihil repudiandae? Quidem porro numquam accusamus explicabo neque ad adipisci odit? Ex, quam unde! Tempora numquam soluta exercitationem alias expedita illum enim, cumque itaque praesentium at illo esse, quod dolor quo mollitia quas. Minima sunt cum quas maxime dolor labore eum quos nostrum nisi rerum quibusdam dignissimos vitae facilis, aperiam eligendi harum. Dolorem voluptas enim laudantium quae unde nobis cupiditate distinctio est placeat fugit, corporis excepturi dolore, voluptate dolor. Ratione mollitia adipisci quidem tempore inventore. Natus veritatis impedit minima ullam. Eum dolore et non, perspiciatis voluptatum aspernatur sunt, quod ipsam repudiandae a recusandae. Similique sint magni atque ipsa quo harum explicabo soluta sapiente id libero perferendis architecto facilis distinctio, quis debitis fugiat, provident tenetur obcaecati quisquam? Reiciendis ad adipisci quaerat, temporibus odit perspiciatis placeat blanditiis quisquam nesciunt laboriosam mollitia alias fuga eius commodi aliquam consequuntur, reprehenderit libero, totam architecto dolore illo iure. At pariatur quasi, provident inventore sit alias distinctio magni. Corporis reiciendis iusto natus non deserunt molestias. Aperiam odio dicta incidunt iure! Quasi sint nisi eius laborum, iure corrupti labore modi, aspernatur minima eaque rerum id autem, sed iste facilis vitae!"

let meaninghundred=meaning.substring(0,100);
console.log(meaninghundred);