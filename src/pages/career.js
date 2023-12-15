import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../components/index.module.css";
import CareerHero from "../components/career";
import RecogCom from "../components/recog";
import CareerCard from "../components/careerCard";
import GlassDoorReview from "../components/glassDoorReview";
import JobCard from "../components/jobCard";
import InternCard from "../components/internCard";

const CareerPage = () => (
  <Layout>
     <CareerHero/>
     <RecogCom/>
     <CareerCard/>
     <GlassDoorReview/>
     <JobCard/>
     <InternCard/>
</Layout>
)


export const Head = () => <Seo title="Careers" />

export default CareerPage
