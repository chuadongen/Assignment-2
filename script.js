
$('#search').keypress(function(e){
    if(e.keyCode == 13)
    {
        e.preventDefault();
        var s1 = document.getElementById("search").value;
        console.log(s1);
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

            
            
            
            //Noun
            try {
                var noun = (data.meaning.noun).split("(nou)");
                $('#twinnoun').text("1. (nou) " +noun[1]);
              
            } catch (err) {
              
                $('#twinnoun').text("");
              
            }
            //Verb
            try {
                var verb = (data.meaning.verb).split("(vrb)");
                $('#twinverb').text("2. (vrb)" +verb);
              
            } catch (err) {
              
                $('#twinverb').text("");
              
            }
            //Adj
            try {
                var adj = (data.meaning.adjective).split("(adj)");
                $('#twinadj').text("3. (adj)" +adj);
                if (data.meaning.adjective=="") {
                    $('#twinadj').text("");
                  }
              
            } catch (err) {
              
                $('#twinadj').text("");
              
            }
            //Adv
            try {
                var adverb = (data.meaning.adverb).split("(adv)");
                $('#twinadverb').text("4. (adv)" +adverb);
                if (data.meaning.adverb=="") {
                    $('#twinadverb').text("");
                  }
              
            } catch (err) {
              
                $('#twinadverb').text("");
              
            }
        });
    
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
            $('#lexicaladef').text("");
            $('#lexicaladef2').text("");
            //Insert Values
            //Noun
            var x = data.results;
            var count=1;
            for (i = 0; i <x.length; ++i) {
                if (data.results[i].language=="en") {
                    $('#lexicaladef').append(count+". ("+ data.results[i].headword.pos+") " +data.results[i].senses[0].definition+"<br>");
                    count = count+1;
                  }
            }

           
        });
    
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
            $('#img').attr("src", data.value[0].contentUrl);
            for (i = 1; i < 30; i++) {
                var x = "#img"+i
                $(x).attr("src",data.value[i].contentUrl)
            }
        });
    }

})
$('img').on("error", function() {
    $(this).attr('src', placeholder.png);
  });
$( document ).ready(function() {
    var error= "onerror=this.src='placeholder.png'";
    for (i = 1; i < 30; i++) {
        $('.images').append("<img id='img"+(i)+"' src='placeholder.png' class='col-2' "+error+" ></img>");

    }
});

