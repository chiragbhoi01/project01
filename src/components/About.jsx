import React from 'react';

function About() {
  return (
    <section className="bg-gray-100 p-6 md:p-10">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
        <p className="text-gray-700 mb-4">
          Welcome to Miss Gypsy, where we believe that every piece of jewelry tells a story. Founded in [Year], our journey began with a passion for creating unique, handcrafted pieces that celebrate individuality and beauty.
        </p>
        <p className="text-gray-700 mb-4">
          Our mission is to provide high-quality, artisanal jewelry that not only enhances your style but also resonates with your personal story. We are committed to using ethically sourced materials and sustainable practices in our crafting process.
        </p>
        <p className="text-gray-700 mb-4">
          At Miss Gypsy, we envision a world where every person can express themselves through beautiful jewelry that reflects their unique journey. Our team of skilled artisans pours their heart and soul into every piece, ensuring that you receive a product that is not only beautiful but also meaningful.
        </p>
        <h3 className="text-2xl font-semibold mt-6 mb-2">Meet Our Founder</h3>
        <p className="text-gray-700 mb-4">
          [Founder Name] started this journey with a dream to create jewelry that tells a story. With a background in [relevant experience], [he/she/they] has dedicated [his/her/their] life to crafting pieces that inspire and empower.
        </p>
        <h3 className="text-2xl font-semibold mt-6 mb-2">What Makes Us Unique</h3>
        <p className="text-gray-700 mb-4">
          Our commitment to quality, craftsmanship, and customer satisfaction sets us apart. We take pride in our attention to detail and our ability to create custom pieces that resonate with our customers.
        </p>
        <p className="text-gray-700 mb-4">
          Join us on this journey and discover the beauty of unique, handcrafted jewelry that tells your story.
        </p>
        <div className="text-center mt-6">
          <a href="/shop" className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700 transition duration-300">
            Explore Our Collection
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;