// Import images
import Image1 from '../images/rh.png';
import Image2 from '../images/rh2t.png';
import Image3 from '../images/rh3.png';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/web-project-1.jpg';
import Image6 from '../images/ui-project-2.jpg';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	
} from 'react-icons/fi';

export const singleProjectData = {
	ProjectHeader: {
		title: 'HR Management System',
		publishDate: 'Dec 26, 2023',
	   tags: 'Web Developpemnt',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'HR Management System',
			img: Image1,
		},
		{
			id: 2,
			title: 'Oracle Apex',
			img: Image2,
		},
		
	],
	ProjectInfo: {
		
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			"Our objective in developing the Human Resources Management System (HRMS) on Oracle APEX was to create an efficient, user-friendly solution tailored to meet the intricate demands of managing HR functions within our organization. With this platform, we aimed to centralize and streamline all aspects of HR operations, from employee data management to recruitment processes.",
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Oracle Apex'
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					"In our project of Human Resources Management System (HRMS) developed on Oracle APEX, we have focused on creating an integrated and user-friendly solution to address the complex HR management needs within our organization. ",
			},
			{
				id: 2,
				details:
					"With this platform, we can easily manage all employee-related information, from personal data to employment history, performance evaluations, and completed training courses. Additionally, we have integrated recruitment and candidate management modules to streamline our hiring processes, enabling recruiters to post job openings, track applications, conduct assessments, all while centralizing all data within a single system.",
			},
			{
				id: 3,
				details:
					"What makes this project even more powerful is its flexibility. We designed the system to be easily customizable to adapt to our company's specific workflows and HR policies. This means we can adjust forms, reports, and processes according to our evolving needs, thereby optimizing our operational efficiency. ",
			},
			{
				id: 4,
				details:
					"Furthermore, we have implemented advanced security measures to protect sensitive data, ensuring that only authorized users have access to relevant information. Through this combination of power, flexibility, and security, our HR management system in Oracle APEX has become a crucial pillar of our infrastructure, helping us drive organizational growth while ensuring effective management of our human capital.",
			},
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			
			{
				id: 2,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://instagram.com/realstoman',
			},
			{
				id: 3,
				name: 'Facebook',
				icon: <FiFacebook />,
				url: 'https://facebook.com/',
			},
			{
				id: 4,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://linkedin.com/',
			}
		],
	},
	RelatedProject: {
		title: 'Related Projects',
		Projects: [
			{
				id: 1,
				title: 'Mobile UI',
				img: Image4,
			},
			{
				id: 2,
				title: 'Web Application',
				img: Image5,
			},
			{
				id: 3,
				title: 'UI Design',
				img: Image6,
			},
			{
				id: 4,
				title: 'Kabul Mobile App UI',
				img: Image3,
			},
		],
	},
};
