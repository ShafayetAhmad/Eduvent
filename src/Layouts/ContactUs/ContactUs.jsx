const ContactUs = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg mb-6">
        We would love to hear from you! If you have any questions, suggestions,
        or if you just want to say hello, feel free to reach out to us using the
        contact form or the contact details below.
      </p>

      <form className="mb-8">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          className="w-full border border-gray-300 p-2 mb-4"
          placeholder="Your Name"
        />

        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          className="w-full border border-gray-300 p-2 mb-4"
          placeholder="Your Email"
        />

        <label className="block text-gray-700 text-sm font-bold mb-2">
          Message:
        </label>
        <textarea
          className="w-full border border-gray-300 p-2 mb-6"
          rows="4"
          placeholder="Your Message"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      <div>
        <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
        <p className="text-lg">
          <span className="font-bold">Email:</span>{" "}
          <a href="mailto:info@yourcompany.com">Contact@ShafayetAhmad.Com</a>
        </p>
        <p className="text-lg">
          <span className="font-bold">Phone:</span> (+880) 1770123456
        </p>
        <p className="text-lg">
          <span className="font-bold">Address:</span> Eduvent, Sylhet,
          Bangladesh
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
