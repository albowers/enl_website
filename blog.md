---
layout: default
title: "Blog"
---

<div class="blog-container">
  <div class="blog-main">
    <h2 class="blog-main-heading">The ENL blog: news and discussions</h2>
    <p style="font-size:1.1rem; color:#b22222; margin-bottom:2.2rem;">
      <strong>Note:</strong> This page is under construction. Dynamic features (search, filtering, comments, and more) are coming soon!
    </p>

  </div>
  <aside class="blog-sidebar">
    <div class="sidebar-widget">
      <h3>Search Blog</h3>
      <div class="search-form">
        <input type="text" id="search-input" placeholder="Search posts...">
        <button type="button"><i class="fas fa-search"></i></button>
      </div>
      <div id="results-container"></div>
    </div>
    <!-- You can add more sidebar widgets below -->
  </aside>
</div>
<!-- Simple Jekyll Search JS -->
<script src="https://unpkg.com/simple-jekyll-search@latest/dest/simple-jekyll-search.min.js"></script>
<script>
  SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: 'search.json',
    searchResultTemplate: '<div class="search-result"><a href="{url}">{title}</a></div>',
    noResultsText: 'No results found',
    limit: 10,
    fuzzy: false
  });
</script>
      font-size: 0.8rem;
      color: var(--secondary-color);
      text-decoration: none;
    }
    .blog-post-tags a:hover {
      background-color: var(--secondary-color);
      color: white;
    }
    .blog-post-actions {
    </script>
