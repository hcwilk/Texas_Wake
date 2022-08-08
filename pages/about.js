import Navbar from "../components/Navbar";
import Person from "../components/Person";

export default function About() {
	return (
	  <div className="">
		<Navbar></Navbar>
		<div className="flex flex-col px-16 items-start w-full gap-8 mt-8">
			<Person {...{image:'/IMG_1662.png', name:"Harrison 'Cole' Wilkinson", title: "Event Coordinator", 
			desc: "This is a bunch of sample text because I don' twanna sit here and copy and paste the Lorum Ipsum shit from the internet, so I've elected to sit here and take 1084028409x longer "
			}}></Person>
			<div className="w-full flex justify-end">
				<Person {...{image:'/IMG_1662.png', name:"Harrison 'Cole' Wilkinson", title: "Event Coordinator", 
				desc: "This is a bunch of sample text because I don' twanna sit here and copy and paste the Lorum Ipsum shit from the internet, so I've elected to sit here and take 1084028409x longer "
				}}></Person>
			</div>
			
		</div>

		
	  </div>
	)
  }
  