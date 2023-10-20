import items from './item.json' assert { type: 'json' };

const getItems = (req, res) => {
	res.status(200).json(items);
};

const createItems = (req, res) => {
	const { content } = req.body;

	if (content.trim().length === 0) {
		return res.status(400).send('No content received in the request');
	}

	const newId = Math.max(...items.map((item) => item.id)) + 1; //  get max id added and add 1
	items.push({
		id: newId,
		content: content,
	});
	res.status(201).send('create');
};

const deleteItems = (req, res) => {
	const { id } = req.params;

	if (!id) {
		return res.status(400).send('The id is not received as a parameter');
	}

	const findElement = items.findIndex((item) => item.id === Number(id));
	if (findElement === -1) {
		return res.status(400).send('The Item you are trying to delete not exist');
	}

	items.splice(findElement, 1); //delete element finder
	res.status(200).send('delete');
};

const updatedItems = (req, res) => {
	const { id } = req.params;
	const { content } = req.body;

	if (!id || content.trim().length === 0) {
		return res.status(400).send('No content and id received in the request');
	}

	const findElement = items.find((item) => item.id === Number(id));

	if (!findElement) {
		return res.status(400).send('The Item you are trying to updated not exist');
	}

	findElement.content = content; //updated element finder. "Don't do this in production, it's just an example of updating an object"
	res.status(200).send('update');
};

export { getItems, createItems, deleteItems, updatedItems };
