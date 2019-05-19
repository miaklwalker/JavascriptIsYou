export const GameInfo = {
	Rules: ['you', 'push', 'win', 'stop', 'sink'],
	Sprites: {
		baba: [0, 0, 25, 24],
		rock: [360, 504, 27, 25],
		wall: [390, 1518, 12, 12],
		flag: [143, 503, 25, 25],
		water: [270, 1200, 25, 25],
	},
	textSprites: {
		baba: [142, 647, 25, 25],
		rock: [240, 792, 25, 25],
		wall: [623, 792, 25, 25],
		flag: [45, 720, 25, 25],
		is: [408, 720, 25, 25],
		stop: [240, 1008, 25, 25],
		push: [0, 1008, 25, 25],
		win: [359, 1008, 25, 25],
		you: [432, 1008, 25, 25],
		water: [647, 791, 25, 25],
		sink: [168, 1008, 25, 25],
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
		},
		0: {
			blocks: {
				horizantal: [
					//[4, 9, 9, "floor", "Sprite"],
					//[4, 10, 9, "floor", "Sprite"],
					//[4, 11, 9, "floor", "Sprite"],
					[4, 8, 15, 'wall', 'Sprite'],
					[4, 12, 15, 'wall', 'Sprite'],
					// [10, 9, 15, "floor", "Sprite"],
					// [10, 10, 15, "floor", "Sprite"],
					// [10, 11, 15, "floor", "Sprite"]
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
		},

		1: {
			blocks: {
				horizantal: [
					[9, 3, 16, 'wall', 'Sprite'],
					[5, 11, 16, 'wall', 'Sprite'],
					[5, 7, 10, 'wall', 'sprite'],
					[9, 17, 16, 'wall', 'sprite'],
					//[6, 8, 10, "floor", "sprite"],
					//[6, 9, 10, "floor", "sprite"],
					//[6, 10, 10, "floor", "sprite"]
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
		},
		2: {
			blocks: {
				horizantal: [
					[9, 3, 17, 'flag', 'Sprite'],
					[5, 11, 16, 'flag', 'Sprite'],
					[5, 7, 10, 'flag', 'sprite'],
					[9, 17, 14, 'flag', 'sprite'],
					[13, 16, 17, 'flag', 'Sprite'],
					// [6, 8, 10, "floor", "sprite"],
					//[6, 9, 10, "floor", "sprite"],
					//[6, 10, 10, "floor", "sprite"],
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
                    [15,11,'push','verb'],
                    [15,14,'win','verb']
				],
				Nouns: [
					[0, 0, 'baba', 'noun'],
					[1, 0, 'wall', 'noun'],
					[6, 6, 'water', 'noun'],
					[13, 11, 'rock', 'noun'],
					[13, 14, 'flag', 'noun'],
				],
				is: [[1, 1], [0, 1], [6, 7],[14,11],[14,14]],
			},
		},
	},
	tiles: 20,
};
