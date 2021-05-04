const data = [
	{
		"name":"Tigranés Veliký",
		"birth":"140 př. n. l.",
		"death":"55 př. n. l.",
		"bio":"Tigranés Veliký byl v letech 95 př. n. l. - 55 př. n. l. králem starověké Arménie. Pod jeho vládou se tato země na krátký čas stala nejmocnějším státem na východ od Říma. V době největší územní expanze pod jeho vládou sahalo arménské království od Středozemního ke Kaspickému moři a na severu takřka až k moři Černému.",
		"photo":"tigranes.jpg"
	},
	{
		"name":"Chačatur Abovjan",
		"birth":"1809",
		"death":"1848",
		"bio":"Chačatur Abovjan byl arménský spisovatel a národní buditel z počátku 19. století, který záhadně zmizel v roce 1848 a nakonec byl prohlášen za mrtvého.",
		"photo":"abovjan.jpg"
	},
	{
		"name":"Andranik Ozanian",
		"birth":"1865",
		"death":"1927",
		"bio":"Andranik Ozanian byl arménský generál, politický aktivista, bojovník za svobodu a národní hrdina.",
		"photo":"andranik.jpg"
	},
	{
		"name":"Aram Chačaturjan",
		"birth":"1903",
		"death":"1978",
		"bio":"Aram Iljič Chačaturjan byl sovětsko-arménský hudební skladatel, klavírista a dirigent. Světový věhlas mu získala zejména věta z posledního jednání jeho baletu Gajané s názvem Šavlový tanec, dokončená v roce 1942, která evokuje arménský vířivý bojový tanec, při němž tanečníci prokazují své umění se šavlemi.",
		"photo":"chacaturjan.jpg"
	},
	{
		"name":"Serj Tankian",
		"birth":"1967",
        "death": false,
		"bio":"Serj Tankian je arménsko-americký zpěvák, skladatel, básník, aktivista a multiinstrumentalista. Je znám především jako zpěvák metalové skupiny System of a Down. V roce 2002 společně s Tomem Morellem spoluzaložili neziskovou sociálně-politickou organizaci Axis of Justice (česky Osa spravedlnosti).",
		"photo":"tankian.jpg"
	}
];

data.forEach((person)=>{
    console.log(person.name);
    $(".list-group").append(`<button type="button" class="list-group-item list-group-item-action">${person.name}</button>`)
});

function personCard(person) {
    let hero = data.find(item => {return item.name === person});
    if(!hero.death){
        $(".person-header").html(`<h3>${hero.name}</h3>
        <h4 class="lead">${hero.birth}</h4>`);
    }
    else {
        $(".person-header").html(`<h3>${hero.name}</h3>
        <h4 class="lead">${hero.birth} – ${hero.death}</h4>`);
    }

    $(".person-img").html(`<img class="img-fluid d-block mx-auto" src="img/${hero.photo}" alt="${hero.name}">`);
    $(".person-bio").html(`<p class=" p-2">${hero.bio}</p>`)
    console.log(hero.name);
}

$(".list-group-item:first").addClass('bg-light');
personCard(data[0].name);

$(".list-group-item").on("click", function() {
    $(".list-group-item").removeClass('bg-light');
    $(this).addClass('bg-light');
    let person = $(this).text();
    $(".person-article").slideUp(1000, function(){
        personCard(person);
    });
    $(".person-article").slideDown(1000);
});