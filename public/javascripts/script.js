var images=[]; var c=0;
images=document.querySelectorAll("#image");
function reset(){
	for(let i=0;i<images.length;i++)
	{
		images[i].style.display='none';
	}
}
function start(){
	reset();
	images[0].style.display='block';
}
start();
function ss(){
		if(c<=images.length-1)
		{
			reset();images[c].style.display='block';c++;
		}
		else
			c=0;
}
setInterval(ss,2000);