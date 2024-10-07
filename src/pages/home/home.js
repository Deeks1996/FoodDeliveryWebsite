import Layout from "../../components/layouts/layout";
import "../../styles/homestyle.css";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
import Section6 from "./section6";
import Section7 from "./section7";

const Home = ()=>{
    return(
        <>
        <Layout>
            {/* Home Section Hero Banner*/}
            <Section1/>

            {/* Home Section About */}
            <Section2/>

            {/* Home Section Menu */}
            <Section3/>

            {/* Home Section Promotion */}
            <Section4/>

            {/* Home Section Shop */}
            <Section5/>

            {/* Home Section Blog */}
            <Section6/>

            {/* Home Section Contact */}
            <Section7/>
        </Layout>
        </>
    )
}
export default Home;