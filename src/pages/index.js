import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            Proven ability to establish and maintain excellent communication and relationships with clients. 
            </p>
            <p className="lead mb-5">
I have gained excellent time management skills combined with superior knowledge of the customer service industry.
            </p>
            <p className="lead mb-5">
I am always committed to utilizing my skills to further the mission of a company and dedicated to identifying customer needs and delivering effective solutions to all problems. 
            </p>
            <p className="lead mb-5">
Involved in the recruitment process, and the management of existing employees.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Team Leader Customer Support</h3>
              <div className="subheading mb-3">Hootsuite, Bucharest</div>
              <p>
                Monitored the performance of the customer support team members and worked to increase team morale and motivation;
              </p>
               <p>
                Built an effective team of workers that increased customer satisfaction rates;
              </p>
               <p>
                Organized and prioritized work to complete assignments in a timely, efficient manner;
              </p>
              <p>
                Worked to remain technologically savvy and current with field advancements;
              </p>
              <p>
                Remained open-minded and humble, leading to great collaborations;
              </p>
              <p>
                Aimed to support a positive and productive work culture;
              </p>
              <p>
                Involved in the recruitment process: interviews, and hiring;
              </p>
              <p>
                Worked to motivate and support all team members, resulting in excellent workflow and productivity.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2019 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Customer Support Advocate</h3>
              <div className="subheading mb-3">Hootsuite, Bucharest</div>
              <p>
                Worked to achieve high customer satisfaction rates by providing optimal customer service in a fast paced enviroment;
              </p>
               <p>
                Answered all customer queries to the best of my ability;
              </p>
               <p>
                Answered inquiries by effectively researching, locating, and relaying information to customers;
              </p>
               <p>
                Worked productively to determine the needs of customers and fast-track solutions to those needs;
              </p>
               <p>
                Worked well with upper management to ensure ultimate customer satisfaction;
              </p>
               <p>
                Brought forth advanced organizational and multitasking skills;
              </p>
               <p>
                Remained flexible, adaptable, and committed to success;
              </p>
               <p>
                Troubleshoot reported issues or queries in detail to diagnose and differentiate between product and non-product issues in order to provide accurate, valid, and complete information to customers;
              </p>
              <p>
                Maintain a focus on excellence by meeting or exceeding quarterly targets including Quality Assurance (QA), Customer Satisfaction (CSAT), productivity (solves/AHT)s.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Nov 2017 - June 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Customer Sales Support Manager</h3>
              <div className="subheading mb-3">HP Romania, Bucharest</div>
              <p>
                Guide Sales and implement optimal catalog structure;
              </p>
              <p>
                Provide consultancy on product offering and pricing;
              </p>
              <p>
                Performs triage on issues and redirects to appropriate teams;
              </p>
              <p>
                Single point of contact on issues regarding offer,catalog, B2B portal access, and capabilities.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2016 - May 2017</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Account Manager</h3>
              <div className="subheading mb-3">E-Securities Romania, Bucharest</div>
              <p>
                Collecting and archiving information related to the sector's companies of interest;
              </p>
              <p>
                Collecting and archiving information related to political-economic events;
              </p>
              <p>
                Combining informative notes on the events of a political or economic nature;
              </p>
              <p>
                Analyzing surveys, market studies participation under the coordination of the Director of the Department.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Sept 2015 - December 2015</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">A.S.E, Bucharest</h3>
              <div className="subheading mb-3">Master's Degree</div>
              <div>Human Resource Management</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Sept 2016 - June 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">S.N.S.P.A, Bucharest</h3>
              <div className="subheading mb-3">Bachelor European Administration</div>
              <p>Attended an Erasmus Program in Portugal at Instituto Politécnico de Bragança during the second semester in my second year of college.</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Sept 2012 - June 2015</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Colegiul National Constantin Bratescu, Constanţa</h3>
              <div className="subheading mb-3">Highschool</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Sept 2008 - June 2012</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3"></div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Creativity
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Leadership
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Ability to Multitask
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Good communicator
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Ability to Work in a Team
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Interpersonal Communication Skills
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Problem solver
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Good with task & time management
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Fast Learner
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Adaptability
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Tech Savy on both MacOS and Windows Computers
            </li>
            
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from work, I enjoy most of my time being
            outdoors. Love to travel 
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of fantasy genre
            movies and television shows, I am an aspiring pasta chef.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5"> Courses &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              ECDL
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Cambridge
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Hootsuite Platform Certification, Hootsuite Academy
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
