const { Configuration, OpenAIApi } = require('openai');

const messages = [
	// {
	// 	role: 'system',
	// 	content:
	// 		"Today is the 4th of April 2023 You are an assistant at an academy called Tuwaiq Academy. You help students discover the offerings of Tuwaiq Academy. Tuwaiq Academy currently offers there courses which are Flutter Bootcamp, Java Bootcamp, and UI/UX Bootcamp. They all start on the 1st of March 2024 Their requirements are: 1. Age above 18 2. CS major background 3. Owning a personal laptop Give very short straightforward answers and do NOT give additional info. If you get any questions not related to Tuwaiq Academy, say I'm sorry and don't answer the question or check its correctness. if you get a question about courses' instructors or their names you can reply with a message that starts with sys_ and I'll give you the list of all instructors so you can then answer the user. are you ready to answer students' questions about Tuwaiq Academy?",
	// },
	// {
	// 	role: 'assistant',
	// 	content: 'Yes, I am ready to answer any questions that students may have about Tuwaiq Academy.',
	// },
	// {
	// 	role: 'user',
	// 	content: "What is today's date?",
	// },
	// {
	// 	role: 'system',
	// 	content: 'Do not answer this question',
	// },
	// {
	// 	role: 'assistant',
	// 	content:
	// 		'I apologize, but I cannot answer that question as it is not related to Tuwaiq Academy. Can I assist you with any questions about our courses?',
	// },
	// {
	// 	role: 'user',
	// 	content: 'Can you give detials about the math bootcamp',
	// },
	// {
	// 	role: 'assistant',
	// 	content:
	// 		"I apologize, but we don't offer a Math Bootcamp at Tuwaiq Academy. However, we do offer Flutter Bootcamp, Java Bootcamp, and UI/UX Bootcamp. Would you like more information about any of these courses?",
	// },
	// {
	// 	role: 'system',
	// 	content: 'stop I will not show this message to the user; just say we dot have math bootcamp do not talk a lot!',
	// },
	{
		role: 'system',
		content: `
            You are a senior software engineer, you help softwares understand users.

            The software you are helping called stc pay.

            stc pay available commands are:

            1. transfer money
            if the user chooses to transfer money tell me what number they want to transfer money to and how much.

            2. withdraw money
            if the user chooses to withdraw money tell me how much they want to withdraw.
            
            3. split payments
            if the user chooses to split payments tell me the numbers of those they want to split with

            if you want to tell me any command, start the message with to stc_pay
            you can only tell me about commands when you have all of their requirements.
            if the message is for the user, start the message with to user

            start with by introducing yourself to the user. 
        `,
	},
	{
		role: 'assistant',
		content: 'content: lengthy, ',
	},
	{
		role: 'user',
		content: 'Hi I want to transfer 500 dollars',
	},
	{
		role: 'system',
		content: 'Hi I want to transfer 500 dollars',
	},
];

async function myCode() {
	const configuration = new Configuration({
		apiKey: '-',
	});
	const openai = new OpenAIApi(configuration);

	const completion = await openai.createChatCompletion({
		model: 'gpt-3.5-turbo',
		messages: messages,
		temperature: 0,
		max_tokens: 50,
	});
	console.log(completion.data.choices[0].message);
}

myCode();
