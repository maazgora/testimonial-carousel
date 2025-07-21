import { useBlockProps } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	const { testimonials = [] } = attributes;

	const updateTestimonial = (index, field, value) => {
		const updated = [...testimonials];
		updated[index][field] = value;
		setAttributes({ testimonials: updated });
	};

	const addTestimonial = () => {
		setAttributes({
			testimonials: [
				...testimonials,
				{ name: '', text: '', imageUrl: '' }
			],
		});
	};

    const deleteTestimonial = (index) => {
		const updated = testimonials.filter((_, i) => i !== index);
		setAttributes({ testimonials: updated });
	};

	return (
		<div {...useBlockProps()}>
            <div className="testimonial-fields">
                {testimonials.map((t, index) => (
                    <div key={index} className="testimonial-item">
                        <input
                            type="text"
                            placeholder="Name"
                            value={t.name}
                            onChange={(e) => updateTestimonial(index, 'name', e.target.value)}
                        />
                        <textarea
                            placeholder="Testimonial"
                            value={t.text}
                            onChange={(e) => updateTestimonial(index, 'text', e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Image URL"
                            value={t.imageUrl}
                            onChange={(e) => updateTestimonial(index, 'imageUrl', e.target.value)}
                        />
                        <Button
							isDestructive
							variant="secondary"
							onClick={() => deleteTestimonial(index)}
							style={{ marginTop: '25px' }}
						>
							Delete
						</Button>
                    </div>
                ))}
                <Button onClick={addTestimonial} variant="primary">Add Testimonial</Button>
            </div>
		</div>
	);
}
