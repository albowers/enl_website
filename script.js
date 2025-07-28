// Simple client-side search for Jekyll blog
// Assumes a search.json file exists with post data

document.addEventListener('DOMContentLoaded', function() {
  var searchInput = document.querySelector('.search-form input');
  var resultsContainer = document.createElement('div');
  resultsContainer.className = 'search-results';
  searchInput.parentNode.appendChild(resultsContainer);

  var posts = [];
  fetch('/search.json')
    .then(response => response.json())
    .then(data => { posts = data; });

  searchInput.addEventListener('input', function(e) {
    var query = e.target.value.trim().toLowerCase();
    resultsContainer.innerHTML = '';
    if (!query) return;
    var matches = posts.filter(post =>
      post.title.toLowerCase().includes(query) ||
      (post.content && post.content.toLowerCase().includes(query)) ||
      (post.tags && post.tags.join(' ').toLowerCase().includes(query))
    );
    if (matches.length === 0) {
      resultsContainer.innerHTML = '<p>No results found.</p>';
      return;
    }
    var ul = document.createElement('ul');
    matches.forEach(post => {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = '/' + post.url;
      a.textContent = post.title;
      li.appendChild(a);
      ul.appendChild(li);
    });
    resultsContainer.appendChild(ul);
  });
});
