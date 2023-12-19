// import { Link } from "gatsby"
// import GeogoLogo from "../../src/images/geogo-logo-1.png";
import * as React from "react"
import "./ourClient.css";

//import graphql
import { graphql, useStaticQuery } from 'gatsby';
const OurClient = ({clients}) => {
//    const data = useStaticQuery(graphql`
//    query MyQuery {
  
//       allStrapiClient {
//         nodes {
//           id
//           client_image {
//             localFile {
//               url
//             }
//           }
//         }
//       }
//     }
//  `);
 //const clients = data?.allStrapiClient?.nodes;

   return (
      <div className="OurClient-Section">
        <div className="container h-full mx-auto w-[95%] p-5  my-10 p-10">
                 <h3 className="title my-10">Our Clients and their words about us</h3>
              <div className=" row grid grid-cols-2 mx-auto lg:grid-cols-6 gap-5 m-2">
                      {
                        clients && clients?.map((client, index)=>(
                           <div key={client?.id} className="Img-box-client">
                              <img alt="Img" className="client-Img" src={client?.client_image?.localFile?.url} />
                          </div>
                        ))
                      }
                     
               </div>

        </div>
    </div>
   )
}

export default OurClient;
