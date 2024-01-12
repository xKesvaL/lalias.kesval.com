export interface Situations {
	[key: string]: Situation;
}

export interface Situation {
	name: string;
	steps: SituationSteps;
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

const DICTIONARY = ['hello', 'sorry', 'see you later', 'goodbye'] as const;

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
				blank_state: ['Excuse me, do you know', 'we can eat something in this', '?'],
				words: ['coffee', 'table', 'restaurant menu', 'why', 'eat', 'plane', 'know', 'restaurant']
			},
			sleep: {
				name: 'Sleeping place',
				pov: 'customer',
				answers: ['missed', 'sleep', 'please'],
				base_line: 'Of course, there are hotels in the street next to the airport.',
				blank_state: ['Hi I', 'my flight, can you tell me where I can', 'for the night please ?'],
				image_url: '/images/airport/sleep.jpg',
				words: ['use', 'credit', 'have', 'run', 'eat', 'hotels', 'airport']
			},
			lost_ticket: {
				name: 'Lost ticket',
				pov: 'customer',
				answers: ['plane ticket', 'help'],
				base_line: 'Hello, you can call the security, they will help you.',
				image_url: '/images/airport/ticket.jpg',
				blank_state: ["Hello, I've lost my", 'for the fly N°45637. Can you', 'me please?'],
				words: ['plane', 'make', 'take', 'bags', 'kids']
			}
		}
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
				words: ['mister', 'boy', 'girl', 'adress', 'phone number', 'tomorrow', 'the next week']
			},
			aperitif: {
				name: 'Aperitif',
				pov: 'employee',
				answers: ['pleasure', 'beer'],
				base_line: 'Excuse me sir, would like something to drink ?',
				image_url: '/images/restaurant/apero.jpg',
				blank_state: ['Oh yes with ', 'I will take some white', 'please.'],
				words: ['lemon', 'water', 'lemonade', 'ginger']
			},
			toilets: {
				name: 'Toilets',
				pov: 'customer',
				answers: ['tell', 'are'],
				base_line: "Of course, it's 20 meters on your right then go left.",
				blank_state: ['Excuse me Mrs, can you', 'me where', 'the toilets ?'],
				image_url: '/images/restaurant/toilets.jpg',
				words: ['eat', 'is', 'say', 'know']
			},
			meal: {
				name: 'Meal',
				pov: 'employee',
				answers: ['chosen', 'go'],
				base_line: 'So, have you already choose what do you want to eat ?',
				image_url: '/images/restaurant/repas.jpeg',
				blank_state: ['Yes I have already', ',I will', 'for the pork chop.'],
				words: ['take', 'beef', 'salad', 'have']
			},
			bill: {
				name: 'Bill',
				pov: 'customer',
				answers: ['bill'],
				base_line: 'No problem, I will come in 2 minutes.',
				image_url: '/images/restaurant/bill.jpg',
				blank_state: ['Sorry, can I have the', 'please ?'],
				words: ['drink', 'toilets', 'table', 'reservation']
			}
		}
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
				words: ['her', 'I', 'we', 'you']
			},
			dancefloor: {
				name: 'Dancefloor',
				pov: 'customer',
				answers: ['dance'],
				base_line: "Hi cute boy, yes but i can't because of my heels.",
				image_url: '/images/nightclub/dancefloor.jpg',
				blank_state: ['Hello girl, do you want to', 'with me ?'],
				words: ['drink', 'chill']
			},
			toilets: {
				name: 'Toilets',
				pov: 'customer',
				answers: ['free'],
				base_line: 'No, we are waiting too.',
				blank_state: ['Excuse me, are the toilets', '?'],
				image_url: '/images/nightclub/toilets.webp',
				words: ['dirty', 'clean', 'big', 'small']
			},
			flirt: {
				name: 'Flirt',
				pov: 'customer',
				answers: ['number'],
				base_line: 'No, I have a boyfriend.',
				image_url: '/images/nightclub/drague.jpg',
				blank_state: ['Hi, you are really pretty, can I get your', '?'],
				words: ['dress', 'phone', 'drink']
			}
		}
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
				words: ['I', 'ice cream', 'sun cream']
			},
			ice: {
				name: 'Ice cream',
				pov: 'customer',
				answers: ['ice cream', 'price'],
				base_line: "Hello, i have strawberry ice cream and it's 10€.",
				image_url: '/images/beach/glace.jpg',
				blank_state: ['Hi, do you have strawberry', ', and what is the', 'for 2 of them ?'],
				words: ['tacos', 'wheight', 'cake']
			},
			sea: {
				name: 'Sea',
				pov: 'customer',
				answers: ['jellyfish', 'sharks'],
				base_line: 'No, so no risk of burnt and bites.',
				blank_state: ['Do you know if there is', 'and', '?'],
				image_url: '/images/beach/mer.jpeg',
				words: ['dog', 'ice cream', 'drink', 'cat']
			},
			towel: {
				name: 'Towel',
				pov: 'customer',
				answers: ['towel'],
				base_line: "Yes, it's behind this restaurant.",
				image_url: '/images/beach/towel.jpeg',
				blank_state: ['Do you know where is the ', ' rentals ?'],
				words: ['car', 'seat']
			}
		}
	},
	hotel: {
		name: 'Hotel',
		steps: {
			home: {
				name: 'Home',
				pov: 'employee',
				answers: ['room', 'tonight'],
				base_line: 'Hello, what can I do for you ?',
				image_url: '/images/hotel/accueil.jpg',
				blank_state: ['Hello, I want a', 'for ', ', I need to leave tomorrow morning.'],
				words: ['drink', 'coin', 'tomorrow', 'yesterday', 'night', 'today']
			},
			spa: {
				name: 'Spa',
				pov: 'customer',
				answers: ['regular', 'access'],
				base_line: 'No, you need to take at least a suit.',
				image_url: '/images/hotel/accueil2.jpg',
				blank_state: ['Excuse me, if I just take the ', ' room, I have ', ' to the spa ?'],
				words: ['basic', 'go', 'pass', 'common']
			},
			key_problem: {
				name: 'Key problem',
				pov: 'customer',
				answers: ['key', 'working'],
				base_line: 'Hello, I will give you another one.',
				blank_state: ['Good evening, my ', ' is not ', ' anymore, can you help me ?'],
				image_url: '/images/hotel/accueil3.jpg',
				words: ['room', 'making', 'taking', 'door']
			},
			room_rendering: {
				name: 'Room returning',
				pov: 'customer',
				answers: ['leaving', 'when', 'back'],
				base_line: 'Of course, I need the keys for a new client at 11am tomorrow.',
				image_url: '/images/hotel/carte.webp',
				blank_state: [
					'Just before ',
					', can you tell me ',
					' I need to give you ',
					' the keys tomorrow ?'
				],
				words: ['sleeping', 'leaving', 'when', 'back', 'what', 'why', 'all', 'walking', 'to you']
			}
		}
	},
	boat: {
		name: 'Boat trip',
		steps: {
			reservation: {
				name: 'Reservation',
				pov: 'customer',
				answers: ['price', 'trip'],
				base_line: 'It will be 85€ for the whole day.',
				image_url: '/images/boat/reservation.webp',
				blank_state: ['Hello, what is the ', ' for the boat ', ' ?'],
				words: ['price', 'trip', 'money', 'amount', 'journey', 'travel']
			},
			fish: {
				name: 'Fish',
				pov: 'customer',
				answers: ['how many kinds', 'sea'],
				base_line: 'Sure, there are like 78 different fishes in this sea.',
				image_url: '/images/boat/poissons.png',
				blank_state: ['Can you tell me ', ' of fishes are in this ', ' ?'],
				words: ['which', 'how many kinds', 'sea', 'different', 'ocean', 'water', 'what', 'sorts']
			},
			duration: {
				name: 'Duration',
				pov: 'customer',
				answers: ['last'],
				base_line: "We'll be back at 7.45pm",
				image_url: '/images/boat/time.jpg',
				blank_state: ['How long will the trip ', ' ?'],
				words: ['last', 'time', 'finish', 'end']
			}
		}
	}
} as const;

export { DICTIONARY, SITUATIONS };
