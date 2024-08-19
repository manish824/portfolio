// @flow strict
import { personalData } from "@/utils/data/personal-data";

async function getBlog(slug) {
  const res = await fetch(`https://dev.to/api/articles/${personalData.devUsername}/${slug}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return data;
}

// This function generates the paths for static pages
export async function generateStaticParams() {
  // Example: Fetch all possible slugs from your data source
  const articles = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)
    .then(res => res.json());

  return articles.map(article => ({
    slug: article.slug,
  }));
};

async function BlogDetails({ params }) {
  const slug = params.slug;
  
  try {
    const blog = await getBlog(slug);

    return (
      <div>
        <h1>{blog.title}</h1>
        <p>{blog.description}</p>
        {/* Render additional blog content here */}
      </div>
    );
  } catch (error) {
    return <p>Error fetching the blog: {error.message}</p>;
  }
};

export default BlogDetails;
