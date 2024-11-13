const imgs=document.querySelectorAll('.slider ul img');
let n=Math.floor(Math.random() * 5) + 1;
function changeslide()
{
  for(let i=0;i<imgs.length;i++)
  {
    imgs[i].style.display='none';
  }
  imgs[n].style.display='block';
}
changeslide();
