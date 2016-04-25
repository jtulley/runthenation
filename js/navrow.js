toggleNavItemsDisplay = function ()
{
  var navrows = document.getElementsByClassName('navitemsrow');
  var i;
  for (i = 0; i < navrows.length; i++) 
  {
		if (navrows[i].style.display === "block")
		{
			navrows[i].style.display="none";
		} else
		{
			navrows[i].style.display="block";
		}
  }
}
