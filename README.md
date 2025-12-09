Advanced Data Fetching in Next.js App Router
Concepts Learned:

This project demonstrates three rendering strategies in Next.js using the new App Router:

Static Rendering (SSG) – Pages are pre-rendered at build time for very fast performance.

Dynamic Rendering (SSR) – Pages are generated on each request, providing live and personalized data.

Hybrid Rendering (ISR) – Pages are statically generated but updated periodically, combining speed and freshness.

The project includes:

Static Page: About page

Dynamic Page: User Dashboard

Hybrid Page: Blog/News page

Rendering Modes and Implementation
1️. Static Rendering (SSG)

Page: About

Reason for choice: The content is mostly static and rarely changes. Pre-rendering ensures a fast initial load and improved SEO.

Benefits: Lightning-fast page loads, minimal server usage.

Trade-offs: Content only updates when the site is rebuilt.

2️. Dynamic Rendering (SSR)

Page: Dashboard

Reason for choice: The page requires live, user-specific data that must be updated on each request.

Benefits: Always fresh and personalized content.

Trade-offs: Slower page loads compared to static pages, and higher server costs under heavy traffic.

3️. Hybrid Rendering (ISR)

Page: Blog / News

Reason for choice: Content updates frequently but does not need to refresh on every single request.

Benefits: Combines fast initial load with reasonably fresh data.

Trade-offs: Slight delay between content updates and page regeneration.

Performance, Scalability, and Freshness

Static Rendering: Fast and highly scalable but data is fixed at build time.

Dynamic Rendering: Provides real-time data but can slow down under high traffic and increase server costs.

Hybrid Rendering: Offers a balance between speed, freshness, and scalability.

Case Study: The News Portal That Felt Outdated

Problem: The homepage used static rendering, so it loaded fast, but breaking news appeared outdated. Switching to server-side rendering made content fresh, but page loads slowed down and hosting costs increased.

Solution: Use hybrid rendering (ISR) with frequent updates for the breaking news section while keeping the rest of the page static.

Result: Achieved a balance between performance, data freshness, and scalability.

Reflection

Choosing a rendering strategy is about balancing speed, data freshness, and scalability.

For high-traffic apps, relying on SSR everywhere is costly. ISR or static rendering can reduce server load while keeping the user experience smooth.

Each page in an application may require a different strategy based on its content and usage.