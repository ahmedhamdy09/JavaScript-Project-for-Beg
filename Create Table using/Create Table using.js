let rowsInput = document.getElementById('rows');
let colsInput = document.getElementById('cols');
let btn = document.querySelector('button');

btn.addEventListener('click', createTable);

function createTable(){
    let body = document.body; //catch body
    let table = document.createElement("table");



    for(var i =0 ; i< +rowsInput.value ;i++){
        let tr = document.createElement("tr");//<tr></tr>
        table.appendChild(tr); 
        console.log(tr);
        for(var j =0 ; j< +colsInput.value ;j++){
            let td = document.createElement("td");
            let txt = document.createTextNode("item text");
            td.appendChild(txt);
            //  or   td.innerHTML= "item text";
            tr.appendChild(td); 
            console.log(td);
        }
    
    }

    body.appendChild(table);
}

createTable();