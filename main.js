var searchFilter=document.getElementById('searchFilter');
    searchFilter.addEventListener('keyup',Search);

    function Search(){
        var filterValue = document.getElementById('searchFilter').value.toUpperCase();
        var ul=document.getElementById('ul');
        var li=ul.querySelectorAll('li.collection-item');

        for(var i=0;i<=li.length;i++){
            var a=li[i].querySelectorAll('a')[0];

                 if(a.innerHTML.toUpperCase().indexOf(filterValue)>-1){
                     li[i].style.display='';
                 }else{
                    li[i].style.display='none';
                 }
        }
    }