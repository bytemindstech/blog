// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

type Post = {
	title: string;
	date: string;
	author: string;
	category: string;
	slug: string;
	isPublished: boolean;
};

type PostDetails = {
	title: string;
	date: string;
	slug: string;
};

type PostGroup = {
	category: string;
	details: PostDetails[];
};
