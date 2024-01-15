import { Header } from "../sections/Header"
import { MenuCover } from "../sections/MenuCover"


export const AboutUs = (props) => {
  return (
    <div className="App">
      <MenuCover cover = {props.cover} setCover = {props.setCover}/>
      <Header setCover = {props.setCover}/>
      <div className="about-us">
        <div className="about-us-inner">
          <p className="about-us-title">About Us</p>
          <p className="about-us-para">At EdgeAlgo, we are a dedicated team of market analysts and developers with years of experience in the financial markets. Our journey began with a simple goal: to create a trading indicator that can truly assist traders in navigating the complex world of financial markets.<br></br><br></br>
          Our team has spent countless hours analysing market trends, studying technical indicators, and understanding the nuances of trading. We have leveraged our extensive knowledge and experience to develop EdgeAlgo, a powerful tool designed to provide traders with a competitive edge.<br></br><br></br>
          EdgeAlgo is the culmination of our team's expertise and dedication. It is not just a product, but a testament to our commitment to empowering traders. We believe that with the right tools, anyone can excel in trading, and EdgeAlgo is our contribution to that belief.<br></br><br></br>
          Our indicators are meticulously crafted, taking into account various market conditions and trading styles. They are designed to be adaptable to any market or timeframe, making them versatile and valuable for all traders, regardless of their preferred trading assets or strategies.<br></br><br></br>
          At EdgeAlgo, we are driven by the desire to democratize trading. We aim to make advanced tools accessible to retail traders, tools that were previously only available to institutions. We believe that by providing these tools, we can help level the playing field and give power back to individual traders.<br></br><br></br>
          We are proud of what we have achieved with EdgeAlgo, but we are not stopping here. We are continuously working to improve and innovate, driven by our commitment to our users and our passion for the markets. We look forward to helping you on your trading journey.</p>
        </div>
      </div>
    </div>
  )
}