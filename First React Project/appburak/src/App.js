import Nav from './nav/Nav';
import './App.css';
import Navbar from './navbar/navbar'
import Slider from './slider/slider';
import Card from './card/card'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Navbar/>
      <Slider/>
      <br/><br/>
      <Card icon={ <i class="fa-solid fa-briefcase"></i>}  ttl="İnternal Audit" text="Audit services are designed to help your business mitigate risk, create new effcienices and better support strategic objectives" icon2={<i class="fa-solid fa-arrow-right"></i>}/>
      <Card icon={<i class="fa-solid fa-calendar-check"></i> } ttl="Accounting" text="A range of servisec designed to preovide timely prepariton of company accounts, whether it be at the financal year end or on a monthly basis." icon2={<i class="fa-solid fa-arrow-right"></i>}/>
      <Card icon={<i class="fa-solid fa-magnifying-glass"></i>} ttl="Rewiew" text="Rewies are less detalied and cosist predominaty of an assesment of the company,s books and records." icon2={<i class="fa-solid fa-arrow-right"></i>}/>
      <Card  icon={<i class="fa-solid fa-calculator"></i>}ttl="Audit" text="Audits are verifred by sight, confirmation, discussion with magament assesment of internal controls and analytical procedures." icon2={<i class="fa-solid fa-arrow-right"></i>}/>
      <Card  icon={ <i class="fa-solid fa-star"></i>}ttl="Attes Services" text="Attesstation services that we provide, include the procces of indipent rewiew of the data validity auditted by an acoount." icon2={<i class="fa-solid fa-arrow-right"></i>}/>
      <Card icon={<i class="fa-solid fa-life-ring"></i>} ttl="Legislvale Support" text="To ensure the quality and effettiveness of ecery byusiness activity, we support our every client by supporting them all lesislative issuess." icon2={<i class="fa-solid fa-arrow-right"></i>}/>
      
    </div>
  );
}

export default App;
