import React, { useState } from "react";
import Link from "next/link";
import { Fragment } from "react";
import Image from "next/image";

function Navbar() {
	const [open, setOpen] = useState(false)

	const toggleOpen = () =>{
		console.log('hitting')
		setOpen(!open)
	}
    return (
        <Fragment>
            <ul className="flex flex-col sm:flex-row justify-between px-16 items-center pt-4">
                <li className="flex gap-4 items-center">
                    <h1 className="text-6xl font-covesb "><Link href="/" >Texas Wake</Link></h1>
					{
						open?
						<button onClick={toggleOpen} className="sm:hidden">
						<div className="mt-4">
							<Image width={30} height={30} src='/menuu.png'></Image>
						</div>
						</button>
						:

						<button onClick={toggleOpen} className="sm:hidden">
							<div className="mt-4">
								<Image width={30} height={30} src='/menu.png'></Image>
							</div>
						</button>
					}
                </li>

				{open?
					<div className="relative sm:hidden flex flex-col gap-4 justify-center items-center">
					<li>
						<h1 className="font-covesb text-xl text-center "> <Link href="/calendar">Calendar</Link></h1>
					</li>
					<li>
						<h1 className="font-covesb text-xl text-center"> <Link href="/about">About</Link></h1>
					</li>
					<li>
						<h1 className="font-covesb text-xl text-center"> <Link href="/membership">Become A Member</Link></h1>
					</li>
					<li>
						<h1 className="font-covesb text-xl text-center"> <Link href="/competitions">Competitions</Link></h1>
					</li>
					<li>
						<h1 className="font-covesb text-xl text-center"> <Link href="/sponsors">Sponors</Link></h1>
					</li>
					<li>
						<h1 className="font-covesb text-xl text-center"> <Link href="/photos">Photos</Link></h1>
					</li>
					<li>
						<h1 className="font-covesb text-xl text-center"> <Link href="/merch">Merch</Link></h1>
					</li>
					<li>
						<h1 className="font-covesb text-xl text-center"> <Link href="/contact">Contact</Link></h1>
					</li>
				</div>
				:
				<></>
				}
					
				<div className="hidden sm:flex flex-wrap gap-8">
					<li>
						<h1 className="font-covesb text-xl "> <Link href="/calendar">Calendar</Link></h1>
					</li>
					<li>
						<h1 className="font-covesb text-xl"> <Link href="/about">About</Link></h1>
					</li>
					<li>
						<h1 className="font-covesb text-xl"> <Link href="/membership">Become A Member</Link></h1>
					</li>
					<li>
						<h1 className="font-covesb text-xl"> <Link href="/competitions">Competitions</Link></h1>
					</li>
					<li>
						<h1 className="font-covesb text-xl"> <Link href="/sponsors">Sponors</Link></h1>
					</li>
					<li>
						<h1 className="font-covesb text-xl"> <Link href="/photos">Photos</Link></h1>
					</li>
					<li>
						<h1 className="font-covesb text-xl"> <Link href="/merch">Merch</Link></h1>
					</li>
					<li>
						<h1 className="font-covesb text-xl"> <Link href="/contact">Contact</Link></h1>
					</li>
				</div>
            </ul>
			<div className="flex justify-center">
				<hr className="border-[.5px] w-11/12 text-center border-black"></hr>
			</div>
        </Fragment>
    );
}

export default Navbar;
