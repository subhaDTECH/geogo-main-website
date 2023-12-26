import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import DigitalProductCom from "../components/digitalProduct";
import {graphql} from "gatsby"





const SolutionTemplates= ({data}) => {

   
    console.log(data);

    return (
        <Layout>
    
             <div className="container mx-auto py-10 my-8">
               <p>hello</p>
             </div>
         </Layout>
    )
}

export const Head = () => <Seo title="Solution Templates" />





export default SolutionTemplates;
