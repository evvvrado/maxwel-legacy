import { Configuration, OpenAIApi, ResponseTypes } from "openai-edge";

import { systemFunctionsKeys } from "@/components/includes/functions/system-functions";

const config = new Configuration({
	apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

const handler = async (command: string) => {
	try {
		const response = await openai.createChatCompletion({
			model: "gpt-3.5-turbo",
			messages: [
				{
					role: "user",
					content: command,
				},
			],
		});

		if (!response)
			throw {
				message: "Invalid answer.",
			};

		return response.json();
	} catch (error) {
		throw {
			message: "Rate limit reached",
		};
	}
};

export const interpreteAndFindCommand = async (input: string) => {
	const response: ResponseTypes["createChatCompletion"] = await handler(
		` A user responds to the following question: "What can I do for you?" User's response: "${input}". Please, select JUST ONE item from this array: Array of slugs: [${systemFunctionsKeys.map(
			(slug) => `${slug} ,`,
		)}]. Give me a only the respective slug, i dont want any other word in your answer.If there is no matching slug, please respond with "not-found". I only need an ONE WORD answer. Nothing more.`,
	);

	const answer = response.choices[0]?.message?.content;

	if (answer == "not-found") {
		throw {
			message: "The input provided is invalid, or not implemented",
		};
	}

	return answer;
};
