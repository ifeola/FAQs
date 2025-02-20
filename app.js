const faq = [
	{
		question: "What is your return policy?",
		answer:
			"You can return any item within 30 days of purchase for a full refund, provided it is unused and in its original packaging.",
	},
	{
		question: "How long does shipping take?",
		answer:
			"Shipping typically takes 3-5 business days, depending on your location.",
	},
	{
		question: "Do you ship internationally?",
		answer:
			"Yes, we ship to most countries worldwide. Shipping fees and delivery times vary based on destination.",
	},
	{
		question: "How can I track my order?",
		answer:
			"Once your order is shipped, you will receive a tracking number via email to monitor your shipment's progress.",
	},
	{
		question: "What payment methods do you accept?",
		answer:
			"We accept Visa, MasterCard, American Express, PayPal, and other major payment gateways.",
	},
];

const faqsWrapper = document.querySelector(".faqs__container");
const faqs = faqsWrapper.querySelectorAll(".faq");

faqsWrapper.addEventListener("click", (e) => {
	toggleFaq(e.target);
});

function toggleFaq(targetEl) {
	faqs.forEach((faq) => {
		if (targetEl !== faq) {
			faq.classList.remove("active");
		}
		targetEl.classList.toggle("active");
	});
}
