import React from 'react';

const Rank = () => {
	return (
		<div>
			<div className='white f3'>
				{'Andrei, your current entry count is...'}
			</div>
			<div className='white f1'>
				{entries}
			</div>
		</div>
	);
}

export default Rank;