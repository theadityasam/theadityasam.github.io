import React from "react";

import Layout from "../components/layouts/home-layout";
import SEO from "../components/seo";
import Introduction from "../components/sections/intro";
import Skills from "../components/sections/skills";
import FeaturedMap from "../components/sections/featured-map";
import ProjectsMap from "../components/sections/projects-map";
import Contact from "../components/sections/contact";

import "../styles/index.scss";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Aditya Samantaray" />
      <Introduction />
      <Skills />
      <FeaturedMap />
      <div className="work-route">
        <ProjectsMap />
      </div>
      <Contact />
    </Layout>
  );
};

export default IndexPage;
