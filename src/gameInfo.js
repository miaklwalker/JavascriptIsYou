export const GameInfo = {
	Rules: ['you', 'push', 'win', 'stop'],
	Sprite: {
		baba: 'white',
		rock: 'saddleBrown',
		wall: 'Gray',
		flag: 'yellow',
		floor: 'darkSlateGray',
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
	},

	Levels: {
		debug: {
			blocks: {
				horizantal: [[4, 9, 9, 'wall']],
				Vertical: [],
				Sprites: [, [12, 15, 'baba'], [13, 15, 'rock']],
				Verbs: [
					[6, 15, 'push'],
					[5, 16, 'you'],
					[7, 17, 'stop'],
				],
				Nouns: [
					[4, 15, 'wall'],
					[5, 14, 'baba'],
				],
				is: [[5, 15]],
			},
		},
		0: {
			blocks: {
				horizantal: [[4, 9, 9, 'wall']],
				Vertical: [],
				Sprites: [, [12, 15, 'baba']],
				Verbs: [
					[6, 15, 'push'],
					[5, 16, 'you'],
					[7, 17, 'stop'],
				],
				Nouns: [
					[4, 15, 'wall'],
					[5, 14, 'baba'],
				],
				is: [[5, 15]],
			},
		},
		1: {
			blocks: {
				horizantal: [
					[4, 9, 9, 'floor'],
					[4, 10, 9, 'floor'],
					[4, 11, 9, 'floor'],
					[4, 8, 15, 'wall'],
					[4, 12, 15, 'wall'],
					[10, 9, 15, 'floor'],
					[10, 10, 15, 'floor'],
					[10, 11, 15, 'floor'],
				],
				Vertical: [[9, 9, 12, 'rock']],

				Sprites: [[5, 10, 'baba'], [13, 10, 'flag']],
				Verbs: [
					[14, 6, 'win'],
					[6, 6, 'you'],
					[6, 14, 'stop'],
					[14, 14, 'push'],
				],
				Nouns: [
					[12, 6, 'flag'],
					[4, 6, 'baba'],
					[4, 14, 'wall'],
					[12, 14, 'rock'],
				],
				is: [[13, 6], [5, 6], [5, 14], [13, 14]],
			},
		},

		2: {
			blocks: {
				horizantal: [
					[9, 3, 16, 'wall'],
					[5, 11, 16, 'wall'],
					[5, 7, 10, 'wall'],
					[9, 17, 16, 'wall'],
					[6, 8, 10, 'floor'],
					[6, 9, 10, 'floor'],
					[6, 10, 10, 'floor'],
				],
				Vertical: [
					[9, 4, 7, 'wall'],
					[15, 4, 12, 'wall'],
					[5, 8, 12, 'wall'],
					[9, 12, 17, 'wall'],
					[15, 12, 17, 'wall'],
				],

				Sprites: [
					[11, 9, 'flag'],
					[13, 14, 'baba'],
				],
				Verbs: [
					[13, 7, 'win'],
					[5, 16, 'you'],
					[11, 15, 'stop'],
				],
				Nouns: [
					[7, 9, 'flag'],
					[5, 14, 'baba'],
					[11, 13, 'wall'],
				],
				is: [[11, 5], [5, 15], [11, 14]],
			},
		},
		3: {
			blocks: {
				horizantal: [
					[9, 3, 16, 'flag'],
					[5, 11, 16, 'flag'],
					[5, 7, 10, 'flag'],
					[9, 17, 16, 'flag'],
					[6, 8, 10, 'floor'],
					[6, 9, 10, 'floor'],
					[6, 10, 10, 'floor'],
				],
				Vertical: [
					[9, 4, 7, 'flag'],
					[15, 4, 12, 'flag'],
					[5, 8, 12, 'flag'],
					[9, 12, 17, 'flag'],
					[15, 12, 17, 'flag'],
				],

				Sprites: [, [13, 14, 'wall']],
				Verbs: [
					[13, 7, 'win'],
					[5, 16, 'you'],
					[11, 15, 'stop'],
				],
				Nouns: [
					[7, 9, 'baba'],
					[5, 14, 'wall'],
					[11, 13, 'flag'],
				],
				is: [[11, 5], [5, 15], [11, 14]],
			},
		},
	},
};
