

// <h4 class="navbar-text">
//         THE GIPHY CLONE
//       </h4>  
$('#search').click(function(){
    $('#search').hide()


    console.log("you clicked on search button")
    document.getElementById('gifs').innerHTML = ""
    document.getElementById('searchbox').innerHTML = ""



   var a = document.createElement('input')
   document.getElementById('searchbox').appendChild(a)



   var submit = document.createElement("button")
   submit.setAttribute('id' ,"submit")
   document.getElementById('searchbox').appendChild(submit)
    document.getElementById('submit').innerHTML = "submit"
    
    $('#submit').click(function(){


        var query = $('input').val()
        var xhr = new XMLHttpRequest()

        xhr.onreadystatechange  = function(){
            if (this.status == 200 & this.readyState == 4){
                var response = this.responseText
                var response = JSON.parse(this.responseText)
                console.log(response.data)

                showgif(response)
            }
            
        }


        xhr.open("GET",'https://api.giphy.com/v1/gifs/search?api_key=q4PaCRrD82pJW6qwSxL8aOBNgbpHsv9H&q=' +query+' &limit=10&offset=0&rating=r&lang=en')
        xhr.send()
        document.getElementById('searchbox').innerText = "";

    })

});


$('#trending').click(function(){
    $('#search').show()
    document.getElementById('gifs').innerHTML = ""
    document.getElementById('searchbox').innerHTML = ""
    console.log("you clicked on trending button")
    var xhr = new XMLHttpRequest()

    xhr.onreadystatechange  = function(){
    if (this.status == 200 & this.readyState == 4){
        var response = this.responseText
        var response = JSON.parse(this.responseText)
        console.log(response.data)
        showgif(response)
    }
    
}

xhr.open("GET",'https://api.giphy.com/v1/gifs/trending?api_key=q4PaCRrD82pJW6qwSxL8aOBNgbpHsv9H&limit=10&rating=pg')
xhr.send();
})


function showgif(gifcontent){
    if(gifcontent.data.length == 0){
        document.getElementById("gifs").innerHTML = '<h1>no match returned to your request</h1>'
    }
    else{
    for (let index = 0; index < gifcontent.data.length; index++) {
        var url = gifcontent.data[index].images.downsized.url;
        var title = gifcontent.data[index].title
        document.getElementById("gifs").innerHTML += '<li>'
                                                         + title +"<br>"
                                                         +" <img src = " + url +" width = "+'200px' +"height = "+'200px'+""+"   >" + "</a>"
                                                         + '</li>'
        
    }
    document.getElementById("gifs").innerHTML += '</ul>';
    }
}     
