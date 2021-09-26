
import Layout from "../../components/Layout/Layout";
import {Fragment} from "react";
import OurBlogArea from "../../components/OurBlogArea/OurBlogArea";
import CaseStudiesDetail from "../../components/CaseStudiesDetail/CaseStudiesDetail"

function CaseStudies() {
    return (<Fragment>
        <Layout>
        <CaseStudiesDetail/>
         <OurBlogArea />
        </Layout>
    </Fragment>)
}


export default CaseStudies;
