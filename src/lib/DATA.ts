export interface Situations {
	[key: string]: Situation;
}

export interface Situation {
	name: string;
	steps: SituationSteps;
	url: string;
}

export interface SituationSteps {
	[key: string]: SituationStep;
}

export interface SituationStep {
	name: string;
	base_line: string;
	image_url: string;
	pov: 'customer' | 'employee';
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
		name: 'Airport',
		steps: {
			bags: {
				name: 'Lost luggage',
				pov: 'customer',
				answers: ['register', 'know'],
				base_line: "Hello, if your luggage is heavier than 20kg, it won't work.",
				image_url: '/images/airport/luggage.jpg',
				blank_state: ["Hello, I have a problem. I can't", 'my bags, do you', 'why?'],
				words: ['understand', 'help', 'login', 'use', 'have', 'let', 'luggage', 'plane']
			},
			eat: {
				name: 'Eating place',
				pov: 'customer',
				answers: ['where', 'airport'],
				base_line: 'Hi, there are a few restaurant in the next corridor.',
				image_url: '/images/airport/eat.jpg',
				blank_state: ['Excuse me, do you know', 'we can eat something in this'],
				words: ['coffee', 'table', 'restaurant menu', 'why', 'eat', 'plane', 'know', 'restaurant']
			},
			sleep: {
				name: 'Sleeping place',
				pov: 'customer',
				answers: ['missed', 'sleep'],
				base_line: 'Of course, there are hotels in the street next to the airport.',
				blank_state: ['I will ', ' the', 'card please'],
				image_url: '/images/airport/sleep.jpg',
				words: ['use', 'credit', 'have', 'run', 'eat', 'hotels', 'airport']
			},
			lost_ticket: {
				name: 'Lost ticket',
				pov: 'customer',
				answers: ['plane ticket', 'help'],
				base_line: 'Hello, you can call the security, they will help you.',
				image_url: '/images/airport/ticket.jpg',
				blank_state: ["Hello, I've lost my", 'for the fly N°45637. Can you', 'me?'],
				words: ['plane', 'make', 'take', 'bags', 'kids']
			}
		},
		url: 'https://picsum.photos/500/300'
	},
	restaurant: {
		name: 'Restaurant',
		steps: {
			home: {
				name: 'Reception',
				pov: 'employee',
				answers: ['miss', 'name', 'yesterday'],
				base_line: 'Good evening sir, do you have a reservation ?',
				image_url: '/images/restaurant/accueil.jpg',
				blank_state: ['Hello', 'yes my', 'is Dafy Norris, I called ', '.'],
				words: [
					'mister',
					'miss',
					'boy',
					'girl',
					'adress',
					'phone number',
					'name',
					'tomorrow',
					'the next week'
				]
			},
			aperitif: {
				name: 'Aperitif',
				pov: 'employee',
				answers: ['pleasure', 'beer'],
				base_line: 'Excuse me sir, would like something to drink ?',
				image_url: '/images/restaurant/apero.jpg',
				blank_state: ['Oh yes with ', 'I will take some white', 'please'],
				words: ['lemon', 'water', 'pleasure', 'beer', 'lemonade', 'ginger']
			},
			toilets: {
				name: 'Toilets',
				pov: 'customer',
				answers: ['tell', 'are'],
				base_line: "Of course, it's 20 meters on your right then go left.",
				blank_state: ['Excuse me Mrs, can you', 'me where', 'the toilets ?'],
				image_url: '/images/restaurant/toilets.jpg',
				words: ['eat', 'is', 'are', 'tell', 'say', 'know']
			},
			meal: {
				name: 'Meal',
				pov: 'employee',
				answers: ['chosen', 'go'],
				base_line: 'So, have you already choose what do you want to eat ?',
				image_url: '/images/restaurant/repas.jpeg',
				blank_state: ['Yes I have already', ',I will', 'for the pork chop.'],
				words: ['take', 'chosen', 'go', 'beef', 'salad', 'have']
			},
			bill: {
				name: 'Bill',
				pov: 'customer',
				answers: ['bill'],
				base_line: 'No problem, I will come in 2 minutes.',
				image_url: '/images/restaurant/bill.jpg',
				blank_state: ['Sorry, can I have the', 'please ?'],
				words: ['drink', 'bill', 'toilets', 'table', 'reservation']
			}
		},
		url: 'https://picsum.photos/500/300'
	},
	nightclub: {
		name: 'Nightclub',
		steps: {
			order: {
				name: 'Order',
				pov: 'customer',
				answers: ['me', 'she'],
				base_line: 'Of course, there is for you.',
				image_url: '/images/nightclub/bar.jpg',
				blank_state: ['Hello, can I have a vodka with RedBull for', 'and', 'wants a water ?'],
				words: ['me', 'her', 'she', 'I', 'we', 'you']
			},
			dancefloor: {
				name: 'Dancefloor',
				pov: 'customer',
				answers: ['dance'],
				base_line: "Hi cute boy, yes but i can't because of my heels.",
				image_url: '/images/nightclub/dancefloor.jpg',
				blank_state: ['Hello girl, do you want to', 'with me ?'],
				words: ['dance', 'drink', 'chill']
			},
			toilets: {
				name: 'Toilets',
				pov: 'customer',
				answers: ['free'],
				base_line: 'No, we are waiting too.',
				blank_state: ['Excuse me, are the toilets', '?'],
				image_url: '/images/nightclub/toilets.webp',
				words: ['free', 'dirty', 'clean', 'big', 'small']
			},
			flirt: {
				name: 'Flirt',
				pov: 'customer',
				answers: ['number'],
				base_line: 'No, I have a boyfriend.',
				image_url: '/images/nightclub/drague.jpg',
				blank_state: ['Hi, you are really pretty, can I get your', '?'],
				words: ['dress', 'number', 'phone', 'drink']
			}
		},
		url: 'https://picsum.photos/500/300'
	},
	beach: {
		name: 'Beach',
		steps: {
			deckchair: {
				name: 'Deckchair',
				pov: 'customer',
				answers: ['we', 'seats'],
				base_line: "Of course, it's 20€ for the whole day.",
				image_url: '/images/beach/transat.jpg',
				blank_state: ['Hello, can', 'have 2', '?'],
				words: ['I', 'we', 'seats', 'ice cream', 'sun cream']
			},
			ice: {
				name: 'Ice cream',
				pov: 'customer',
				answers: ['ice cream', 'price'],
				base_line: "Hello, i have strawberry ice cream and it's 10€.",
				image_url: '/images/beach/glace.jpg',
				blank_state: ['Hi, do you have strawberry', ', and what is the', 'for 2 of them ?'],
				words: ['tacos', 'price', 'wheight', 'ice cream', 'cake']
			},
			sea: {
				name: 'Sea',
				pov: 'customer',
				answers: ['jellyfish', 'sharks'],
				base_line: 'No, so no risk of burnt and bites.',
				blank_state: ['Do you know if there is', 'and', '?'],
				image_url: '/images/beach/mer.jpeg',
				words: ['dog', 'jellyfish', 'sharks', 'ice cream', 'drink', 'cat']
			},
			towel: {
				name: 'Towel',
				pov: 'customer',
				answers: ['towel'],
				base_line: "Yes, it's behind this restaurant.",
				image_url: '/images/beach/towel.jpeg',
				blank_state: ['Do you know where is the ', ' rentals ?'],
				words: ['towel', 'car', 'seat']
			}
		},
		url: 'https://picsum.photos/500/300'
	}
} as const;

export { DICTIONARY, SITUATIONS };
