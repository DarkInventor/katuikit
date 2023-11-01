import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page - Solid SaaS Boilerplate",
  description: "This is Blog page for Solid Pro",
  // other metadata
};

const BlogPage = async () => {
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          <div className="flex flex-col gap-7.5 px-10 pt-2 shadow-2xl border-solid rounded-lg">
          <p className="shadow-2xl border-solid p-4 border-s-4 border-white-200 hover:border-solid hover:bg-sky-900">Components</p> 
          <p className="shadow-2xl border-solid p-4 border-s-4 border-gray-900 hover:border-white hover:bg-sky-900">Building Blocks</p>
          <p className="shadow-2xl border-solid p-4 border-s-4 border-gray-900 hover:border-white hover:bg-sky-900">Waitlist Pages</p>
          <p className="shadow-2xl border-solid p-4 border-s-4 border-gray-900 hover:border-white hover:bg-sky-900">Landing Pages</p>
          <p className="shadow-2xl border-solid p-4 border-s-4 border-gray-900 hover:border-white hover:bg-sky-900">Templates</p>
          </div>
            {BlogData.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
