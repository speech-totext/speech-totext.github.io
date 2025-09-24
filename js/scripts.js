const burger = document.querySelector('.navbar-toggler');

function toggle(){
	
    if(document.querySelector('#topmenu').style.display==='none'){
        document.querySelector('#topmenu').style.display='block';
        document.querySelector('#topmenu').style['border-bottom']='outset';
        document.querySelector('#topmenu').style['text-align']='center';
    }else{
		 document.querySelector('#topmenu').style.display='none';
	}
}
burger.addEventListener('click',toggle);	



