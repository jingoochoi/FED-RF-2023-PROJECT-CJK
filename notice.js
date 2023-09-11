// notice js
const data=[
    {number:'1',title:'notice1-recent',date:'2023.10.13',content:`we now announce that we will have a vacation until tomorrow.<br>so the delivery will be delayed 2 or 3days.<br>we are very sorry. thank you`},
    {number:'2',title:'notice2-origin',date:'2023.10.10',content:`sorry for the last issue<br>we now fix it and re-check about it<br>thank you`},
    {number:'3',title:'notice3-opening',date:'2022.12.12',content:`welcome everybody<br>we now open the shop<br>thank you`},
]

const target = document.querySelectorAll('.b table tbody tr');
// console.log(target);
let box=document.querySelectorAll('.box')
target.forEach((ele,idx)=>{
    ele.onclick = () => {
        let num = idx;
        ele.classList.toggle('on');
        // console.log(num);
        if (ele.classList.contains('on')) {
            box.style.display='block'
            box.style.height='100px'
            box.innerHTML=`${data.content}`
        }
        target.forEach((el,ix)=>{
            if(ix!=num) el.classList.remove('on');
        })
    }
})

