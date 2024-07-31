"use client"
import React, { FC } from 'react';
import QuickLinks from '@/components/case-study/QuickLinks';

const sectionData = [
  {
    id: 1,
    title: 'Background',
    description: 'The largest companies in the US utilize <a href="https://www.biworldwide.com/" class="cursor cursor-pointer hover:text-yellow-500 hover:underline">BI Worldwide’s (BIW)</a> ecosystem of solutions to deliver world class sales incentive and engagement programs for their employees. This encompasses the development, delivery and maintenance of bespoke custom-built enterprise platforms, as well as highly configurable products.',
    icon: 'background-icon', // Placeholder for icon
  },
  {
    id: 2,
    title: 'The Opportunity',
    description: 'Coming out of the pandemic, BIW had a couple of large project opportunities with some of their clients<br/><br/> <li> Clear and concise dashboards, coupled with gamification elements, that guided user behavior towards better engagement and incentive outcomes</li> <li> Modernize the tech stack – upgrade the “plumbing” to minimize leaks and breaks</li> <br/> It would also create a solid foundation to develop and deliver better solutions to clients in the future, enabling clients to integrate with other solutions within the BIW ecosystem more seamlessly.',
    icon: 'opportunity-icon', // Placeholder for icon
  },
  {
    id: 3,
    title: 'The Challenge',
    description: 'The size and scope of these opportunities presented a few challenges. It was clear that BIW needed more resources.<br/><br/> <li> What was the best way to continue providing a high level of service, and support existing applications, while catering to clients’ needs of incremental new feature development with very short turnaround timeframes?</li><li> How to right-size the team?</li> <li> What should the team structure be after the hirings?</li> <li> What would the impact of hiring be on the bottom line?</li><br/> Especially after the uncertainty of market forces caused by the pandemic?',
    icon: 'challenge-icon', // Placeholder for icon
  },
  {
    id: 4,
    title: 'The Process',
    description: 'BIW initially hired temporary contractors in the US, and while they filled a short-term need, it proved to be a stop-gap solution. BIW started to explore their options.<br/><br/>– Complete outsourcing would have been very risky, since the core engineering function needed to be onsite.<br/> - Cosourcing was another option. It allowed better control and oversight over the quality of work, without being completely dependent on another team for the outcome.<br/><br/> It was a low-downside / very high-upside proposition. In the worst case scenario, this would have been an experiment for BIW with a trivial impact on the budget. In the best case scenario, extending their engineering team by just 4 members would save them close to 1/2 million dollars annually.',
    icon: 'process-icon', // Placeholder for icon
  },
  {
    id: 5,
    title: 'Co-sourcing with Mandalabs',
    description: 'BIW engaged with Mandalabs as a cosourcing partner to extend their engineering team. To minimize risk even further, BIW started with two software developers in Nepal. After successful integration with the US team, BIW added two more members to the team.<br/><br/> + Increase in overall headcount, enabling team to better spread the workload, decreasing risk of burnout <br/> + Improving profit margin as a result of decrease in engineering expenses <br/> + Improve in speed and quality of deliverables, taking advantage of timezone differential <br/> + Seamless integration/extension of US team means consistent process, workflows and team culture',
    icon: 'cosourcing-icon', // Placeholder for icon
  },
];


const page: FC = () => {
 
  return (
    <div className='relative top-[10rem] w-full px-1 md:px-40 h-full md:h-screen'>
      <h1 className='text-neutral-600 text-center text-2xl md:text-6xl font-bold'>BI Worldwide + Mandalabs</h1>
      <p className='text-center text-xl py-4 text-yellow-500 tracking-wider font-bold'>Unlocking Unlimited Upside</p>
      <div className='flex flex-col h-full mb-[10rem] md:mb-0  md:flex md:flex-row md:h-screen'>
        <aside className='w-1/4 hidden md:block'>
          <QuickLinks />
        </aside>
        <main className=" w-full md:w-3/4 p-4 md:p-8 h-auto md:h-[65vh] overflow-y-auto">
          {sectionData.map(({ id, title, description, icon }) => (
            <section key={id} id={title.replace(/\s+/g, '-').toLowerCase()} className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
               {title}
              </h2>
              <span dangerouslySetInnerHTML={{ __html: description }} />
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}

export default page
