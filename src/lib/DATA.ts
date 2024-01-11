export interface Situations {
	[key: string]: Situation;
}

export interface Situation {
	steps: SituationSteps;
	url: string;
}

export interface SituationSteps {
	[key: string]: SituationStep;
}

export interface SituationStep {
	base_line: string;
	image_url: string;
	readonly answers: string[];
	readonly blank_state: string[];
	readonly words: string[];
}

const DICTIONARY = [
	'Hello',
	'Thanks',
	'Please',
	'Yes',
	'No',
	'Sorry',
	'Excuse me',
	'See you later',
	'Goodbye',
	"I'm sorry",
	"I don't understand"
] as const;

const SITUATIONS: Situations = {
	airport: {
		steps: {
			bags: {
				answers: ['register', 'know'],
				base_line: "Hello, if your bags are heavier than 20kg, it won't work.",
				image_url: '/assets/images/airport/bags.jpg',
				blank_state: ["Hello, I have a problem. I can't", 'my bags, do you', 'why?'],
				words: ['understand', 'help', 'login', 'use', 'have', 'let', 'bags', 'plane']
			},
			eat: {
				answers: ['where', 'airport'],
				base_line: 'Hi, there are a few restaurant in the next corridor.',
				image_url: '/assets/images/airport/bags.jpg',
				blank_state: ['Excuse me, do you know', 'we can eat something in this'],
				words: ['coffee', 'table', 'restaurant menu', 'why', 'eat', 'plane', 'know', 'restaurant']
			},
			sleep: {
				answers: ['missed', 'sleep'],
				base_line: 'Of course, there are hotels in the street next to the airport.',
				blank_state: ['I will ', ' the', 'card please'],
				image_url: '/assets/images/airport/bags.jpg',
				words: ['use', 'credit', 'have', 'run', 'eat', 'hotels', 'airport']
			},
			lost_ticked: {
				answers: ['plane ticket', 'help'],
				base_line: 'Hello, you can call the security, they will help you.',
				image_url: '/assets/images/airport/bags.jpg',
				blank_state: ["Hello, I've lost my", 'for the fly N°45637. Can you', 'me?'],
				words: ['plane', 'make', 'take', 'bags', 'kids']
			}
		},
		url: 'https://picsum.photos/500/300'
	},
	hotel: {
		steps: {
			reception: {
				answers: ['room', 'two'],
				base_line: 'Hello, can I help you ?',
				image_url: '/assets/images/airport/bags.jpg',
				blank_state: ['Hello, a ', 'for', 'please'],
				words: ['room', 'two', 'toilet']
			},
			order: {
				answers: ['a burger', 'and'],
				base_line: 'What would you like to order ?',
				image_url: '/assets/images/airport/bags.jpg',
				blank_state: ['Hello,', 'please', 'a orangina please'],
				words: ['a burger', 'and', 'a duck']
			}
		},
		url: 'https://picsum.photos/500/300'
	}
} as const;

export { DICTIONARY, SITUATIONS };
