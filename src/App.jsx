import { FaCheck } from "react-icons/fa";
import { FaTimes  } from "react-icons/fa";
import './App.css'
function Card1() {

  return (
<div id='base1'>
<p>FREE</p>
<h1>$0/month</h1>
<hr />
<div>
  <p><FaCheck /> single User</p>
  <p><FaCheck /> 50GB Storage</p>
  <p><FaCheck /> Unlimited Public Projects</p>
  <p><FaCheck /> Community Access</p>
  <p className="worng">
  <p><FaTimes /> Unlimited Pravite Projects</p>
  <p><FaTimes /> Dedicated Phone Support</p>
  <p><FaTimes /> Free Subdomain</p>
  <p><FaTimes /> Monthly Status Reports</p>
  </p>
</div>
<input type="button" value="BUTTON" />
</div>
  )
}
function Card2() {

  return (
<div id='base2'>
<p>PLUS</p>
<h1>$9/month</h1>
<hr />
<div>
  <p><FaCheck /> 5 Users</p>
  <p><FaCheck /> 50GB Storage</p>
  <p><FaCheck /> Unlimited Public Projects</p>
  <p><FaCheck /> Community Access</p>
  <p><FaCheck /> Unlimited Pravite Projects</p>
  <p><FaCheck /> Dedicated Phone Support</p>
  <p><FaCheck /> Free Subdomain</p>
  <p className="worng">
  <p><FaTimes /> Monthly Status Reports</p>
  </p>
</div>
<input type="button" value="BUTTON" />
</div>
  )
}
function Card3() {

  return (
<div id='base3'>
<p>PRO</p>
<h1>$49/month</h1>
<hr />
<div>
  <p><FaCheck /> Unlimited Users</p>
  <p><FaCheck /> 50GB Storage</p>
  <p><FaCheck /> Unlimited Public Projects</p>
  <p><FaCheck /> Community Access</p>
  <p><FaCheck /> Unlimited Pravite Projects</p>
  <p><FaCheck /> Dedicated Phone Support</p>
  <p><FaCheck /> Free Subdomain</p>
  <p><FaCheck /> Monthly Status Reports</p>
</div>
<input type="button" value="BUTTON" />
</div>
  )
}

function App() {

  return (
    
<div id='base'>
<Card1/>
<Card2/>
<Card3/>
</div>

  )
}

export default App
