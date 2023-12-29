import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import * as styles from "../components/index.module.css"
// style={{  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url(${solution?.image?.localFile?.url})`, backgroundSize: 'cover' }}
import { graphql, Link } from "gatsby"



const SolutionPage = ({ data }) => {
  const solutions = data.allStrapiSolution.nodes
  const solution_category = data?.allStrapiSolutionCategory?.edges
  console.log(solution_category, "solution_category")




  return (
    <Layout>
      <section className="service-page-section">
        <div className="container h-full mx-auto w-[90%] p-5 m-3 my-10 p-10 mx-5">
          <div className="service-header">
            <h1 className="text-[46px] font-semibold">Solutions.</h1>
          </div>
           <div className="row my-8 p-5 flex flex-col lg:flex-row ">
            <div className="left-box w-full lg:w-1/2 ">
              <ul>
                {solution_category &&
                  solution_category?.map((solution, index) => {
                    return (
                      <li key={index} className="m-2 p-2 cursor-pointer">
                        <a
                          href={`#${solution?.node?.type}`}
                          className="no-underline text-black"
                        >
                          {solution?.node?.type}
                        </a>
                      </li>
                    )
                  })}
              </ul>
            </div>
            <div className="right-box p-5 mx-5 w-full">
              {solutions &&
                solutions
                  .map((solution, index) => (
                    <div
                      key={index}
                      id={solution?.type}
                      className="w-full border digital-product-box my-8 p-5 shadow-lg"
                    >
                        <h3 className="text-sm my-2 top-0 right-0 text-right">{solution?.type}</h3>
                      <h2 className="text-2xl font-semibold">
                        {solution?.title}
                      </h2>
                      <p className="text-[16px] opacity-0.8">
                        {solution?.description}
                      </p>

                      {solution?.content?.data?.content && (
                        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                          <Link
                            to={`${solution?.slug}`}
                            className="no-underline text-black"
                          >
                            Read More..
                          </Link>
                        </button>
                      )}

                </div>
     ))}
             
              
              
             </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Solution" />

export const query = graphql`
  query MyQuery {
    allStrapiSolutionCategory(sort: { priority: ASC }) {
      edges {
        node {
          type
        }
      }
    }
    allStrapiSolution(sort: { solution_category: { priority: ASC } }) {
      nodes {
        slug
        title
       
        description
        content {
          data {
            content
          }
        }
        image {
          localFile {
            url
          }
        }
        type
       
      }
    }
  }
`

export default SolutionPage
