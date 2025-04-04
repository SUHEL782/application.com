 <h2>🚀 Getting Started</h2>
    <h3>1️⃣ Clone the Repository</h3>
    <pre><code>git clone https://github.com/your-repo.git

   <h3>2️⃣ Set Up Environment Variables</h3>
    <p>Create a <code>.env</code> file in the root directory and add the required environment variables:</p>
    <pre><code>MONGO_URI=mongodb://mongo:27017/mern-app

  <h3>3️⃣ Build and Run with Docker</h3>
    <p>Ensure you have <strong>Docker</strong> and <strong>Docker Compose</strong> installed.</p>
    <h4>🔹 Build Docker Images</h4>
    <pre><code>docker-compose build</code></pre>
    <h4>🔹 Run Containers</h4>
    <pre><code>docker-compose up -d</code></pre>
    <p>The application should now be running at:</p>
    <ul>
        <li><strong>Frontend:</strong> <a href="http://localhost:3000">http://localhost:3000</a></li>
        <li><strong>Backend API:</strong> <a href="http://localhost:5000">http://localhost:5000</a></li>
    </ul>
    
   <h3>4️⃣ Stopping and Removing Containers</h3>
    <pre><code>docker-compose down</code></pre>
    <pre><code>docker-compose down -v</code></pre>

  <h2>📂 Project Structure</h2>
    <pre><code>
