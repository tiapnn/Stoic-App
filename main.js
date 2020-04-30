
function timeFunction() {
            setTimeout(function getQuote() {

		let quotes = ["To be evenminded is the greatest virtue.", "Just keep in mind: the more we value things outside our control, the less control we have.", "The tranquility that comes when you stop caring what they say. Or think, or do. Only what you do.", "The whole future lies in uncertainty: live immediately.", "It does not matter what you bear, but how you bear it.", "A gem cannot be polished without friction, nor a man perfected without trials.", "To be calm is the highest achievement of the self."];
		let authors = ["- Heraclitus ", "- Epictetus ", "- Marcus Aurelius", "- Seneca ", "- Seneca ", "- Seneca ", "- Zen proverb"];

		let randomN = Math.floor(Math.random() * quotes.length);

		let randomQuote = quotes[randomN];
		let randomAuth = authors[randomN];

		$("#text").text('"' + randomQuote + '"');
		$("#author").text(randomAuth);
		
	}, 600);
        };



$(document).ready(function() {

	function fadingIn() {
		$("#text").fadeIn(600).toggleClass('hidden');
		$("#author").fadeIn(600);						
	}	


	function fadingOut() {
		$("#text").fadeOut(600).toggleClass('hidden');
		$("#author").fadeOut(600);						
	}
	
	$(".btn").on("click", function() {
		fadingOut();
		fadingIn();
	});
	
	fadingIn();

	$('#tweet-quote').on('click', function() {
		let currentQuote = $("#text").text();
		let currentAuth = $("#author").text();
		window.open('https://twitter.com/intent/tweet?hashtags=quotes&text='+currentQuote +' '+ currentAuth);
	});

	$('#fb-quote').on('click', function() {
		let currentQuote = $("#text").text();
		let currentAuth = $("#author").text();
		window.open('https://www.facebook.com/share.php?u=wisdomquotes.com/stoic-quotes/&quote='+currentQuote +' '+ currentAuth);
	});

	$('#wapp-quote').on('click', function() {
		let currentQuote = $("#text").text();
		let currentAuth = $("#author").text();
		window.open('https://api.whatsapp.com/send?text='+currentQuote +' '+ currentAuth);
	});
});



