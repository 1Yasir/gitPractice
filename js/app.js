const api = "https://jsonplaceholder.typicode.com/users";
const container = document.querySelector(".container");

let a = fetch(api);

a
.then(res =>((res.json())))
.then(res =>(console.log(res)))
// fetch(api)
// .then((res)=> res.json())
// .then((data)=>{
//     data.forEach(element => {
//         container.innerHTML += `
//         <div class="card">
//         <div class="card__title">
//           <div class="icon">
//             <a href="#"><i class="fa fa-arrow-left"></i></a>
//           </div>
//           <h3>New products</h3>
//         </div>
//         <div class="card__body">
//           <div class="half">
//             <div class="featured_text">
//               <h1>${element.name}</h1>
//               <p class="sub">${element.company}</p>
//               <p class="price">${element.price}.00 PKR</p>
//             </div>
//             <div class="image">
//               <img src=${element.image} alt="">
//             </div>
//           </div>
//           <div class="half">
//             <div class="description">
//               <p>${element.description}</p>
//             </div>
//             <span class="stock"><i class="fa fa-pen"></i> In stock</span>
//             <div class="reviews">
//               <ul class="stars">
//                 <li><i class="fa fa-star"></i></li>
//                 <li><i class="fa fa-star"></i></li>
//                 <li><i class="fa fa-star"></i></li>
//                 <li><i class="fa fa-star"></i></li>
//                 <li><i class="fa fa-star-o"></i></li>
//               </ul>
//               <span>(64 reviews)</span>
//             </div>
//           </div>
//         </div>
//         <div class="card__footer">
//           <div class="recommend">
//             <p>Recommended by</p>
//             <h3>${element.company}</h3>
//           </div>
//           <div class="action">
//             <button type="button">Add to cart</button>
//           </div>
//         </div>
//       </div>
//         `
        
//     });
// })