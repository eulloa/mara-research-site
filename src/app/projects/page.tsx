import React from 'react';
import Image from 'next/image';

export default function Page() {
	return (
		<div className="flex justify-center mt-8">
			<Image src="/img/luca.gif" width="275" height="275" alt="Luca" />
		</div>
	);
};
