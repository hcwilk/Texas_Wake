import Navbar from "../components/Navbar";

function Calendar() {
  return (
	<>
		<Navbar></Navbar>
		<div className="flex justify-center">		
			<div className="shadow-2xl w-full mx-16 mt-12 rounded-2xl h-96 flex justify-center bg-[#ADD8E6] border-2 border-gray-600">
				<h1 className="text-2xl font-covesb">What</h1>
			</div>
		</div>
	</>
  )
}

export default Calendar