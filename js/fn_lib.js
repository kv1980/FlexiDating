/* JavaScript functions library */

function setId(userId){
	sId = userId;
	localStorage.setItem('userId',sId,100);
	window.history.go(0);
}

function removeId(){
	localStorage.setItem('userId',"undefined",100);
	window.history.go(0);
}

function removeCookie(){
	localStorage.clear();
	window.history.go(0);
}