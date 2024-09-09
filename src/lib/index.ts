// place files you want to import through the `$lib` alias in this folder.
import { route } from './ROUTES';

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
				slug: item.slug,
				isPublished: item.isPublished
			});
		} else {
			// If the category doesn't exist, create a new category
			accumulator.push({
				category: item.category,
				details: [
					{
						title: item.title,
						date: item.date,
						slug: item.slug,
						isPublished: item.isPublished
					}
				]
			});
		}

		return accumulator;
	}, []);
};

// SEO meta tags
export const metaDefaults = {
	title: 'ByteMinds PH Blog - Online Tutoring for Academic Excellence',
	description:
		'ByteMinds PH - your trusted partner in online education. Access expert tutoring services anytime, anywhere, and elevate your learning experience.',
	image: `${route('githubAvatar', { avatarId: '159615949' })}`,
	url: 'https://blog.bytemindsph.com'
};
