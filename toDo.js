
 function addEle()
{ 
    var table=document.createElement("table");
    
    var tr = document.createElement('tr');
 
     table.border=5;
     table.cellPadding=15;
     table.width=350;
    
     
        var tr = document.createElement('tr');
        tr.setAttribute('class', 'row');
        var desc = document.createElement('td');
        var date = document.createElement('td');
        var getdate = document.getElementById('day').value;
        var getdesc = document.getElementById('desc').value;
        var x = document.createElement("BUTTON");
        var t=document.createTextNode("Remove");
        table.style.backgroundColor="lightgray";
        table.style.fontFamily="comic sans MS";
    

        
        date.append(getdate); 
        desc.append(getdesc);
        tr.appendChild(date);
        tr.appendChild(desc);
        x.appendChild(t);
        tr.appendChild(x);
        table.appendChild(tr);
        document.body.appendChild(table);
       

}


function remove(){
}
