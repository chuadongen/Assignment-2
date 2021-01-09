// prevent enter for search and run apicall
$('#search').keypress(function(e){
    if(e.keyCode == 13)
    {
        e.preventDefault();
        apicall();
    }
})


//function for all api calls
function apicall(){
    //get search query
    var s1 = document.getElementById("search").value;
    //change external search links to links with query
    $("#google").attr("href",("https://www.google.com/search?q="+s1+"&oq="+s1+"aqs=chrome.0.69i59j46i131i433j0i433j69i60l3j69i61j69i60.701j0j4&sourceid=chrome&ie=UTF-8"))
    $("#bing").attr("href",("https://www.bing.com/search?q="+s1+"&form=QBLH&sp=-1&pq=&sc=0-0&qs=n&sk=&cvid=E34CB66164EB416AAB0F4275867DC20C"))
    $("#merweb").attr("href",("https://www.merriam-webster.com/dictionary/"+s1))
    $("#oxf").attr("href",("https://www.oxfordlearnersdictionaries.com/definition/english/"+s1+"?q="+s1))
    $("#duckduckgo").attr("href",("https://duckduckgo.com/?q="+s1+"&t=h_"))
    $("#youtube").attr("href",("https://www.youtube.com/results?search_query="+s1))

    //api call for lingua dict
    fetch("https://lingua-robot.p.rapidapi.com/language/v1/entries/en/"+s1, {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "adeda04aaamsh0df4721c82d6031p18c740jsn1a7ea2e6cbb4",
        "x-rapidapi-host": "lingua-robot.p.rapidapi.com"
    }
    })
    .then(response => response.json()) 
    .then(function(data){
        console.log(data); 
        //clear
        $('#linguadef').text("");
        $('#linguadef2').text("");
        $('#linguapro').text("");
        $('#linguaexp').text("");
        $('#linguaexp2').text("");
        //Insert values
        //html is already preset, so just add in text
        //Pronounciation
        try {

            $('#linguapro').text(data.entries[0].pronunciations[0].context.regions[0]+": "+data.entries[0].pronunciations[0].transcriptions[0].transcription);
            
        } catch (err) {
            
            $('#linguapro').text("Pronounciation: Not found");
            
        }
        //Definition 1
        try {

            $('#linguadef').text("1. (" +data.entries[0].lexemes[0].partOfSpeech+") "+data.entries[0].lexemes[0].senses[0].definition);
            
        } catch (err) {
            
            $('#linguadef').text("Example: Not found");
            
        }
        //Example 1
        try {

            $('#linguaexp').text("Example: "+data.entries[0].lexemes[0].senses[0].usageExamples[0]);
            
        } catch (err) {
            
            $('#linguaexp').text("Example: Not found");
            
        }
        //Definition 2
        try {

            $('#linguadef2').text("2. (" +data.entries[0].lexemes[1].partOfSpeech+") "+data.entries[0].lexemes[1].senses[0].definition);
            
        } catch (err) {
            
            $('#linguadef2').text("Definition: Not found");
            
        }
        //Example 2
        try {

            $('#linguaexp2').text("Example. "+data.entries[0].lexemes[1].senses[0].usageExamples[0]);
            
        } catch (err) {
            
            $('#linguaexp2').text("Example: Not found");
            
        }

    });

    //api call for urban dictionary
    fetch("https://mashape-community-urban-dictionary.p.rapidapi.com/define?term="+s1, {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "adeda04aaamsh0df4721c82d6031p18c740jsn1a7ea2e6cbb4",
        "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com"
    }
    })
    .then(response => response.json()) 
    .then(function(data){
        console.log(data); 
        //clear
        $('#urbandef').text("");
        $('#urbanexp').text("");
        //Insert values
        //html is already preset, so just add in text
        //Definition 1
        try {

            $('#urbandef').text("1. " +data.list[0].definition);
            
        } catch (err) {
            
            $('#urbandef').text("Definition: Not found");
            
        }
        //Example 1
        try {

            $('#urbanexp').text("Example: " +data.list[0].example);
            
        } catch (err) {
            
            $('#urbanexp').text("Example: Not found");
            
        }
        //Definition 2
        try {

            $('#urbandef2').text("2. " +data.list[1].definition);
            
        } catch (err) {
            
            $('#urbandef2').text("Definition: Not found");
            
        }
        //Example 2
        try {

            $('#urbanexp2').text("Example: " +data.list[1].example);
            
        } catch (err) {
            
            $('#urbanexp2').text("Example: Not found");
            
        }


    });

    //api call for twinword dictionary
    fetch("https://twinword-word-graph-dictionary.p.rapidapi.com/definition/?entry="+s1, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "adeda04aaamsh0df4721c82d6031p18c740jsn1a7ea2e6cbb4",
            "x-rapidapi-host": "twinword-word-graph-dictionary.p.rapidapi.com"
        }
    })
    .then(response => response.json()) 
    .then(function(data){
        console.log(data); 
        //clear elements
        $('#twindef').empty();
        
        //insert values
        //append html code as a child elemnt
        var definitioncount=1;
        //Noun
        try {
            var noun = (data.meaning.noun).split("(nou)");
            if (data.meaning.noun!="") {
                $('#twindef').append("<a>"+definitioncount+". (nou) " +noun[1]+"</a><br>");
                definitioncount+=1;
            }
            
        } catch (err) {
            
            $('#twindef').append("<a>Definition: Not found</a><br>");
            
        }
        //Verb
        try {
            var verb = (data.meaning.verb).split("(vrb)");
            if (data.meaning.verb!="") {
                $('#twindef').append("<a>"+definitioncount+". (vrb)" +verb[1]+"</a><br>");
                definitioncount+=1;
                }
            
        } catch (err) {
            
            
            
        }
        //Adj
        try {
            var adj = (data.meaning.adjective).split("(adj)");
            
            if (data.meaning.adjective!="") {
                $('#twindef').append("<a>"+definitioncount+". (adj)" +adj[1]+"</a><br>");
                definitioncount+=1;
                }
            
        } catch (err) {
            
            
        }
        //Adv
        try {
            var adverb = (data.meaning.adverb).split("(adv)");
            
            if (data.meaning.adverb!="") {
                $('#twindef').append("<a>"+definitioncount+". (adv)" +adverb[1]+"</a><br>");
                definitioncount+=1;
                }
            
        } catch (err) {
            
            
        }
    });

    //api call for lexicala
    fetch("https://lexicala1.p.rapidapi.com/search?text="+s1, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "adeda04aaamsh0df4721c82d6031p18c740jsn1a7ea2e6cbb4",
            "x-rapidapi-host": "lexicala1.p.rapidapi.com"
        }
    })
    .then(response => response.json()) 
    .then(function(data){
        console.log(data); 
        //Clear
        $('#lexicaladef').empty();
        //Insert Values as child html
        //Noun
        var x = data.results;
        var count=1;
        
        for (i = 0; i <x.length; ++i) {
            if (data.results[i].language=="en") {
                $('#lexicaladef').append("<a>"+count+". ("+ data.results[i].headword.pos+") " +data.results[i].senses[0].definition+"</a><br>");
                count = count+1;
                }
        }
        if (count-1==0){
            $('#lexicaladef').append("<a>Definition: Not found</a><br>");
            }

        
    });

    //api call for bing image search
    fetch("https://bing-image-search1.p.rapidapi.com/images/search?q="+s1+"&count=40", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "adeda04aaamsh0df4721c82d6031p18c740jsn1a7ea2e6cbb4",
        "x-rapidapi-host": "bing-image-search1.p.rapidapi.com"
    }
    })
    .then(response => response.json()) 
    .then(function(data){
        console.log(data); 
        var i;
        //for first, predfined image html (could have went without it also, left it for testing purposes)
        $('#img').attr("src", data.value[0].contentUrl);
        //for subsequent images
        for (i = 1; i < 30; i++) {
            var x = "#img"+i
            $(x).attr("src",data.value[i].contentUrl)
        }
    });
    
}



//autocomplete suggestion feature
$('#search').keyup(function(e){
    //get query
    var s1 = document.getElementById("search").value;
    //api call for top searches webit
    fetch("https://webit-keyword-search.p.rapidapi.com/autosuggest?q="+s1+"&language=en", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "adeda04aaamsh0df4721c82d6031p18c740jsn1a7ea2e6cbb4",
        "x-rapidapi-host": "webit-keyword-search.p.rapidapi.com"
    }
    })
    .then(response => response.json()) 
    .then(function(data){
        //clear
        $('#suggestions').empty();
        var arr = [];
        //append html as child element
        for (i = 0; i <5; ++i) {
            $('#suggestions').append('<div class="suggestion-content">'+data.data.results[i]+'</div>')   
            arr.push(data.data.results[i]);
            
        }
    //on click, search the query
    $('.suggestion-content').mousedown(function(e){
        var s2= this.innerHTML;
        console.log(s2);
        $('#search').val(s2);
        
        apicall();
        
        })
        
    })
    .catch(err => {
        console.error(err);
    });
})
//on focus out, clear suggestions to empty view
$('#search').focusout(function(){
    $('#suggestions').empty();
})
//load other 29 images
$( document ).ready(function() {
    var error= "onerror=this.src='Images/placeholder.png'";
    for (i = 1; i < 30; i++) {
        $('.images').append("<img id='img"+(i)+"' src='placeholder.png' class='col-2 imgs' "+error+" ></img>");

    }
});