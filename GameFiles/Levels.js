export const GameInfo = {
	Rules: ['you', 'push', 'win', 'stop', 'sink', 'defeat'],
	Sprites: {
		//Forward[0, 0, 25, 25],[24,0,25,25],[50,0,25,25],[74,0,25,25],[100,0,25,25]
		//Backward[236, 0, 25, 25],[261,0,25,25],[287,0,25,25],[311,0,25,25],[336,0,25,25]
		//up[125, 0, 25, 25],[149,0,25,25],[173,0,25,25],[190,0,25,25],[211,0,25,25]
		baba: {
			left:[[239,-3,24,24],[263,-3,24,24],[287,-3,24,24],[311,-3,24,24],[336,-4,24,24]],
			right:[[2,2,21,22],[25,3,23,20],[48,1,25,23],[74,0,21,25],[95,2,26,21]],
			up:[[122,0,20,23],[145,0,23,23],[171,0,19,23],[195,0,19,22],[216,0,23,23]],
			down:[[359, 0, 25, 25],[381,0,25,25],[406,0,25,25],[431,0,25,25],[455,0,25,25]],
		},
		rock: [[360, 504, 27, 25]],
		wall: [[390, 1518, 12, 12]],
		flag: [[143, 503, 25, 25]],
		water: [[270, 1200, 25, 25]],
		skull: [[265, 360, 25, 25]],
	},
	textSprites: {
		baba: [[145,647,21,25],[145,671,21,25],[145,695,21,25]],
		rock: [[241,792,23,25],[240,816,23,25],[240,840,23,25]],
		wall: [[624,792,23,24],[624,815,23,24],[624,840,23,24]],
		flag: [[48,720,23,25],[49,744,23,25],[47,768,23,25]],
		is: [[410,719,23,25],[409,743,23,25],[409,767,23,25]],
		stop: [[240,1009,24,24],[239,1032,24,24],[240,1056,24,24],],
		push: [[0,1007,24,25],[0,1032,25,25],[0,1056,24,25]],
		win: [[360,1007,24,24],[360,1032,24,24],[360,1056,24,24]],
		you: [[432,1007,24,24],[431,1032,25,24],[432,1056,24,24]],
		water: [[647,791,24,25],[647,815,24,25],[647,839,24,25]],
		sink: [[168,1007,24,25],[167,1032,24,25],[168,1056,24,24]],
		skull: [[359,791,24,25],[360,815,24,25],[359,839,24,25]],
		defeat: [[96,936,24,25],[96,960,24,25],[96,984,24,25]],
	},
	drawn: {
		level: false,
		background: false,
		nouns: false,
		verbs: false,
		is: false,
		sprite: false,
	},
	Sprite: {
		baba: 'white',
		rock: 'goldenrod',
		wall: 'Gray',
		flag: 'yellow',
		floor: 'darkSlateGray',
		water: 'skyBlue',
		skull: 'Red',
	},
	Text: {
		baba: 'Hotpink',
		you: 'Hotpink',
		flag: 'yellow',
		win: 'yellow',
		wall: 'lightgray',
		stop: 'lightGray',
		rock: 'saddleBrown',
		push: 'saddleBrown',
		is: 'white',
		water: 'skyBlue',
		sink: 'skyBlue',
		skull: 'Red',
		defeat: 'Red',
	},

	Levels: {
		debug: {
			blocks: {
				horizantal: [
					[4, 9, 9, 'wall', 'Sprite'],
					[10, 4, 11, 'water', 'Sprite'],
				],
				Vertical: [[10, 10, 15, 'rock', 'Sprite']],
				Sprites: [[12, 15, 'baba', 'Sprite']],
				Verbs: [
					[6, 15, 'stop', 'verb'],
					[5, 16, 'you', 'verb'],
					[16, 15, 'push', 'verb'],
					[16, 17, 'sink', 'verb'],
				],
				Nouns: [
					[4, 15, 'wall', 'noun'],
					[5, 14, 'baba', 'noun'],
					[14, 15, 'rock', 'noun'],
					[14, 17, 'water', 'noun'],
				],
				is: [[5, 15], [15, 15], [15, 17]],
			},
			tiles: 20,
		},
		0: {
			blocks: {
				horizantal: [
					[4, 8, 15, 'wall', 'Sprite'],
					[4, 12, 15, 'wall', 'Sprite'],
				],
				Vertical: [[9, 9, 12, 'rock', 'Sprite']],

				Sprites: [
					[5, 10, 'baba', 'Sprite'],
					[13, 10, 'flag', 'Sprite'],
				],
				Verbs: [
					[14, 6, 'win', 'verb'],
					[6, 6, 'you', 'verb'],
					[6, 14, 'stop', 'verb'],
					[14, 14, 'push', 'verb'],
				],
				Nouns: [
					[12, 6, 'flag', 'noun'],
					[4, 6, 'baba', 'noun'],
					[4, 14, 'wall', 'noun'],
					[12, 14, 'rock', 'noun'],
				],
				is: [[13, 6], [5, 6], [5, 14], [13, 14]],
			},
			tiles: 20,
		},

		1: {
			blocks: {
				horizantal: [
					[9, 3, 16, 'wall', 'Sprite'],
					[5, 11, 16, 'wall', 'Sprite'],
					[5, 7, 10, 'wall', 'sprite'],
					[9, 17, 16, 'wall', 'sprite'],
				],
				Vertical: [
					[9, 4, 7, 'wall', 'Sprite'],
					[15, 4, 12, 'wall', 'Sprite'],
					[5, 8, 12, 'wall', 'Sprite'],
					[9, 12, 17, 'wall', 'Sprite'],
					[15, 12, 17, 'wall', 'Sprite'],
				],

				Sprites: [
					[11, 9, 'flag', 'noun'],
					[13, 14, 'baba', 'noun'],
				],
				Verbs: [
					[13, 7, 'win', 'verb'],
					[6, 15, 'you', 'verb'],
					[11, 15, 'stop', 'verb'],
				],
				Nouns: [
					[7, 9, 'flag', 'noun'],
					[6, 13, 'baba', 'noun'],
					[11, 13, 'wall', 'noun'],
				],
				is: [[11, 5], [6, 14], [11, 14]],
			},
			tiles: 20,
		},
		2: {
			blocks: {
				horizantal: [
					[9, 3, 17, 'flag', 'Sprite'],
					[5, 11, 16, 'flag', 'Sprite'],
					[5, 7, 10, 'flag', 'sprite'],
					[9, 17, 14, 'flag', 'sprite'],
					[13, 16, 17, 'flag', 'Sprite'],
				],
				Vertical: [
					[9, 4, 7, 'flag', 'Sprite'],
					[16, 4, 12, 'flag', 'Sprite'],
					[5, 8, 12, 'flag', 'Sprite'],
					[9, 12, 17, 'flag', 'Sprite'],
					[16, 12, 16, 'flag', 'Sprite'],
				],

				Sprites: [, [13, 14, 'wall', 'noun']],
				Verbs: [
					[13, 7, 'win', 'verb'],
					[6, 15, 'you', 'verb'],
					[11, 15, 'stop', 'verb'],
				],
				Nouns: [
					[7, 9, 'baba', 'noun'],
					[6, 13, 'wall', 'noun'],
					[11, 13, 'flag', 'noun'],
				],
				is: [[11, 5], [6, 14], [11, 14]],
			},
			tiles: 20,
		},
		3: {
			blocks: {
				horizantal: [
					[0, 3, 2, 'wall', 'Sprite'],
					[7, 2, 15, 'wall', 'Sprite'],
					[4, 9, 8, 'wall', 'Sprite'],
					[11, 9, 18, 'wall', 'Sprite'],
					[8, 9, 11, 'water', 'Sprite'],
					[4, 17, 18, 'wall', 'Sprite'],
					[6, 16, 8, 'water', 'Sprite'],
					[5, 15, 8, 'water', 'Sprite'],
					[5, 14, 8, 'water', 'Sprite'],
				],
				Vertical: [
					[2, 0, 4, 'wall', 'Sprite'],
					[7, 3, 9, 'wall', 'Sprite'],
					[14, 3, 9, 'wall', 'Sprite'],
					[4, 10, 18, 'wall', 'Sprite'],
					[17, 10, 18, 'wall', 'Sprite'],
					[11, 10, 13, 'wall', 'Sprite'],
					[11, 14, 18, 'wall', 'Sprite'],
					[9, 13, 14, 'wall', 'Sprite'],
				],

				Sprites: [
					[9, 4, 'baba', 'Sprite'],
					[12, 4, 'rock', 'Sprite'],
					[12, 6, 'rock', 'Sprite'],
					[5, 16, 'flag', 'Sprite'],
				],
				Verbs: [
					[0, 2, 'you', 'verb'],
					[1, 2, 'stop', 'verb'],
					[6, 8, 'sink', 'verb'],
					[15, 11, 'push', 'verb'],
					[15, 14, 'win', 'verb'],
				],
				Nouns: [
					[0, 0, 'baba', 'noun'],
					[1, 0, 'wall', 'noun'],
					[6, 6, 'water', 'noun'],
					[13, 11, 'rock', 'noun'],
					[13, 14, 'flag', 'noun'],
				],
				is: [[1, 1], [0, 1], [6, 7], [14, 11], [14, 14]],
			},
			tiles: 20,
		},
		4: {
			blocks: {
				horizantal: [
					[12, 7, 21, 'skull', 'Sprite'],
					[12, 16, 21, 'skull', 'Sprite'],
					[3, 18, 6, 'skull', 'Sprite'],
					[7, 18, 10, 'skull', 'Sprite'],
				],
				Vertical: [
					[12, 7, 16, 'skull', 'Sprite'],
					[20, 7, 16, 'skull', 'Sprite'],
					[3, 18, 25, 'skull', 'Sprite'],
					[9, 18, 25, 'skull', 'Sprite'],
					[5, 15, 18, 'skull', 'Sprite'],
					[7, 15, 18, 'skull', 'Sprite'],
				],

				Sprites: [
					[6, 20, 'baba', 'Sprite'],
					[6, 15, 'rock', 'Sprite'],
					[6, 16, 'rock', 'Sprite'],
					[6, 17, 'rock', 'Sprite'],
					[17, 14, 'flag', 'Sprite'],
				],
				Verbs: [
					[2, 1, 'you', 'verb'],
					[2, 0, 'win', 'verb'],
					[4, 10, 'push', 'verb'],
					[14, 12, 'defeat', 'verb'],
				],
				Nouns: [
					[0, 0, 'flag', 'noun'],
					[14, 10, 'skull', 'noun'],
					[2, 10, 'rock', 'noun'],
					[0, 1, 'baba', 'noun'],
				],
				is: [[1, 0], [1, 1], [3, 10], [14, 11]],
			},
			tiles: 25,
		},
	},
};
