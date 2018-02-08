/* JavaScript functions library */

function setId(userId){
	sId = userId;
	localStorage.setItem('userId',sId,100);
}

function setPartnerId(userId){
	sId = userId;
	localStorage.setItem('partnerId',sId,100);
}

function removeId(){
	localStorage.setItem('userId',"undefined",100);
}

function removePartnerId(){
	localStorage.setItem('partnerId',"undefined",100);
}

function removeCookie(){
	localStorage.clear();
}