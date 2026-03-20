function Contact() {
  return (
    <div className="mt-32 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

      <p className="text-gray-600 mb-6">
        Feel free to reach out for collaboration or opportunities!
      </p>

      <div className="space-y-4 text-lg">
        
        <p>
          📧 Email:{" "}
          <a href="mailto:rushikeshnirpal22@gmail.com" className="text-blue-500">
            rushikeshnirpal22@gmail.com
          </a>
        </p>

        <p>
          💻 GitHub:{" "}
          <a href="https://github.com/rushikeshnirpal" target="_blank" className="text-blue-500">
            github.com/rushikeshnirpal
          </a>
        </p>

       <p>
  🔗 LinkedIn:{" "}
  <a 
    href="https://www.linkedin.com/in/rushikesh-nirpal-19ab02291/" 
    target="_blank" 
    className="text-blue-500"
  >
    linkedin.com/in/rushikesh-nirpal-19ab02291
  </a>
</p>

      </div>
    </div>
  );
}

export default Contact;