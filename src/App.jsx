import { useState } from 'react';
import ilinkLogo from './assets/react.svg';
import './App.css';
import { Card, CardContent, Button, Typography } from '@mui/material';

function App() {
  const [count, setCount] = useState(0);

  const cardData = [
    {
      title: 'END-TO-END TECHNOLOGY CAPABILITIES',
      description: 'Explore our comprehensive technology capabilities to drive innovation and efficiency.',
    },
    {
      title: 'Digital Transformation Services',
      description: 'Transform your business with our end-to-end Digital Transformation services.',
    },
    {
      title: 'Digital Experience',
      description: 'We help you navigate through the lifecycle of a Digital Transformation initiative.',
    },
    {
      title: 'Data & AI',
      description: 'Bridge information silos and transform data into actionable business insights.',
    },
    {
      title: 'Security, Infrastructure and Managed Services',
      description: 'Deliver specific cloud solutions and seamlessly migrate your data.',
    },
    {
      title: 'RPA',
      description: 'Establish an effective automation journey to remove monotonous processes.',
    },
    {
      title: 'Conversational AI',
      description: 'Interact with your data more efficiently, powered by Natural Language Processing.',
    },
    {
      title: 'Salesforce Enablement',
      description: 'Enable ambitious organizations on their digital transformation journey.',
    },
    {
      title: 'IoT',
      description: 'Unlock the full potential of the IoT by leveraging Microsoft’s Azure IoT suite.',
    },
    {
      title: 'Advanced Communication',
      description: 'Simplify the procurement, deployment, and installation process of private LTE or 5G/LTE networks.',
    },
    
  ];

  return (
    
    <div className="ilink-website">
      
      <header>
        <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQEsL24sFPjZaA/company-logo_200_200/0/1595794511330?e=2159024400&v=beta&t=DdOOmB5tqWyKm0TBsRxBcSuvbd9EtmeJ23hWJUCAQY4" />
        <h1>Welcome to iLink Digital - Trichy</h1>
      </header>
      
      <section className="our-story">
    <div className="section-header">
      <h2>Our story </h2>
    </div>
    <div className="section-content">
      <p>
    
iLink was a pioneer in delivering integrated solutions through leading-edge management consulting when founded in 2002. Today, we’re a global consultancy that helps ambitious organizations embrace a transformational approach to innovate growth and sustainability, unlock the potential to make change happen, and achieve lasting gains that will thrive for this generation and the next.  

Across 18 offices in 8 countries, we work alongside our clients as one team with a shared vision to deliver better, faster, and more enduring outcomes.
      </p>
    </div>
  </section>

  <section className="about-us">
    <div className="section-header">
      <h2>About iLink Digital </h2>
    </div>
    <div className="section-content">
      <p>
        iLink Digital Systems is a leading technology company specializing in providing
        cutting-edge solutions for businesses globally. With a focus on innovation and
        expertise, we empower our clients to thrive in the digital era.
      </p>
    </div>
  </section>
  

  <section className="services">
    <div className="section-header">
      <h2>Our Services</h2>
    </div>
    <div className="section-content">
      <ul>
        <li>Custom Software Development</li>
        <li>Web and Mobile App Development</li>
        <li>Cloud Computing Solutions</li>
        <li>Data Analytics and Business Intelligence</li>
      </ul>
    </div>
  </section>

  <section className="contact">
    <div className="section-header">
      <h2>Contact Us</h2>
    </div>
    <div className="section-content">
      <p>
        Reach out to us for your technology needs. We're here to assist you on your
        journey towards digital transformation.
      </p>
      <address>
        Email: <a href="mailto:info@ilinkdigital.com">info@ilinkdigital.com</a><br />
        iLink Systems Pvt. Ltd.Office Area 7 & 8,First Level,ELCOT IT Park,Navalpattu, Trichy – 620026<br/>
        Phone: (+91) 892-940-8555
      </address>
    </div>
  </section>



      <main>
      

        {cardData.map((data, index) => (
          <Card key={index} className="material-card">
            <CardContent>
              <Typography variant="h5" component="div" className="card-title">
                {data.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" className="card-description">
                {data.description}
              </Typography>
              
            </CardContent>
          </Card>
        ))}
      </main>

      <footer>
  <div className="footer-content">
    <div className="newsletter">
      <h3>Subscribe to Our Newsletter</h3>
      <p>Stay up-to-date with our latest news and updates.</p>
      <div className="newsletter-form">
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
  </div>
  <div className="copyright">
    <p>&copy; 2024 iLink Digital Systems. All rights reserved.</p>
  </div>
</footer>


    </div>
  );
}

export default App;
