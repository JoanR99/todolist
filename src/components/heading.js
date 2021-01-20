import React from 'react';

const Heading = ({ headingName }) => {
	return (
		<div className="box" id="heading">
			<h1>{headingName}</h1>
		</div>
	);
};

export default Heading;
