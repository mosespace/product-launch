import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className='bg-[#0c3245] w-full px-[15rem] py-[4rem] flex flex-col gap-[2.5rem]'>
      <div className='flex items-start justify-between gap-4 text-white'>
        <div className='flex flex-col gap-5'>
          <h4 className='font-semibold'>Product</h4>
          <div className='flex flex-col gap-5 text-[.9rem]'>
            <Link href='/'>API</Link>
            <Link href='/'>Pricing</Link>
            <Link href='/'>Security</Link>
            <Link href='/'>Templates</Link>
            <Link href='/'>Gantt Chats</Link>
            <Link href='/'>Wrike Status</Link>
            <Link href='/'>Product Tour</Link>
            <Link href='/'>Task Management</Link>
            <Link href='/'>Apps & Integrations</Link>
            <Link href='/'>CA Notice at Collection</Link>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <h4 className='font-semibold'>Solutions</h4>
          <div className='flex flex-col gap-5 text-[.9rem]'>
            <Link href='/'>Students</Link>
            <Link href='/'>Creative</Link>
            <Link href='/'>All Teams</Link>
            <Link href='/'>Marketing</Link>
            <Link href='/'>Project Management</Link>
            <Link href='/'>Product Development</Link>
            <Link href='/'>Business Operations</Link>
            <Link href='/'>Professional Services</Link>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <h4 className='font-semibold'>Resources</h4>
          <div className='flex flex-col gap-5 text-[.9rem]'>
            <Link href='/'>Support</Link>
            <Link href='/'>Webinars</Link>
            <Link href='/'>Community</Link>
            <Link href='/'>Help Center</Link>
            <Link href='/'>Interactive Training</Link>
            <Link href='/'>Google project management tools</Link>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <h4 className='font-semibold'>Company</h4>
          <div className='flex flex-col gap-5 text-[.9rem]'>
            <Link href='/'>Blog</Link>
            <Link href='/'>Events</Link>
            <Link href='/'>Careers</Link>
            <Link href='/'>About Us</Link>
            <Link href='/'>Newsroom</Link>
            <Link href='/'>Contact Us</Link>
            <Link href='/'>Our Customers</Link>
            <Link href='/'>Partner Program</Link>
            <Link href='/'>User Conference</Link>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <h4 className='font-semibold'>Guides</h4>
          <div className='flex flex-col gap-5 text-[.9rem]'>
            <Link href='/'>Kanban Guide</Link>
            <Link href='/'>Remote Work Guide</Link>
            <Link href='/'>Go -to-Market-Guide</Link>
            <Link href='/'>Product Management Guide</Link>
            <Link href='/'>Project Management Guide</Link>
            <Link href='/'>
              Marketing Project
              <br />
              Marketing Guide
            </Link>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <h4 className='font-semibold opacity-0'>Guides</h4>
          <div className='flex flex-col gap-5 text-[.9rem]'>
            <Link href='/'>Agile Guide</Link>
            <Link href='/'>Scrum Guide</Link>
            <Link href='/'>Return to Work Guide</Link>
            <Link href='/'>Digital Marketing Guide</Link>
            <Link href='/'>Professional Services Guide</Link>
            <Link href='/'>
              Collaborative Work
              <br />
              Management Guide
            </Link>
          </div>
        </div>
      </div>
      <div className='flex items-start justify-between gap-4 text-white'>
        <div className='flex flex-col gap-5 text-white'>
          <h4 className='font-semibold'>Latest in Wike's Blog</h4>
          <div className='flex flex-col gap-5 text-[.9rem]'>
            <Link href='/'>
              Get to Know Brian Nourani: New Wrike President and Chief Revenue
              Officer
            </Link>
            <Link href='/'>
              The Three R's of Work Management: A Blueprint for Marketing
              Efficiency
            </Link>
            <Link href='/'>
              Stakeholder Management: 4 Strategies Proven to Work
            </Link>
            <Link href='/'>Wrike's Soft Skills Matrix for Web Designers</Link>
            <Link href='/' className='decoration-dotted underline'>
              Show more
            </Link>
          </div>
        </div>

        <div className='flex flex-col gap-5 text-white'>
          <h4 className='font-semibold'>Subscribe to Wrike news and updates</h4>
          <div className='flex flex-col gap-5 text-[.9rem]'>
            <Link href='/'>
              Stay informed with the latest news and updates by subscribing to
              our marketing emails
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
