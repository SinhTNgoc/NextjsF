// Tell nextjs how many pages there are
export async function getStaticPaths() {
  const res = await fetch("http://localhost:1337/list-post");
  const listpost = await res.json();
  const paths = listpost.map((post) => {
    prams: {
      slug: post.slug;
    }
  });
  return{ 
    paths,
    fallback: false
  }
}


//  for each individual page : get the data for that page
export async function getStaticProps() {
  const slug = prams.slug;
  const res = await fetch(`http://localhost:1337/list-post?slug=${slug}`);
  const data = await res.json();
  const post = data[0];
  return {
    props: { post },
  };
}