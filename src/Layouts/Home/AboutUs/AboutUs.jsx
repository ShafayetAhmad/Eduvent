const AboutUs = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">About Eduvent</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="mb-4">
          <img
            className="w-full h-auto object-cover rounded"
            src="https://i.ibb.co/8cpVjGv/guest-speaker.jpg"
            alt="Eduvent Team"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Eduvent was founded with the mission of revolutionizing the
            educational events landscape. Our journey began with a vision to
            connect educators, students, and enthusiasts from around the world
            in an interactive and collaborative learning environment.
          </p>
          <p className="text-gray-700 mb-4">
            From hosting insightful seminars to facilitating hands-on workshops,
            Eduvent is committed to providing a platform that fosters
            knowledge-sharing, skill development, and meaningful connections.
            Our story is defined by a passion for education and a dedication to
            creating impactful learning experiences.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-700">
          At Eduvent, our mission is to empower individuals and institutions
          through innovative educational events. We strive to offer a diverse
          range of high-quality programs that cater to the evolving needs of
          learners in various fields. Our commitment extends beyond events; we
          aim to contribute to the global education community by promoting
          collaboration, knowledge dissemination, and lifelong learning.
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Meet the Eduvent Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              className="w-20 h-20 object-cover mx-auto mb-4 rounded-full"
              src="https://i.ibb.co/BBfJyC1/shafayet.png"
               
            />
            <h3 className="text-xl font-bold mb-2 text-center">
              Shafayet Ahmad Kanon
            </h3>
            <p className="text-gray-700 text-center">Co-founder & CEO</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              className="w-20 h-20 object-cover mx-auto mb-4 rounded-full"
              src="https://i.ibb.co/fxvtBY5/rafi.png"
               
            />
            <h3 className="text-xl font-bold mb-2 text-center">
              Kazi Rezaul Kabir Rafi
            </h3>
            <p className="text-gray-700 text-center">Co-founder & COO</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              className="w-20 h-20 object-cover mx-auto mb-4 rounded-full"
              src="https://i.ibb.co/gwRBnp5/mahmudul.png "
               
            />
            <h3 className="text-xl font-bold mb-2 text-center">
              Mahmudul Hasan Shabab
            </h3>
            <p className="text-gray-700 text-center">Co-founder & CFO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
