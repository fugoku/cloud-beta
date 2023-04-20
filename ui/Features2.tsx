import React from 'react';
import featuresData from '../app/assets/featuresData';


const Features2 = () => {
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
		<div
			className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"
		>
			<div className="mt-12">
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{featuresData.map((feature) => (
						<div key={feature.icon} className="pt-6">
							<div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
								<div className="-mt-6">
									<div>
										<span
											className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg"
										>
											<div  aria-hidden="true" className="h-6 w-6 text-white">
												{feature.icon}
											</div>
												
										</span>
									</div>
									<h3
										className="mt-8 text-lg font-medium text-gray-900 tracking-tight"
									>
										{ feature.title }
									</h3>
									<p className="mt-5 text-base text-gray-500">
										Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
										Et magna sit morbi lobortis.
									</p>
								</div>
							</div>
						</div>
					))}
					
				</div>
			</div>
		</div>
	</div>
  )
}

export default Features2