let formId ;
let overlayLogin = document.querySelector(".popup-overlay-login");
let popupLogin = document.querySelector(".popup-box-login") ;
let upload = document.querySelectorAll(".form .loadImg .upload");
let functionModel = "add";
// Select img change تغيير صورة ال HOME
let imgHomeChange = document.querySelector(".home .content .img img");
// array of img 
let imgsHomeArray = ["men2.jpg","men5.jpg","men6.jpg","women3.jpg","women5.jpg","women8.jpg","kids2.jpg","kids3.jpg"]
setInterval(()=>{
let randomIndex = Math.floor(Math.random() * imgsHomeArray.length)
imgHomeChange.setAttribute("src",`img/${imgsHomeArray[randomIndex]}`)
},4000)
// Get ID

document.querySelectorAll(".addForm").forEach(element => {
    element.onsubmit = (e) => {
        e.preventDefault();
    }
});
let sizes = document.querySelectorAll(`.addForm .size`)
function getColor(){
    let color = document.getElementById(`ShoeColor${formId}`).value ;
    if(color !=""){
        let colorArray = color.split(" ")
        for(i=0 ; i<colorArray.length ; i++){
            document.querySelector(`.color${formId}Size${i+1}`).innerHTML = `${colorArray[i]} Size`;
        }
        sizes.forEach(size=>{
            size.style.display="Block"
        })
        document.querySelector(`.add${formId}`).style.display="block"
    }
}
// Popup Box Picture 
let ourPicture = document.querySelectorAll(".boxes .box img")
function addNew(){
    let urlInput = document.getElementById(`uploadInput${formId}`);
    let idInput = document.getElementById(`shoeId${formId}`)
    let priceInput = document.getElementById(`ShoePrice${formId}`)
    let colors = document.getElementById(`ShoeColor${formId}`)
    let sizeColor1 = document.getElementById(`color1Size${formId}`)
    let sizeColor2 = document.getElementById(`color2Size${formId}`)
    let sizeColor3 = document.getElementById(`color3Size${formId}`)
    let addForm = document.getElementById(`form${formId}`)
    let BoxesGroup = document.querySelector(`.boxes .boxes${formId}`)
    if(functionModel == "add"){
        let newData = `
            <div class="box" onclick="showModal(this , ${formId})">
                <div class="img img${idInput.value}">
                    <img src="${urlInput.value}">
                </div>
                <div class="popup-text popup${idInput.value}">
                    <p>Shoes Id : <span class="id">${idInput.value}</span></p>
                    <p class="price">${priceInput.value}</p>
                    <p>Colors : <span class="colorShoes">${colors.value}</span></p>
                    <p class="shoecolor1">White Size : <span>${sizeColor1.value}</span></p>
                    <p class="shoecolor2">Black Size : <span>${sizeColor2.value}</span></p>
                    <p class="shoecolor3">Gray Size : <span>${sizeColor3.value}</span></p>
                </div>
            </div>
    `
        BoxesGroup.insertAdjacentHTML("beforeend", newData);
        sizes.forEach(size=>{
            size.style.display="none"
        })
        document.querySelector(".addNew").style.display="none"
    }
    else {
        urlInput.value = document.querySelector(`.img${idInput.value} img`).src 
        let newData = `
            <div class="box box${idInput.value} "onclick="showModal(this)">
                <div class="img img${idInput.value}">
                    <img src="${urlInput.value}">
                </div>
                <div class="popup-text popup${idInput.value}">
                    <p>Shoes Id : <span class="id">${idInput.value}</span></p>
                    <p>Price By $ <span class="price">${priceInput.value}</span></p>
                    <p>Colors : <span class="colorShoes">${colors.value}</span></p>
                    <p class="shoecolor1">White Size : <span>${sizeColor1.value}</span></p>
                    <p class="shoecolor2">Black Size : <span>${sizeColor2.value}</span></p>
                    <p class="shoecolor3">Gray Size : <span>${sizeColor3.value}</span></p>
                </div>
            </div>
    `
        document.querySelector(`.box${idInput.value}`).innerHTML = newData ;
    }
    addForm.style.display="none"
    urlInput.value="";
    idInput.value="";
    priceInput.value="";
    colors.value=""
}

function showModal(e , group) {
        document.querySelector(".popup-overlay").style.display = 'block';
        document.querySelector(".popup-box").style.display = 'flex';
        let src = e.querySelector('img').src;
        let id = e.querySelector('.id').innerHTML;
        let price = e.querySelector('.price').innerHTML;
        let color = e.querySelector(".colorShoes").innerHTML;
        let colorArray = color.split(" ")
        for(i=0 ; i<colorArray.length ; i++){
            document.querySelector(`.color${i+1}`).innerHTML = colorArray[i];
        }
        document.querySelector(`.popup-box .colors1 .sizes`).innerHTML = "";
        document.querySelector(`.popup-box .colors2 .sizes`).innerHTML = "";
        document.querySelector(`.popup-box .colors3 .sizes`).innerHTML = "" ;
        let color1Size = document.querySelector(`.boxes${group} .popup${id} .shoecolor1 span`).innerHTML;
        let color2Size = document.querySelector(`.boxes${group} .popup${id} .shoecolor2 span`).innerHTML;
        let color3Size = document.querySelector(`.boxes${group} .popup${id} .shoecolor3 span`).innerHTML;
        document.querySelector(`.popup-box`).querySelector('img').src = src;
        document.querySelector(`.popup-box`).querySelector('.id').innerHTML = id
        document.querySelector(`.popup-box`).querySelector('.price').innerHTML = price;
        document.querySelector(`.popup-box`).querySelector('.colorShoes').innerHTML = color;
        document.querySelector(`.popup-box`).querySelector('.colors1 .sizes').innerHTML = color1Size;
        document.querySelector(`.popup-box`).querySelector('.colors2 .sizes').innerHTML = color2Size;
        document.querySelector(`.popup-box`).querySelector('.colors3 .sizes').innerHTML = color3Size;
} 
// Popup Box for login
function LoginPopup(id , FunctionModel){
    overlayLogin.style.display = 'block';
    popupLogin.style.display = 'block';
    formId = id
    functionModel = FunctionModel ;
}
// Login
function login(){
    let userName = document.getElementById("userName");
    let password = document.getElementById("password");
    let addForm = document.getElementById(`form${formId}`)
    if(userName.value == "Saleh1234" && password.value == "1234"){
        document.getElementById("wrong").innerHTML=""
        document.querySelector(".popup-overlay-login").style.display = "none"
        document.querySelector(".popup-box-login").style.display = "none"
        if(functionModel == "add"){
            document.querySelector(`.addForm${formId} .addTitle`).innerHTML = `Add New Model`
            document.querySelector(`.addForm${formId} .addSize`).innerHTML = `<i class="fas fa-plus"></i> Add Size`
            document.querySelector(`.addForm${formId} .addNew`).innerHTML = `<i class="fas fa-plus"></i> Add`
            document.querySelector(`.addForm${formId} .loadImg`).style.display = "block"
        }
        else {
            document.querySelector(`.addForm${formId} .addTitle`).innerHTML = "Edit Model"
            document.querySelector(`.addForm${formId} .addSize`).innerHTML = `<i class="fas fa-user-edit"></i> Edit Size`
            document.querySelector(`.addForm${formId} .addNew`).innerHTML = `<i class="fas fa-user-edit"></i> Edit`
            document.querySelector(`.addForm${formId} .loadImg`).style.display = "none"
        }
        addForm.style.display = "block"
        userName.value = ""
        password.value=""
    }
    else {
        document.getElementById("wrong").innerHTML="* Verify your username or password"
    }
}
function infoBlock(){
    document.querySelector(".footer .SalehInfo").style.display="block"
}

// ================================================================
// Curds Managment 
let id = document.getElementById("id") // input
let price = document.querySelector(".priceInput span") // label
let total = document.getElementById("total")
let count = document.getElementById("count")
let radioInput = document.querySelectorAll(".cruds .inputs .radioDiv input")
let submit = document.getElementById("submit")
let size = document.getElementById("size")
let img = document.getElementById("shoeImg")
let finish = document.getElementById("finish")
let countDiv = document.getElementById("countDiv")
let operator = "create"; // تحديد نوع العملية تعديل او اضافة
let theImg ;
let theColor ;
let index ;
let theBigTotal = 0 ;
function getPrice(){
    if(id.value != ""){
        theImg =  document.querySelector(`.img${id.value} img`)
        let thePrice = document.querySelector(`.popup${id.value} .price`)
        let color = document.querySelector(`.popup${id.value} .colorShoes`).innerHTML.split(" ")
        for(i=0 ; i<color.length;i++){
            document.getElementById(`label${i+1}`).innerHTML=color[i]
        }
        img.style.display = "block"
        img.src = theImg.src
        price.innerHTML = thePrice.innerHTML ;
    }
    else {
        price.innerHTML = ""
        img.style.display = "none"
        radioInput.forEach(input=>{
            input.checked = false ;
        })
        for(i=0 ; i<3;i++){
            document.getElementById(`label${i+1}`).innerHTML=""
        }
    }
}
// Get Size 
sizeArray = document.querySelector(".sizeArray");
function getSize(){
    if(id.value!=""){
        theFirstSize = document.querySelector(`.popup${id.value} .shoecolor1 span`) 
        theSeconedSize = document.querySelector(`.popup${id.value} .shoecolor2 span`) 
        theThirdSize = document.querySelector(`.popup${id.value} .shoecolor3 span`) 
        radioInput.forEach(color=>{
            if(color.checked == true){
                if(color.value === "color1"){
                    sizeArray.innerHTML ="";
                    sizeArray.innerHTML += `: [${theFirstSize.innerHTML}]`;
                }
                if(color.value === "color2") {
                    sizeArray.innerHTML ="";
                    sizeArray.innerHTML += `: [${theSeconedSize.innerHTML}]`;
                }
                if(color.value === "color3"){
                    sizeArray.innerHTML ="";
                    sizeArray.innerHTML += `: [${theThirdSize.innerHTML}]`;
                }
            }
        })
    }
}
// Get Total Function : 
function getTotal(){
    if(price.innerHTML != '' && count.value != ''){
        let result = parseInt(price.innerHTML) * count.value ;
        total.innerHTML = `${result}$`;
        total.style.background = "#040";
    }else {
        total.innerHTML = '';
        total.style.background = "#a00d0a";
    }
}
let dataPro ;
if(localStorage.products != null){
    dataPro = JSON.parse(localStorage.products) ;
}else{
    dataPro = [] ;
}
// Adddddddddddddddddddddddddddddddddd
submit.onclick = function(){
    for (i=0; i<radioInput.length;i++){
        if(radioInput[i].checked == true){
            theColor = document.getElementById(`label${i+1}`).innerHTML;
        }

    }
    let newData = {
        id : id.value ,
        price : price.innerHTML ,
        color : theColor ,
        count : count.value ,
        img : img.src,
        size:size.value,
        avalibleSize:sizeArray.innerHTML ,
        total : total.innerHTML 
    }
    if(id.value!='' && 
        newData.count < 100){
        if(operator==="create"){ // Create Data
            // Use Count Of Product
            if(newData.count > 1){
                for (let i=1 ; i<= count.value ; i++){
                    dataPro.push(newData)
                }
            }else {
                dataPro.push(newData)
            }
        clearInput();
        }
        else{ //Update Data 
            dataPro[index]= newData ;
            countDiv.style.display="block"
            total.style.background = "#a00d0a";
            img.style.display='none'
            submit.innerHTML = "Create";
            operator="create";
        }
    }
    // Save Local Storage 
    localStorage.setItem("products" , JSON.stringify(dataPro));
    // Clear Inputs 
    clearInput();
    showData();
}

// Clear Inputs 
function clearInput(){
    id.value = '' ;
    price.innerHTML = ''
    total.innerHTML = '';
    count.value = '';
    size.value=''
    sizeArray.innerHTML='';
    radioInput.forEach(input=>{
        input.checked = false
    })
    img.style.display = "none";
}

// Show Data 
function showData (){
    let table = '' ;
    for (let i = 0 ; i < dataPro.length ; i++){
        table += `
            <tr>
                <td>${i+1}</td>
                <td>${dataPro[i].id}</td>
                <td>${dataPro[i].price}</td>
                <td>${dataPro[i].color}</td>
                <td>${dataPro[i].size}</td>
                <td><img src="${dataPro[i].img}"></td>
                <td><button onclick="updateData(${i})" id="update"><i class="fas fa-user-edit"></i> Update</button></td>
                <td><button onclick="deleteData(${i})" id="delete"><i class="fas fa-trash"></i> Delete</button></td>
            </tr>
        ` 
        
    }
    document.getElementById("tbody").innerHTML = table;

    if(dataPro.length > 0){
        document.getElementById("deleteAll").innerHTML=`
        <button onclick="deleteAll()"><i class="fas fa-trash"></i> Delete All (${dataPro.length})</button>
        `
        finish.style.display = "block"
    }else {
        document.getElementById("deleteAll").innerHTML=''
        finish.style.display = "none"
    }
}

// Delete One Product
function deleteData(i){
    dataPro.splice(i,1)
    localStorage.products =JSON.stringify(dataPro);
    showData();
}
// Delete All Product
function deleteAll(){
    dataPro.splice(0)
    localStorage.products =JSON.stringify(dataPro);
    showData();
}

//Update Data 
function updateData(i){
    id.value = dataPro[i].id;
    price.innerHTML = dataPro[i].price;
    total.innerHTML = dataPro[i].total;
    size.value = dataPro[i].size;
    sizeArray.innerHTML = dataPro[i].avalibleSize;
    img.src = dataPro[i].img
    let color = document.querySelector(`.popup${id.value} .colorShoes`).innerHTML.split(" ")
    for(i=0 ; i<color.length;i++){
        document.getElementById(`label${i+1}`).innerHTML=color[i]
    }
    countDiv.style.display="none"
    img.style.display="block";
    submit.innerHTML = "Update";
    operator="update";
    index = i
    scroll({
        top:4900,
        behavior:"smooth"
    })
}

// Search 
let searchBy = "id";
function onSearch(id){
    let search = document.getElementById("search")
    if(id==="searchId"){
        searchBy = "id"
        search.placeholder = "Search By Id"
    }
    else{
        searchBy = "color"
        search.placeholder = "Search By Color"
    }
    search.focus();
    search.value='';
    showData();
}
// Search Data 
function searchData(value){
    let table = ''
    if(searchBy == 'id'){
        for(let i=0 ;i<dataPro.length ; i++){
            if(`${dataPro[i].id}`.includes(value)){
                table += `
                <tr>
                <td>${i+1}</td>
                <td>${dataPro[i].id}</td>
                <td>${dataPro[i].price}</td>
                <td>${dataPro[i].color}</td>
                <td>${dataPro[i].size}</td>
                <td><img src="${dataPro[i].img}"></td>
                <td><button onclick="updateData(${i})" id="update">update</button></td>
                <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                </tr>
                    ` 
            }
        }
    }
    else {
        for(let i=0 ;i<dataPro.length ; i++){
            if(dataPro[i].color.includes(value)){
                table += `
                    <tr>
                        <td>${i+1}</td>
                        <td>${dataPro[i].id}</td>
                        <td>${dataPro[i].price}</td>
                        <td>${dataPro[i].color}</td>
                        <td>${dataPro[i].size}</td>
                        <td><img src="${dataPro[i].img}"></td>
                        <td><button onclick="updateData(${i})" id="update">update</button></td>
                        <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                    </tr>
                    ` 
            }
        }
    }
    document.getElementById("tbody").innerHTML = table;
}
let theNumOfElements = dataPro.length 
function getBigTotal(){
    for(i=0 ; i< dataPro.length ; i++ ){
        
        theBigTotal += +dataPro[i].price
    }
}
finish.onclick = function (){
    // window.reload();
    getBigTotal();
    document.getElementById("number").innerHTML= dataPro.length
    document.getElementById("priceAll").innerHTML= theBigTotal
    document.querySelector(".popup-box-finish").style.display="block"
    document.querySelector(".popup-overlay-finish").style.display="block"
}
// show Data
showData();
// Visa Card 
let paypal = document.querySelector(".paypal")
let visaForm = document.getElementById("visaForm")
let cardNum = document.getElementById("cardNum")
let nameCard = document.getElementById("nameCard")
let securityCard = document.getElementById("securityCard")
let titleInfo = document.querySelector(".personalInfo")
let location2 = document.querySelector(".Location")
let phone = document.querySelector(".phone")
function getInfo(){
    if(cardNum.value!="" && nameCard.value!="" && securityCard.value!=""){
        titleInfo.style.display = "block"
        location2.style.display = "block"
        phone.style.display = "block"
    }
    else {
        titleInfo.style.display = "none"
        location2.style.display = "none"
        phone.style.display = "none"
    }
}
function visaVisible() {
    visaForm.style.display="block"
    document.querySelector(`.popup-overlay-finish`).style.display = 'none';
    document.querySelector(`.popup-box-finish`).style.display = 'none';
}
function payPalVisbile() {
    paypal.style.display="block"
    document.querySelector(`.popup-overlay-finish`).style.display = 'none';
    document.querySelector(`.popup-box-finish`).style.display = 'none';
    setInterval(function(){
        document.querySelector(".endSpan").innerHTML+="."
    },2000);
    setTimeout(() => {
        paypal.style.display="none"
    }, 8000);
    document.querySelector(".endSpan").innerHTML="Adidas store family"
}
function payNow(){
    visaForm.style.display="none"
    document.querySelector(`.popup-overlay-complete`).style.display = 'block';
    document.querySelector(`.popup-box-complete`).style.display = 'block';
    setTimeout(() => {
        document.querySelector(`.popup-overlay-complete`).style.display = 'none';
        document.querySelector(`.popup-box-complete`).style.display = 'none';
        dataPro.splice(0)
        localStorage.products =JSON.stringify(dataPro);
        location.reload();
    }, 4000);
    scroll({
        top:0,
        behavior:"smooth"
    })
}
// CLose-button 
document.addEventListener('click', function(e) {
    if(e.target.className === 'closeButton'){
        document.querySelector(`.popup-overlay`).style.display = 'none';
        document.querySelector(`.popup-box`).style.display = 'none';
        document.querySelector(`.popup-overlay-login`).style.display = 'none';
        document.querySelector(`.popup-box-login`).style.display = 'none';
        document.querySelector(".footer .SalehInfo").style.display="none"
        document.querySelector(`.popup-overlay-finish`).style.display = 'none';
        document.querySelector(`.popup-box-finish`).style.display = 'none';
        visaForm.style.display="none"
    }
})