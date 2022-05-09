let products = [
  {
    title: "Forum Low Shoes",
    desc3: "adidas shose is very nice",
    price: "200 L.E",    
    Image: "store_images/09c5ea6df1bd4be6baaaac5e003e7047_9366.webp",
    Image2: "store_images/ff82213b88c74ac5a0cbac5e004bd8e3_9366.webp",
    Image3: "store_images/f0924c964ace43c78dd1ac5e00377f5e_9366.webp",
    Image4: "store_images/4cb5876afbae4250a787ac5e00365cd3_9366.webp",
  },
   {
    title: "Adilette TND ",
    desc3: "Adilette TND is very nice",
    price: "200 L.E",    
    Image: "store_images/num2/1.webp",
    Image2: "store_images/num2/2.webp",
    Image3: "store_images/num2/3.webp",
    Image4: "store_images/num2/4.webp",
  },
  {
    title: "Predator Edge",
    desc3: "Predator Edge is very beautiful",
    price: "150 L.E",
    Image: "store_images/num3/1.jpg",
    Image2: "store_images/num3/2.jpg",
    Image3: "store_images/num3/3.jpg",
    Image4: "store_images/num3/4.jpg",
  },
  {
    title: "adidas Shorts",
    desc3: "adidas Shorts is very nice",
    price: "400 L.E",
    Image: "store_images/num4/1.webp",
    Image2: "store_images/num4/2.webp",
    Image3: "store_images/num4/3.webp",
    Image4: "store_images/num4/4.webp",
  },
  {
    title: "adidas Shoes",
    desc3: "adidas shose is very nice",
    price: "300 L.E",
    Image: "store_images/num5/1.webp",
    Image2: "store_images/num5/2.webp",
    Image3: "store_images/num5/3.webp",
    Image4: "store_images/num5/4.webp",
  },
  {
    title: "Legend Winter",
    desc3: "A sweat shirt made for the hardwood.",
    price: "290 L.E",
    Image: "store_images/num6/1.webp",
    Image2: "store_images/num6/2.webp",
    Image3: "store_images/num6/3.webp",
    Image4: "store_images/num6/4.webp",
  },
  {
    title: "Adistar Shoes",
    desc3: "Adistar Shoes is very nice",
    price: "230 L.E",
    Image: "store_images/num7/1.webp",
    Image2: "store_images/num7/2.webp",
    Image3: "store_images/num7/3.webp",
    Image4: "store_images/num7/4.webp",
  },
  {
    title: "Adistar Shoes",
    desc3: "Adistar Shoes black is very nice",
    price: "250 L.E",
    Image: "store_images/num8/1.webp",
    Image2: "store_images/num8/2.webp",
    Image3: "store_images/num8/3.webp",
    Image4: "store_images/num8/4.webp",
  },
  {
    title: "Adizero Cleats",
    desc3: "Adizero Cleats is very nice",
    price: "200 L.E",
    Image: "store_images/num9/1.webp",
    Image2: "store_images/num9/2.webp",
    Image3: "store_images/num9/3.webp",
    Image4: "store_images/num9/4.webp",
  },
  {
    title: "AC MILAN shirt",
    desc3: "AC MILAN X PRE-MATCH TOP 2021/22",
    price: "200 L.E",
    Image: "store_images/num10/1.webp",
    Image2: "store_images/num10/2.webp",
    Image3: "store_images/num10/3.webp",
    Image4: "store_images/num10/4.webp",
  },
];
function showDate(){
    let table = '';
    for(let i =0; i < products.length;i++){
        table += `
            <div>
                <img src="${products[i].Image}" id="image${i}" onmouseleave="leaveCard(${i})" onmouseover="overCard(${i})" alt="Sample photo">
                <div class="text">
                  <h3>${products[i].title}</h3>
                  <p>${products[i].desc}</p>
                  <h3>${products[i].price}</h3>
                  <a  onclick="wow(${i})" href="product_info.html">more</a>
                </div> 
           </div>
        `
    }           
    document.getElementById('id').innerHTML = table;

}
function leaveCard(i){
let im = document.getElementById('image'+i)  
im.src = products[i].Image
}
function overCard(i){
let im = document.getElementById('image'+i)  
im.src = products[i].Image2
}
showDate()
function wow(i){
localStorage.branch   = JSON.stringify(products[i])
}
// Start sidebar
let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");

btn.onclick = function () {
    sidebar.classList.toggle("active");
};
// end sidebar
// scroll to top
function scrollToTop() {
  window.scrollTo(0, 0);
}
// --------------------------------
