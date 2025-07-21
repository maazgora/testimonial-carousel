import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	
    const testimonials = attributes?.testimonials || [];

	if (!Array.isArray(testimonials) || testimonials.length === 0) {
		return <div {...useBlockProps.save()}>No testimonials added.</div>;
	}

	return (
	<div {...useBlockProps.save()} className="testimonial-carousel swiper">
		<div className="swiper-wrapper">
			{attributes.testimonials.map((testimonial, index) => (
				<div className="swiper-slide" key={index}>
					<div className="testimonial-item">
						<img src={testimonial.imageUrl} alt={testimonial.name} />
						<p>{testimonial.text}</p>
						<strong>{testimonial.name}</strong>
					</div>
				</div>
			))}
		</div>
		{/* Optional: Pagination/Navigation */}
		<div className="swiper-pagination"></div>
		<div className="swiper-button-prev"></div>
		<div className="swiper-button-next"></div>
	</div>
);
}


