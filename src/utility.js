export function cancelPropagation(e) {
	if(!e)
	{
		e = window.event;
	}

	if(e.stopPropagation)
	{
		e.stopPropagation();
	}
}
