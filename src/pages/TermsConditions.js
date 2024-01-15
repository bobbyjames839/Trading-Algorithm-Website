import { Header } from '../sections/Header';
import { MenuCover } from '../sections/MenuCover';

export const TermsConditions = (props) => {
  return (
    <div className="App">
      <MenuCover cover = {props.cover} setCover = {props.setCover}/>
      <Header setCover = {props.setCover}/>
      <div className="terms">
        <div className="terms-inner">
          <p className='terms-title'>Terms & Conditions</p>
          <p className='terms-subtitle'>Risk Disclosure</p>
          <p className='terms-para'>
            EdgeAlgo and its team members are not registered financial advisors and do not hold any formal qualifications to provide financial advice. All information, tools, strategies, and services provided by EdgeAlgo, whether on the EdgeAlgo website or through other means, are intended solely for educational purposes. They do not constitute investment advice or an invitation to engage in any specific investment strategy.<br></br><br></br>
            Investment involves significant risks, including the potential loss of all invested capital. The value of investments can fall as well as rise, and past performance is not indicative of future results. You should only trade in financial products that you are familiar with and understand the risk associated with them.<br></br><br></br>
            EdgeAlgo does not assume any liability for any losses or damages, including but not limited to lost profits, that may result directly or indirectly from the use of or reliance on the information, tools, strategies, or services provided. You are solely responsible for all the risks you take and for any decisions you make based on the content provided by EdgeAlgo.<br></br><br></br>
            Before making any investment decisions, you should carefully consider your investment experience, financial situation, investment objectives, risk tolerance level, and consult your independent financial adviser as to the suitability of your situation.<br></br><br></br>
            Trading in stocks, currencies, Contracts for Difference (CFDs), Forex, spread betting, futures, and cryptocurrencies involves a high risk of loss and is not suitable for all investors. Leverage or margin trading may work against you, resulting in substantial loss.<br></br><br></br>
            Please note that the risk of loss in trading can be substantial and you may sustain a total loss of initial margin funds and any additional funds deposited with the firm. If the market moves against your position or margin levels are increased, you may be called upon to pay substantial additional funds on short notice to maintain your position.<br></br><br></br>
            EdgeAlgo does not guarantee the accuracy, completeness, or timeliness of the information provided and is not responsible for any errors or omissions. All information is subject to change without notice.<br></br><br></br>
            This risk disclosure does not disclose all the risks and other significant aspects of trading in financial markets. You should therefore carefully study financial trading before engaging in trading operations.<br></br><br></br>
            By using EdgeAlgo's services, you confirm that you understand these risks and that you are solely responsible for the outcomes of your decisions. EdgeAlgo strongly recommends that you seek the advice of a certified financial advisor before making any investment decisions.
          </p>
          <p className='terms-subtitle'>Refund Policy</p>
          <p className='terms-para'>
            At EdgeAlgo, we strive to offer the best possible services to our customers. However, due to the nature of our products and services, we do not offer refunds once a purchase has been made.<br></br><br></br>
            All sales are final, and the company does not offer any money-back guarantees. You recognize and agree that you shall not be entitled to a refund for any purchase under any circumstances. This policy is in effect immediately upon the purchase of any product or service from EdgeAlgo.<br></br><br></br>
            Please ensure that you have carefully reviewed all information and specifications about our products and services before making a purchase. We encourage you to reach out to our customer service team if you have any questions or need further clarification about our offerings.<br></br><br></br>
            We reserve the right to modify this Refund Policy at any time, effective upon posting of an updated version on our website. Please regularly check our website for updates.<br></br><br></br>
            By making a payment for our services, you acknowledge that you have read and agree to the above No Refund Policy.<br></br><br></br>
            For any questions or concerns regarding this No Refund Policy, please contact us.
          </p>
        </div>
      </div>
    </div>
  )
}