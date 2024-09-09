<script>
	import { route } from '$lib/ROUTES';
	import image from '$lib/assets/images/blog-featured-image.webp';
</script>

<div class="w-full md:w-3/4 px-4">
	<img src={image} alt="blog-featured-img" class="mb-8" />

	<div class="text-primary-700 mb-8">
		<h2 class="h2 mb-4">
			Welcome to the Ultimate Resource for Web Development and Online Tutoring
		</h2>
		<h4 class="h4">Unlock Your Potential in Web Development and Online Learning</h4>
	</div>

	<div class="prose max-w-none">
		<p>
			Welcome to our blog, your go-to destination for all things web development and online
			tutoring. Whether you're an aspiring developer looking to dive into coding or a student
			seeking the best online tutoring strategies, we have you covered. Our mission is to provide
			you with the latest insights, practical tips, and expert advice to help you excel in the
			ever-evolving world of technology and education.
		</p>
		<h3>Explore the World of Web Development</h3>
		<p>
			The digital age is booming, and with it, the demand for skilled web developers is soaring.
			From building beautiful, responsive websites to crafting complex applications, web development
			is a dynamic field full of opportunities. Our blog offers:
		</p>
		<ul>
			<li>
				<strong>In-Depth Tutorials:</strong> Step-by-step guides on HTML, CSS, JavaScript, and beyond.
				Perfect for beginners and seasoned pros alike.
			</li>
			<li>
				<strong>Best Practices:</strong> Stay updated with the latest trends, tools, and best practices
				in the industry. Learn about responsive design, performance optimization, and more.
			</li>
			<li>
				<strong>Case Studies:</strong> Real-world examples of successful projects, showcasing how different
				technologies and techniques are applied.
			</li>
			<li>
				<strong>Expert Interviews:</strong> Insights and advice from industry leaders and experienced
				developers.
			</li>
		</ul>
		<h3>Master the Art of Online Tutoring</h3>
		<p>
			The rise of online learning has transformed education, making it more accessible and flexible.
			Whether you're a tutor or a learner, understanding how to make the most of online tutoring can
			greatly enhance your experience. Our blog provides:
		</p>
		<ul>
			<li>
				<strong>Strategies for Effective Online Teaching:</strong> Tips on creating engaging lessons,
				using interactive tools, and maintaining a positive learning environment.
			</li>
			<li>
				<strong>Best Practices for Online Learning:</strong> Insights into how to stay focused, manage
				time effectively, and make the most of online courses.
			</li>
			<li>
				<strong>Technology Reviews:</strong> Evaluations of the latest online teaching tools and platforms.
				Find out which ones can help you achieve your educational goals.
			</li>
			<li>
				<strong>Resources for Online Tutors:</strong> Guidance on setting up your online classroom, using
				technology to support your teaching, and building a strong online presence.
			</li>
		</ul>
		<h3>Why Follow Our Blog?</h3>
		<ul>
			<li>
				<strong>Stay Updated:</strong> With the fast-paced world of web development and online learning,
				keeping up with the latest trends and best practices is crucial. Our blog ensures you're always
				in the know.
			</li>
			<li>
				<strong>Learn from Experts:</strong> Gain insights from seasoned professionals who have years
				of experience in both web development and online tutoring.
			</li>
			<li>
				<strong>Engage with a Community:</strong> Join a community of learners and educators who are
				passionate about technology and education. Share your knowledge and learn from others.
			</li>
		</ul>
		<h3>Get Started Today</h3>
		<p>
			Ready to dive in? Explore our latest posts and start your journey towards mastering web
			development and online tutoring. Subscribe to our newsletter for regular updates and never
			miss a post. Join us as we navigate the exciting realms of technology and education together!
		</p>
		<h3>Happy Learning and Coding!</h3>
		<p>
			Feel free to visit our <a class="anchor" href={route('website')}>website</a>. We're here to
			support you on your path to success.
		</p>
	</div>
</div>
