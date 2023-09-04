const html={
    "egg":`<table align="center">
                <tr>
                    <td rowspan="2"><img src="./img/egg.jpg" alt="egg"></td>
                    <td class="t"><h3>GOOD EGG<br>11,000won</h3></td>
                </tr>
                <tr>
                    <td class="t"><button class="bn">pay</button></td>
                </tr>
            </table>
            <button class="list">BACK TO LIST</button>`,
    "meat":`<table align="center">
                <tr>
                    <td rowspan="2"><img src="./img/meat.jpg" alt="meat"></td>
                    <td><h3>FRESH MEAT<br>11,000won</h3></td>
                </tr>
                <tr>
                    <td><button class="bn">pay</button></td>
                </tr>
            </table>
            <button class="list">BACK TO LIST</button>`,
    "sauce":`<table align="center">
                <tr>
                    <td rowspan="2"><img src="./img/sauce.jpg" alt="sauce"></td>
                    <td><h3>GOOD SAUCE<br>11,000won</h3></td>
                </tr>
                <tr>
                    <td><button class="bn">pay</button></td>
                </tr>
            </table>
            <button class="list">BACK TO LIST</button>`,
    "vegetable":`<table align="center">
                    <tr>
                        <td rowspan="2"><img src="./img/vegetable.jpg"  alt="vegetable"></td>
                        <td class="t"><h3>GOOD VEGETABLE<br>11,000won</h3></td>
                    </tr>
                    <tr>
                        <td class="t"><button class="bn">pay</button></td>
                    </tr>
                </table>
                <button class="list">BACK TO LIST</button>`,
    "bowl":`<table align="center">
                <tr>
                    <td rowspan="2"><img src="./img/bowl.jpg" alt="bowl"></td>
                    <td class="t"><h3>BEAUTIFUL BOWL<br>11,000won</h3></td>
                </tr>
                <tr>
                    <td class="t"><button class="bn">pay</button></td>
                </tr>
            </table>
            <button class="list">BACK TO LIST</button>`,
    "knife":`<table align="center">
                <tr>
                    <td rowspan="2"><img src="./img/knife.jpg" alt="knife"></td>
                    <td class="t"><h3>VERY SHARP KNIVES<br>11,000won</h3></td>
                </tr>
                <tr>
                    <td class="t"><button class="bn">pay</button></td>
                </tr>
            </table>
            <button class="list">BACK TO LIST</button>`,
    "plate":`<table align="center">
                <tr>
                    <td rowspan="2"><img src="./img/plate.jpg" alt="plate"></td>
                    <td class="t"><h3>BEAUTIFUL PLATE<br>11,000won</h3></td>
                </tr>
                <tr>
                    <td class="t"><button class="bn">pay</button></td>
                </tr>
            </table>
            <button class="list">BACK TO LIST</button>`,
    "spoonset":`<table align="center">
                <tr>
                    <td rowspan="2"><img src="./img/spoonset.jpg" alt="vegetable"></td>
                    <td class="t"><h3>GOOD SPOON SET<br>11,000won</h3></td>
                </tr>
                <tr>
                    <td class="t"><button class="bn">pay</button></td>
                </tr>
            </table>
            <button class="list">BACK TO LIST</button>`,
}
window.addEventListener('DOMContentLoaded',imgft)
function imgft() {
    let imgo=document.querySelectorAll('.imk')//bug1
    let tbl=document.querySelector('.tblBox')
    // console.log(tbl)

    imgo.forEach(ele=>{
        ele.onclick=function(e){
            // console.log('b',e.target.alt)//bug1

            let txt = e.target.alt;
            tbl.innerHTML = html[txt];
            
        }

    })
    
}
window.addEventListener('click',btft)
function btft() {
    let bt=document.querySelector('.list')
    bt.onclick=function () {
        // console.log('b')
        window.removeEventListener('DOMContentLoaded',imgft)
        window.location.reload();//refresh
    }
}