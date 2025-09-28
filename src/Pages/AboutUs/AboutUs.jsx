import { Link } from "react-router-dom";
import Layout from "../../Layout";

const data = [
  {
    name: "John Doe",
    position: "CEO & Founder",
    src: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    position: "CTO",
    src: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Lee",
    position: "Lead Developer",
    src: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    name: "Sophia Brown",
    position: "Marketing Head",
    src: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const vision = {
  title:
    "We strive to innovate and deliver cutting-edge business solutions that empower organizations to achieve excellence.",
  list: [
    "Deliver sustainable solutions to customers",
    "Leverage technology for growth and efficiency",
    "Maintain integrity, quality, and trust in everything we do",
  ],
};

const mission = {
  title:
    "Our mission is to transform businesses with innovative solutions while creating long-term value for our clients.",
  list: [
    "Provide exceptional customer service and support",
    "Foster creativity and collaboration",
    "Drive impactful digital transformation across industries",
  ],
};

const AboutUs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Learn more about who we are, our journey, and what drives us forward.
        </p>
      </section>

      {/* Who We Are */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-indigo-600 font-semibold uppercase mb-2">
            Learn more about us
          </p>
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed">
            We are a passionate team committed to providing innovative
            technology and business solutions. Our expertise spans multiple
            industries, empowering organizations to grow, optimize, and succeed.
            With years of experience and a customer-first mindset, we ensure
            every project we deliver exceeds expectations.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow transition"
          >
            View More
          </Link>
        </div>
        <div>
          <img
            src="https://source.unsplash.com/600x400/?business,teamwork"
            alt="About us"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-indigo-600 font-semibold uppercase mb-2">
            Team Members
          </p>
          <h2 className="text-3xl font-bold mb-10">Our Amazing Team</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {data.map((member) => (
              <div
                key={member.name}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
              >
                <img
                  src={member.src}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Vision */}
        <div className="bg-white shadow rounded-2xl p-8 hover:shadow-lg transition">
          <h3 className="text-2xl font-bold text-indigo-600 mb-4">Our Vision</h3>
          <p className="text-gray-600 mb-6">{vision.title}</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {vision.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Mission */}
        <div className="bg-white shadow rounded-2xl p-8 hover:shadow-lg transition">
          <h3 className="text-2xl font-bold text-indigo-600 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-600 mb-6">{mission.title}</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {mission.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
