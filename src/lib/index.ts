// place files you want to import through the `$lib` alias in this folder.

export const groupByCategory = (data: Post[]) => {
	return data.reduce((accumulator: PostGroup[], item) => {
		// Find if the category already exists in the accumulator
		const existingCategory: PostGroup | undefined = accumulator.find(
			(category) => category.category === item.category
		);

		if (existingCategory) {
			// If the category exists, add the post details
			existingCategory.details.push({
				title: item.title,
				date: item.date,
				slug: item.slug
			});
		} else {
			// If the category doesn't exist, create a new category
			accumulator.push({
				category: item.category,
				details: [
					{
						title: item.title,
						date: item.date,
						slug: item.slug
					}
				]
			});
		}

		return accumulator;
	}, []);
};
