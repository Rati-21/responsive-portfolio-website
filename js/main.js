<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio | Projects</title>
    <link rel="stylesheet" href="css/style.css">
    <style>
      .portfolio-hero {
        text-align: center;
        padding: 3rem 1rem 1.5rem;
      }
      .portfolio-hero h1 {
        font-size: clamp(1.8rem, 4vw, 2.8rem);
        margin-bottom: 0.5rem;
      }
      .portfolio-hero p {
        color: rgb(120, 120, 120);
        font-size: 1.05rem;
        max-width: 600px;
        margin: 0 auto;
      }
      .portfolio-section {
        padding: 1rem 2rem 3rem;
        max-width: 1200px;
        margin: 0 auto;
      }
      .filter-buttons {
        display: flex;
        gap: 8px;
        margin-bottom: 1.5rem;
        flex-wrap: wrap;
        justify-content: center;
      }
      .filter-btn {
        padding: 8px 18px;
        background: rgb(245, 245, 245);
        border: 1px solid rgb(200, 200, 200);
        color: rgb(60, 60, 60);
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.9rem;
        font-weight: 500;
        transition: all 0.3s ease;
      }
      .filter-btn:hover, .filter-btn.active {
        background: rgb(165, 43, 43);
        color: #fff;
        border-color: rgb(165, 43, 43);
      }
      .portfolio-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 1.5rem;
      }
      .portfolio-item {
        display: block;
        overflow: hidden;
        border-radius: 8px;
        border: 1px solid rgb(220, 220, 220);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        background: #fff;
        text-decoration: none;
      }
      .portfolio-item:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0,0,0,0.12);
      }
      .portfolio-item img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        display: block;
        transition: transform 0.4s ease;
      }
      .portfolio-item:hover img {
        transform: scale(1.05);
      }
      .portfolio-item figcaption {
        padding: 1rem;
        font-size: 0.95rem;
        color: rgb(50, 50, 50);
        font-weight: 600;
        text-align: center;
      }
      @media (max-width: 600px) {
        .portfolio-section { padding: 1rem; }
        .portfolio-grid { grid-template-columns: 1fr; }
      }
    </style>
<base target="_blank">
</head>
<body>

  <header>
    <nav class="navbar">
      <div class="logo"><a href="index.html">Alexandra Madison</a></div>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="portfolio.html" class="active">Portfolio</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section class="portfolio-hero">
      <h1>My Work</h1>
      <p>A selection of recent projects across mobile development, UI design, and creative coding.</p>
    </section>

    <section class="portfolio-section">
      <div class="filter-buttons">
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="mobile">Mobile</button>
        <button class="filter-btn" data-filter="web">Web</button>
        <button class="filter-btn" data-filter="design">Design</button>
      </div>

      <div class="portfolio-grid">
        <a href="https://picsum.photos/id/180/1000/750" class="portfolio-item" data-lightbox="portfolio" data-caption="E-Commerce Dashboard — Flutter & Firebase" data-category="mobile">
          <img src="https://picsum.photos/id/180/400/300" alt="E-Commerce Dashboard">
          <figcaption>E-Commerce Dashboard</figcaption>
        </a>

        <a href="https://picsum.photos/id/201/1000/750" class="portfolio-item" data-lightbox="portfolio" data-caption="Brand Identity System — Adobe Suite" data-category="design">
          <img src="https://picsum.photos/id/201/400/300" alt="Brand Identity">
          <figcaption>Brand Identity System</figcaption>
        </a>

        <a href="https://picsum.photos/id/3/1000/750" class="portfolio-item" data-lightbox="portfolio" data-caption="Task Manager App — React Native" data-category="mobile">
          <img src="https://picsum.photos/id/3/400/300" alt="Task Manager">
          <figcaption>Task Manager App</figcaption>
        </a>

        <a href="https://picsum.photos/id/60/1000/750" class="portfolio-item" data-lightbox="portfolio" data-caption="Portfolio Website — HTML5, CSS Grid, JS" data-category="web">
          <img src="https://picsum.photos/id/60/400/300" alt="Portfolio Website">
          <figcaption>Portfolio Website</figcaption>
        </a>

        <a href="https://picsum.photos/id/119/1000/750" class="portfolio-item" data-lightbox="portfolio" data-caption="Fitness Tracker — SwiftUI & HealthKit" data-category="mobile">
          <img src="https://picsum.photos/id/119/400/300" alt="Fitness Tracker">
          <figcaption>Fitness Tracker</figcaption>
        </a>

        <a href="https://picsum.photos/id/48/1000/750" class="portfolio-item" data-lightbox="portfolio" data-caption="SaaS Landing Page — Figma to Code" data-category="web">
          <img src="https://picsum.photos/id/48/400/300" alt="SaaS Landing Page">
          <figcaption>SaaS Landing Page</figcaption>
        </a>
      </div>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 Alexandra Madison. All rights reserved.</p>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
