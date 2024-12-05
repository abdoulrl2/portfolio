body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header {
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
}

nav ul li {
  margin: 0 15px;
}

nav ul li a {
  color: white;
  text-decoration: none;
}

main {
  padding: 2rem;
}

section {
  margin-bottom: 3rem;
}

#sobre, #projetos, #contato {
  text-align: center;
}

.projetos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.projeto {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

.projeto h3 {
  margin-top: 0;
}

form {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

form input, form textarea, form button {
  padding: 10px;
  font-size: 1rem;
}

form button {
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;
}

form button:hover {
  background-color: #555;
}

.social-links a {
  display: inline-block;
  margin: 10px;
  text-decoration: none;
  color: #333;
}

footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem 0;
  position: fixed;
  bottom: 0;
  width: 100%;
}

