
const testimonials = [
    {
        content: "Cefer has completely transformed our outbound process. We're booking 3x more meetings with half the effort.",
        author: "Sarah J.",
        role: "VP of Sales at TechFlow",
        avatar: "S",
    },
    {
        content: "The data accuracy is incredible. We tested 5 other providers and Cefer won hands down. The intent data is a game changer.",
        author: "Michael C.",
        role: "Growth Lead at StartUp Inc",
        avatar: "M",
    },
    {
        content: "Finally a tool that actually works as advertised. The Chrome extension fits perfectly into my LinkedIn workflow.",
        author: "Jessica R.",
        role: "Account Executive at BigCorp",
        avatar: "J",
    },
];

export function TestimonialsSection() {
    return (
        <section className="w-full py-24 px-4 bg-neutral-50">
            <div className="max-w-[1100px] mx-auto">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center mb-16">
                    Loved by <span className="text-gradient-cefer">Sales Teams</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg key={star} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-neutral-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-cefer-navy flex items-center justify-center text-white font-bold">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div className="font-bold text-cefer-black">{testimonial.author}</div>
                                    <div className="text-xs text-neutral-400">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
