Template.puzzelGame.rendered = function(){
	 $(document).ready(function() {
            var images = new Array(
                                '/img/slide_puzzel/painting1.jpg',
                                '/img/slide_puzzel/painting2.jpg',
                                '/img/slide_puzzel/painting3.jpg', 
                                '/img/slide_puzzel/painting4.jpg', 
                                '/img/slide_puzzel/painting5.jpg'
                            );
            var l = images.length;
            var randomElement = Math.floor(l * Math.random());
            document.getElementById("gamePuzzle").src = images[randomElement];
            
		       var settings = { 
    				rows: 4,                    // number of rows [3 ... 9] 
    				cols: 4,                    // number of columns [3 ... 9] 
    				hole: 16,                   // initial hole position [1 ... rows*columns] 
    				shuffle: true,             // initially show shuffled pieces [true|false] 
    				numbers: false,              // initially show numbers on pieces [true|false] 
    				language: 'en',             // language for gui elements [language code] 
    				
    				control: { 
        				shufflePieces: false,    // display 'Shuffle' button [true|false] 
        				confirmShuffle: false,   // ask before shuffling [true|false] 
        				toggleOriginal: false,   // display 'Original' button [true|false] 
        				toggleNumbers: false,    // display 'Numbers' button [true|false] 
        				counter: false,          // display moves counter [true|false] 
        				timer: false,            // display timer (seconds) [true|false] 
        				pauseTimer: false         
    				}, 
    				success: { 
        				fadeOriginal: true,    // cross-fade original image [true|false] 
        				callback: undefined,    // callback a user-defined function [function]  
        				callbackTimeout: 300    // time in ms after which the callback is called 
    				}, 
    				animation: { 
        				shuffleRounds: 3,       // number of shuffle rounds [1 ... ] 
        				shuffleSpeed: 800,      // time in ms to perform a shuffle round 
        				slidingSpeed: 200,      // time in ms for a single move 
        				fadeOriginalSpeed: 600  // time in ms to cross-fade original image 
    				},  
    				style: { 
        				gridSize: 2,            // space between two pieces in px 
        				overlap: true,          // if true, adjacent piece borders will overlap 
                                // applies only if gridSize is set to 0 
        				backgroundOpacity: 0.1  // opacity of the original image behind the pieces 
                                // [0 ... 1] (0 means no display) 
    				} 
		} 
		        $('#gamePuzzle').jqPuzzle(settings);
	});
}