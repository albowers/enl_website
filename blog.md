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

    {% for post in site.posts %}
      <article class="blog-post">
        <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
        <div class="blog-post-meta">
          <span>{{ post.author }}</span>
          <span>{{ post.date | date: "%B %d, %Y" }}</span>
          <span>{{ post.category }}</span>
        </div>
        <p>{{ post.excerpt | strip_html | truncatewords: 40 }}</p>
        <a href="{{ post.url }}" class="read-more-link">Continue Reading →</a>
        <a href="{{ post.url }}#giscus-comments" class="comment-link">Comment</a>
        <div class="blog-post-tags">
          {% for tag in post.tags %}
            <a href="#">{{ tag }}</a>
          {% endfor %}
        </div>
      </article>
    {% endfor %}

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
    <!-- Categories Widget -->
    <div class="sidebar-widget">
      <h3>Categories</h3>
      <ul>
        {% assign categories = site.categories | sort %}
        {% for category in categories %}
          <li>
            <a href="/categories/{{ category[0] | slugify }}/">{{ category[0] }}</a>
            <span class="category-count">{{ category[1].size }}</span>
          </li>
        {% endfor %}
      </ul>
    </div>

    <!-- Recent Posts Widget -->
    <div class="sidebar-widget">
      <h3>Recent Posts</h3>
      {% for post in site.posts limit:3 %}
        <div class="recent-post">
          <div class="recent-post-info">
            <h4><a href="{{ post.url }}">{{ post.title }}</a></h4>
            <span class="recent-post-date">{{ post.date | date: "%B %d, %Y" }}</span>
          </div>
        </div>
      {% endfor %}
    </div>

    <!-- Tags Widget -->
    <div class="sidebar-widget">
      <h3>Tags</h3>
      <div class="tag-cloud">
        {% assign tags = site.tags | sort %}
        {% for tag in tags %}
          <a href="/tags.html#{{ tag[0] | slugify }}">#{{ tag[0] }}</a>
        {% endfor %}
      </div>
    </div>

    <!-- Archives Widget -->
    <div class="sidebar-widget">
      <h3>Archives</h3>
      <ul>
        {% assign grouped_posts = site.posts | group_by_exp:"post", "post.date | date: '%B %Y'" %}
        {% for month in grouped_posts %}
          <li>
            <a href="#">{{ month.name }} <span class="category-count">{{ month.items | size }}</span></a>
          </li>
        {% endfor %}
      </ul>
    </div>
  </aside>
</div>
