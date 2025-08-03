export function Contact() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="font-display text-4xl mb-6">Contact Us</h1>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg mb-2">Name</label>
          <input
            type="text"
            id="name"
            className="w-full p-3 rounded-lg bg-secondary"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-3 rounded-lg bg-secondary"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg mb-2">Message</label>
          <textarea
            id="message"
            rows={4}
            className="w-full p-3 rounded-lg bg-secondary"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-accent text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}