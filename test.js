
$('#btn').click(function(){
    var s1 = document.getElementById("name").value;
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
        $('#def').text("Definition: " +data.entries[0].lexemes[0].senses[0].definition);
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
        $('#def2').text("Definition: " +data.list[0].definition);
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
        $('#def3').text("Definition: " +data.meaning.noun);
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
        $('#def4').text("Definition: " +data.results[1].senses[0].definition);
    });

    fetch("https://bing-image-search1.p.rapidapi.com/images/search?q="+s1, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "adeda04aaamsh0df4721c82d6031p18c740jsn1a7ea2e6cbb4",
		"x-rapidapi-host": "bing-image-search1.p.rapidapi.com"
	}
    })
    .then(response => response.json()) 
    .then(function(data){
        console.log(data); 
        $('#img').attr("src", data.value[0].contentUrl);
    });-
})

